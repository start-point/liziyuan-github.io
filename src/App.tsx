import '@/styles/index.less';

import React, { Suspense } from 'react';

import { Loading } from '@/component/loading';
import { RoutesLayout } from '@/layout/RoutesLayout';
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RoutesLayout />
    </Suspense>
  );
};

export default App;
