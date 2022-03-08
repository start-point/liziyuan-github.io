import React from 'react';

import imgUrl from '@/assets/loading.svg';
export const Loading = () => {
  return (
    <div style={{ height: '400px' }}>
      <img
        className="flex"
        style={{ margin: '200px auto' }}
        width="80"
        height="80"
        src={imgUrl}
        alt=""
      />
    </div>
  );
};
