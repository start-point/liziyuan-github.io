import LogUtils from 'd-utils/lib/logUtils';
import PF from 'd-utils/lib/performanceUtils';
import React from 'react';
import ReactDOM from 'react-dom';

import { CONSOLE_BGS, CONSOLE_TEXT } from '@/config/constance';
import selfEvent from '@/utils/event';
import { initPageMode } from '@/utils/utils';

import App from './App';
import store from './store';
import { storeContext } from './utils/use';

PF.logger();
/**
 * 控制台打印
 */
LogUtils.logBeauty(CONSOLE_TEXT, {
  isMax: true,
  colors: CONSOLE_BGS,
});

selfEvent.addVisiblityChange();
ReactDOM.render(
  <storeContext.Provider value={store}>
    <React.StrictMode>
      <div id="liziyuan-react-web-container" className={initPageMode()}>
        <App />
      </div>
    </React.StrictMode>
  </storeContext.Provider>,
  document.getElementById('root'),
);
