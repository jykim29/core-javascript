/* ----------------------- */
/* Number Type             */
/* ----------------------- */

// 1억 (million)
// 0의 갯수가 많아 금액을 쉽게 파악하기 어렵습니다.
let riches = 100000000;

// 1,000 단위 구분하듯 사용할 수 있을까요?
riches = 100_000_000;

// 숫자 옆에 `e`를 붙여 0의 갯수를 설정할 수 있습니다.
riches = 1e8;

// 그렇다면 아래 작성된 숫자 값은 얼마일까요?
riches = 1.45e6; // → 1.45 * 10 ** 6

// 작은 수도 `e`를 사용해 표현할 수 있습니다.
riches = 1e-6; // → 1 / 10 ** 6

/* 어림수 ---------------------------------------------------------------- */

let number = 90_127.53100032;

// 내림
let floor = Math.floor(number);
console.log('floor:', floor);

// 반올림
let round = Math.round(number);
console.log('round:', round);
// 올림
let ceil = Math.ceil(number);
console.log('ceil:', ceil);
// 절삭(소수점 이하)
let truncate = Math.trunc(number);
console.log('trunc:', truncate);
// 난수
let random = Math.random() * number;
console.log('random:', random);
// 여러 수 중, 최댓값
let max = Math.max(30, 50, 100);
console.log('max:', max);

// 여러 수 중, 최솟값
let min = Math.max(-10, 5, 100, -90);
console.log('min:', min);
// 거듭제곱
let pow = Math.pow(2, 53);
console.log('pow:', pow);

// Math.sin을 이용한 텍스트 눈 내리는 애니메이션
// let count = 0;
// setInterval(() => {
//   document.querySelector('.first').style.transform = `translate(${
//     Math.sin(++count) * 10
//   }px, ${++count * 5}px)`;
// }, 100);

// 최소, 최대 값 사이 난수 반환 함수
let getRandomMinMax = (min, max) => {
  if (min > max)
    throw new Error(
      'getRandomMinMax 함수의 첫 번째 인수는 두 번째 인수보다 클 수 없습니다.'
    );
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};
getRandomMinMax(20, 30);

// 절대값
const abs = Math.abs(-10);
console.log('abs:', abs);
/* 진법 ------------------------------------------------------------------ */

// 16진수 0x
//  8진수 0o
//  2진수 0b

// parseInt(string, base) → 진수 2 <= base <= 36
// number.toString(base) → base 진수 변환 후 문자 값 반환

/* 컬러 변환 -------------------------------------------------------------- */

const colorChip = {
  red: 207,
  green: 102,
  blue: 13,
};
const hexademicalColorChip = {};
const decimalColorChip = {};
// colorChip의 red, green, blue 값을 변환해봅니다.

// 1. 10진수 → 16진수 변환하기
for (let [key, value] of Object.entries(colorChip)) {
  hexademicalColorChip[key] = '0x' + value.toString(16).padStart(2, '0');
}
console.log(hexademicalColorChip);

// 2. 16진수 → 10진수 변환하기
for (let [key, value] of Object.entries(hexademicalColorChip)) {
  decimalColorChip[key] = parseInt(value, 16);
}
console.log(decimalColorChip);
