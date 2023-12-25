import { isString } from './typeOf.js';

const { localStorage: storage } = window;

// storage.setItem('obj', JSON.stringify({ name: 'tiger', age: 15 }));
// console.log(JSON.parse(storage.getItem('obj')));

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      if (typeof value === 'object') value = JSON.stringify(value);
      storage.setItem(key, value);
      resolve('성공');
    } else reject({ message: 'key는 문자 타입이어야 합니다.' });
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      const item = storage.getItem(key);
      if (!item) reject({ message: '저장된 key를 찾을 수 없습니다.' });
      const isStringObject = /^[{[].*[}]]$/.test(item);
      if (isStringObject) resolve(JSON.parse(item));
      else resolve(item);
    } else reject({ message: 'key는 문자 타입이어야 합니다.' });
  });
}

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}

setStorage('obj', { name: 'tiger' })
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

setStorage('name', 'tiger')
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

getStorage('obj')
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

getStorage('name')
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
