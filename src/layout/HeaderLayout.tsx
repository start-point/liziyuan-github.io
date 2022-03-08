import './HeaderLayout.less';

import classNames from 'classnames';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '@/assets/images/logo.gif';
import Notice from '@/component/Notice';
import Switch from '@/component/Switch';
import { TIP_INFO } from '@/config/constance';
import { PROJECT_NAME } from '@/config/constance';
import { useStore } from '@/utils/use';
import { changePageMode } from '@/utils/utils';

interface IHeaderLayoutProps {
  routes: any;
}

/* NOTE: 导航栏
 * @param props
 * @returns
 */
export const HeaderLayout: FunctionComponent<IHeaderLayoutProps> = (props) => {
  const { routes } = props;
  console.log('🚀 ~ file: HeaderLayout.tsx ~ line 24 ~ routes', routes);

  let [isDark, setDark] = useState(useStore().colorStore.mode === 'dark');

  useEffect(() => {
    Notice.default(TIP_INFO.FIRST_INFO);
  }, []);

  /**
   * 切换主题颜色
   * @param isDarkMode
   */
  const theme = (isDarkMode: boolean) => {
    setDark(() => (isDark = isDarkMode));
    changePageMode();
  };

  const classString = classNames({
    [`${PROJECT_NAME}-nav`]: true,
  });

  return (
    <nav className={classString}>
      <div className="nav-content">
        <div className="nav-logo">
          <img className="nav-img" src={logo} alt="" />
        </div>
        <div className="nav-lists">
          {routes?.map((item: any, index: number) => {
            if (!item.hidden) {
              return;
            }
            return (
              <NavLink className="nav-list" to={item.path} key={index}>
                {item.meta.title}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="nav-switch">
        <Switch
          checked={isDark}
          onChange={theme}
          unCheckedName={<i className="iconfont">&#xe6db;</i>}
          checkedName={<i className="iconfont">&#xe62b;</i>}
        />
      </div>
    </nav>
  );
};
