// path：src/utils/request.ts
const request = (url: string, config: any) => {
  return fetch(url, config)
    .then((res: any) => {
      if (!res.ok) {
        // 服务器异常返回
        throw Error('接口请求异常');
      }
      return res.json();
    })
    .catch((error: any) => {
      return Promise.reject(error);
    });
};

// GET请求
export const get = (url: string) => {
  return request(url, { method: 'GET' });
};

// POST请求
export const post = (url: string, data: any) => {
  return request(url, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  });
};
