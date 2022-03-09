import './search.less';

import className from 'classnames';
import { isEmptyStr } from 'd-utils/lib/expUtils/index';
import { parseUrl } from 'd-utils/lib/urlUtils';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import LoadingTips from '@/component/LoadingTips';
import { MUSIC_SEARCH_DEFAULT_LIMIT, PROJECT_NAME } from '@/config/constance';
import useLoadingTips from '@/hooks/useLoadingTips';
import useScroll from '@/hooks/useScroll';
import { get } from '@/utils/fetch';

interface MusicSearchProps {
  history: any;
}

/**
 * 下次修改
 * @param props
 * @returns
 */
const MusicSearch = (props: MusicSearchProps) => {
  const searchInput: any = useRef(null);
  const searchGroup: any = useRef(null);

  const [offset, setOffset] = useState(0);
  const [musicList, setMusicList] = useState<any>([]);
  const [searchLists, setSearchList] = useState([]);

  const [keywords, setKeywords] = useState(
    parseUrl(decodeURIComponent(location.href)).keywords,
  );

  const loadingTipsFn = useLoadingTips(false, '搜索中...');

  const loadMoreInfo = () => {
    if (loadingTipsFn.loading) return;
    setOffset((offset) => (offset = offset + MUSIC_SEARCH_DEFAULT_LIMIT));
  };

  useLayoutEffect(() => {
    searchInput.current.focus();
  }, [searchInput]);

  useScroll(searchGroup, loadMoreInfo);

  useEffect(() => {
    if (hasSearchList) {
      getSearchLists();
    } else {
      getSearchLists(true);
    }
  }, [keywords, offset]);

  const hasSearchList = useMemo(() => {
    return searchLists.length > 0;
  }, [searchLists]);

  const handleSearch = async (e: any) => {
    const event = e || window.event;
    var code = event.keyCode || event.which || event.charCode;
    if (code === 13) {
      const words = searchInput.current.value;
      if (isEmptyStr(words) || words === keywords) {
        return;
      }
      const params = {
        keywords: words,
      };

      const data = await get(`/api/search?keywords=${words}`);
      setMusicList(data);
      console.log('🚀 ~ file: index.tsx ~ line 83 ~ handleSearch ~ data', data);
      reset(words);
    }
  };

  const reset = (words: string) => {
    setSearchList((searchLists) => (searchLists = []));
    setOffset((offset) => (offset = MUSIC_SEARCH_DEFAULT_LIMIT));
    setKeywords((keywords: any) => (keywords = words));
  };

  const getSearchLists = useCallback(
    async (isSearch = false) => {
      const keywords = searchInput.current.value;
      if (isEmptyStr(keywords)) {
        return;
      }
      loadingTipsFn.showLoading(isSearch ? '搜索中' : '加载中');
      if (isSearch && musicList?.result.songs?.length === 0) {
        loadingTipsFn.showLoading(`未能搜索到关于 '${keywords}' 相关的各歌曲`);
        return;
      }
      loadingTipsFn.hideLoading();
    },
    [offset],
  );

  const classString = className({
    [`${PROJECT_NAME}-music-search`]: true,
    [`input-active`]: keywords || hasSearchList,
  });

  const classSearchGroup = className({
    [`${PROJECT_NAME}-music-search-group`]: true,
    [`show`]: hasSearchList,
  });

  return (
    <section className={classString}>
      <div className={`${PROJECT_NAME}-music-search-entry`}>
        <input
          className={`${PROJECT_NAME}-music-search-entry-input`}
          type="text"
          defaultValue={keywords}
          placeholder="听首歌消遣一下？"
          onKeyDown={handleSearch}
          ref={searchInput}
        />
      </div>
      <div className={classSearchGroup} ref={searchGroup}>
        <ul className={classString}>
          {musicList?.result?.songs?.map((v: any) => (
            // eslint-disable-next-line react/jsx-key
            <li
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <span>
                <img style={{ width: '30px' }} src={v.artists[0].img1v1Url} alt="" />
                {v.name}
              </span>
              <span>播放 | 下载</span>
              <span>{v.artists[0].name}</span>
            </li>
          ))}
        </ul>
        <LoadingTips show={loadingTipsFn.loading} text={loadingTipsFn.text} />
      </div>
    </section>
  );
};

export default MusicSearch;
