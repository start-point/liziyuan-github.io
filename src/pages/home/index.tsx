import './home.less';

import classNames from 'classnames';
import React from 'react';

import { PROJECT_NAME, TYPE_WRITER } from '@/config/constance';
// import typeWriter, { ITypeWriterList } from '@/utils/typewriter';

/**
 * 首页 组件
 * @param props
 * @returns
 */
const Home = () => {
  // const homeRef: any = useRef(null);

  // const initTypeWriter = async () => {
  //   for (let i = 0; i < TYPE_WRITER.length; i++) {
  //     let list: ITypeWriterList = TYPE_WRITER[i];
  //     list.container = homeRef.current;
  //     await typeWriter(TYPE_WRITER[i] as ITypeWriterList);
  //   }
  // };

  // /**
  //  * 页面加载执行一次
  //  */
  // useEffect(() => {
  //   if (!window.FRIST_HOME) {
  //     initTypeWriter();
  //   }
  //   return function clearWriter() {
  //     window.FRIST_HOME = true;
  //   };
  // });
  const classString = classNames({
    [`${PROJECT_NAME}-home`]: true,
    [`liziyuan-page-wrap`]: true,
  });
  return (
    <div className={classString}>
      {TYPE_WRITER.map((item) => {
        return <>{item.text}</>;
      })}
    </div>
  );
};

export default Home;
