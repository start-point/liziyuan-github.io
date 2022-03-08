import './switch.less';

import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { PROJECT_NAME } from '@/config/constance';

interface ISwitchProps {
  checked: boolean;
  unCheckedName: any;
  checkedName: any;
  onChange: (m?: any) => void;
}

const Switch = (props: ISwitchProps) => {
  const [checked, setChecked] = useState(props.checked);

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const setCheckedHandle = () => {
    props.onChange && props.onChange(!checked);
    setChecked((checked) => !checked);
  };

  const classString = classNames({
    [`${PROJECT_NAME}-comp-switch`]: true,
    [`switch-checked`]: !!checked,
  });

  return (
    <div className={classString} onClick={setCheckedHandle}>
      <CSSTransition
        in={checked}
        timeout={1}
        classNames="side-low-left-fade"
        appear={true}
        unmountOnExit={true}>
        <span className="switch-on">{props.checkedName}</span>
      </CSSTransition>
      <CSSTransition
        in={!checked}
        timeout={1}
        classNames="side-low-left-fade"
        appear={true}
        unmountOnExit={true}>
        <span className="switch-off">{props.unCheckedName}</span>
      </CSSTransition>
      <span className="switch-range"></span>
    </div>
  );
};

Switch.defaultProps = {
  checked: false,
  unCheckedName: 'off',
  checkedName: 'on',
  onChange: null,
};

export default Switch;
