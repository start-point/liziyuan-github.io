import { lazy } from 'react';

import { NAV_INFO } from '@/config/constance';
import { IRoute } from '@/types/route';
const OneUser = lazy(() => import('@/pages/oneUser'));
const Search = lazy(() => import('@/pages/search'));
const LinkUrl = lazy(() => import('@/pages/linkUrl'));
const Home = lazy(() => import('@/pages/home'));

const routes: IRoute[] = [
  {
    path: '/home',
    component: Home,
    hidden: true,
    meta: {
      title: NAV_INFO.TITLE_HOME,
    },
  },
  {
    path: '/user',
    component: OneUser,
    hidden: true,
    meta: {
      title: NAV_INFO.TITLE_USER,
    },
  },
  {
    path: '/search',
    component: Search,
    hidden: true,
    meta: {
      title: NAV_INFO.TITLE_SEARCH,
    },
  },
  {
    path: '/linkUrl',
    component: LinkUrl,
    hidden: true,
    meta: {
      title: NAV_INFO.TITLE_LINK_URL,
    },
  },
  {
    path: '/*',
    meta: {
      title: NAV_INFO.TITLE_HOME,
    },
    hidden: false,
    redirect: '/home',
  },
];

export default routes;
