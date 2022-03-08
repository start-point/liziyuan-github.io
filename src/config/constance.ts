import { ITypeWriterList } from '@/utils/typewriter';

export const PROJECT_NAME = 'liziyuan-react-web';
export const WEBSITE_TITLE = '李子园';
export const TITLE = '李子园';
export const TITLE_ENTRY = '嗒嗒嗒';
export const TITLE_OUT = '是不是要離開我了';
export const CONSOLE_TEXT = '你想用控制台看什么呢😊';
export const CONSOLE_BGS = ['#a18cd1', '#fbc2eb'];
export const MUSIC_SEARCH_DEFAULT_LIMIT = 20;

/**
 * 首页
 */
export const TYPE_WRITER: ITypeWriterList[] = [
  {
    text: 'Hello,',
    tagName: 'h1',
    config: {},
    domAttr: {},
    reactAttr: {},
  },
  {
    text: '有幸，能在这里看到你...',
    tagName: 'h2',
    config: {},
    domAttr: {},
    reactAttr: {},
  },
];

/**
 * notice 提示信息
 */
export const TIP_INFO = {
  FIRST_INFO: '欢迎来到李子园的个人网站🎉',
  FIRST_HOME: '欢迎来到首页🎉',
  FIRST_USER: '欢迎进入个人页面😊',
  FIRST_URL: '欢迎进入常用链接页面,希望能帮助到你😘',
};

/**
 * 路由
 */
export const NAV_INFO = {
  TITLE_HOME: '首页',
  TITLE_USER: '个人',
  TITLE_LINK_URL: '常用链接',
};

// 底部 copyright 配置
export const COPY_RIGHT_CONFIG = [
  {
    name: '链接',
    to: '/interlink',
  },
];
