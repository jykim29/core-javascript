const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const yeon = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };
  const response = await fetch(url, restOptions);
  if (response.ok) response.data = await response.json();
  return response;
};

// const user = await yeon({ url: END_POINT });
// console.log(user.data);

// yeon({
//   url: END_POINT,
//   method: 'POST',
//   body: { name: 'tiger' },
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   },
// });

yeon.get = (url, options) => {
  return yeon({ url, ...options });
};

yeon.post = (url, body, options) => {
  return yeon({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

yeon.delete = (url, options) => {
  return yeon({
    method: 'DELETE',
    url,
    ...options,
  });
};

yeon.put = (url, body, options) => {
  return yeon({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

yeon.get('https://jsonplaceholder.typicode.com/users');
