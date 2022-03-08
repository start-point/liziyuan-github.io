import classNames from 'classnames';
import React from 'react';

import { PROJECT_NAME } from '@/config/constance';

/**
 * time 组件
 * @returns
 */
const oneUser = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-oneUser`]: true,
    [`liziyuan-page-wrap`]: true,
  });
  return <div className={classString}>正在开发中...</div>;
};

export default oneUser;
