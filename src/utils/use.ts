import { useContext, useState } from 'react';
import React, { useEffect } from 'react';

import store from '@/store';

export const storeContext = React.createContext(store);

export const useStore = () => {
  const store = useContext(storeContext);
  return store;
};

export function useUpdate() {
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {}, [isUpdate]);

  setIsUpdate((isUpdate) => !isUpdate);
}
