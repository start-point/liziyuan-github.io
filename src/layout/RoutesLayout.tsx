import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { layoutRouteList } from '@/routes/utils';
import type { IRoute } from '@/types/route';

import { HeaderLayout } from './HeaderLayout';

/* NOTE: 路由
 * @returns
 */
export const RoutesLayout = () => {
  return (
    <>
      <Router>
        <HeaderLayout routes={layoutRouteList} />
        <Switch>
          {/* 根路径重定向 */}
          <Route exact path="/" component={() => <Redirect to="/home" />}></Route>
          {layoutRouteList.map((route: IRoute) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={
                route.component
                  ? route.component
                  : () => <Redirect to={route.redirect!} />
              }></Route>
          ))}
        </Switch>
      </Router>
    </>
  );
};
