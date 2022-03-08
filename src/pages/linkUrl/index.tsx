import classNames from 'classnames';
import React from 'react';

import { PROJECT_NAME } from '@/config/constance';

const linkUrl = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-linkUrl`]: true,
    [`liziyuan-page-wrap`]: true,
  });

  return <div className={classString}>linkUrl</div>;
};

export default linkUrl;
