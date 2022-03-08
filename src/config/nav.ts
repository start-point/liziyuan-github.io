export interface INavList {
  link: string;
  name: string;
  key: string;
}

export type INavLists = INavList[];

export const HomeNav: INavLists = [
  {
    name: '首页',
    link: '/home',
    key: 'home_index',
  },
  {
    name: '个人',
    link: '/blog',
    key: 'blog_index',
  },
  {
    name: '搜索',
    link: '/music/search',
    key: 'music_search',
  },
  {
    name: 'tools',
    link: '/interlink',
    key: 'interlink',
  },
];
