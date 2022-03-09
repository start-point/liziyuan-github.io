import './loading-tips.less';

import classNames from 'classnames';
import React from 'react';

import { PROJECT_NAME } from '@/config/constance';

interface ILoadingTips {
  show?: boolean;
  text?: string;
}

const LoadingTips = (props: ILoadingTips) => {
  const classString = classNames({
    [`${PROJECT_NAME}-comp-loading-tips`]: true,
    ['loading-tips-active']: props.show,
  });
  return (
    <div className={classString}>
      <span>{props.text}</span>
    </div>
  );
};

LoadingTips.defaultProps = {
  show: false,
  text: '加载中...',
};

export default LoadingTips;
