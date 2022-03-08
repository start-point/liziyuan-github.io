import { hasClass } from 'd-utils/lib/domUtils';

import store from '@/store';

/**
 * theme 主题切换
 */
export function changePageMode() {
  const container: any = document.getElementById('liziyuan-react-web-container');
  const body: HTMLElement = document.body;
  if (hasClass(container, 'light')) {
    container.className = 'dark';
    body.className = 'dark';
    store.colorStore.changeMode('dark');
    localStorage.setItem('mode', 'dark');
  } else {
    container.className = 'light';
    body.className = 'light';
    store.colorStore.changeMode('light');
    localStorage.setItem('mode', 'light');
  }
}

/**
 * 初始化theme
 */
export function initPageMode(): string {
  const storageMode = localStorage.getItem('mode');
  const body: HTMLElement = document.body;
  let mode!: string;
  if (!storageMode) {
    mode = 'light';
    localStorage.setItem('mode', mode);
  } else {
    mode = storageMode;
  }
  store.colorStore.changeMode(mode);
  body.className = mode;
  return mode;
}

/**
 * 判断是否是开发环境
 */
// export function isProduction(): boolean {
//   return process.env.NODE_ENV === 'production';
// }
