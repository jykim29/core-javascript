import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from './typeOf.js';
import { xhrPromise } from './xhr.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     delay(() => {
//       first.style.top = '0px';
//       second.style.top = '0px';
//     });
//   });
// });

// Promise API
const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '아싸 성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

export function delayP(options) {
  let config = { ...defaultOptions };
  if (isNumber(options)) config.timeout = options;
  if (isObject(options)) config = { ...defaultOptions, ...options };

  let { shouldReject, timeout, data, errorMessage } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) resolve(data);
      else reject({ message: errorMessage });
    }, timeout);
  });
}

// delayP(3000).then((res) => console.log(res));

// delayP(false)
//   .then((res) => {
//     first.style.top = '-100px';
//     second.style.top = '100px';

//     return delayP();
//   })
//   .then((res) => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     return delayP();
//   })
//   .then((res) => {
//     first.style.top = '0px';
//     second.style.top = '0px';
//     return delayP();
//   })
//   .catch((err) => console.log(err));

// async 함수 - 함수가 항상 promise 객체를 반환한다.
//            - await 사용 -> promise 객체의 결과를 반환
// await - 코드의 실행 흐름 제어 (멈춤)
//       - result 값 가져오기

async function delayA(data) {
  return data;
}
const value = delayA('범쌤');

// then을 이용한 방법
// value.then((res) => console.log(res));

// await을 이용한 방법
// console.log(await value);

// 보통 할당할 때 await을 사용
const value2 = await delayA('범쌤');
// console.log(value2);

async function 라면끓이기() {
  const 물 = await delayP({ data: '물 넣기' });
  console.log(물);
  const 스프 = await delayP({ data: '스프 넣기' });
  console.log(스프);
  const 면 = await delayP({ data: '면 넣기' });
  console.log(면);
  const 그릇 = await delayP({ data: '그릇에 담기' });
  console.log(그릇);

  // delayP({ data: '물' })
  //   .then((res) => {
  //     console.log(res);
  //     return delayP({ data: '스프에 넣기' });
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     return delayP({ data: '면 넣기' });
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     return delayP({ data: '그릇에 담기' });
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   });

  // console.log('물넣기');
  // console.log('스프넣기');
  // console.log('면넣기');
  // console.log('그릇에 담기');
}

// 라면끓이기();

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/38');
  const imgUrl = data.sprites['front_default'];
  insertLast(document.body, `<img src=${imgUrl} />`);
}
