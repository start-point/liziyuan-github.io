import { useEffect, useState } from 'react';

/* NOTE: 页面首次加载 提示语
 * @returns
 */
export const useArelt = () => {
  const [state, setState] = useState<any>({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setState((s: any) => ({ ...s, open: false }));
    }, 3_000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return state;
};
