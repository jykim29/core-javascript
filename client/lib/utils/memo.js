// 메모이제이션

import { getNode } from '../dom';

export const memo = (() => {
  const cache = {};
  return (key, callback) => {
    if (!callback) return cache[key];
    if (cache[key]) {
      console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);
      return cache[key];
    }
    cache[key] = callback();
  };
})();

memo('cube', () => getNode('#cube'));

// memo('cube', () => getNode('#cube')); // setter
// memo('cube', () => '난 주사위'); // setter
// console.log(memo('cube'));
