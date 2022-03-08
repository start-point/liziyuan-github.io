import './notice.less';

import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { PROJECT_NAME } from '@/config/constance';
import store from '@/store';

export enum NoticeType {
  'INFO' = 'info',
  'SUCCESS' = 'success',
  'ERROR' = 'error',
  'WARNING' = 'warning',
  'DEFAULT' = 'default',
}

export interface INoticeProps {
  type: NoticeType;
  text: string | number;
}

const Notice: React.FC<INoticeProps> = observer((props) => {
  const { mode } = store.colorStore;
  const { type, text } = props;
  // const theme = localStorage.getItem;
  const classString = classNames({
    [`${PROJECT_NAME}-comp-notice`]: true,
    [`notice-${type}`]: true,
    [`${mode}`]: true,
  });
  return (
    <div className={classString}>
      <span className="notice-text">{text}</span>
    </div>
  );
});

export default Notice;
