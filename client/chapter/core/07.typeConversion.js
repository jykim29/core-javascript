/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(typeof String(YEAR));
console.log(typeof (YEAR + ''));

// undefined, null
let days = null;
let weekend;

console.log(typeof (days + ''));
console.log(typeof (weekend + ''));
// boolean
let isClicked = false;
console.log(typeof (isClicked + ''));
/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let money = null;
console.log(Number(money));

// boolean
let cutie = true;
console.log(Number(cutie));

// string
let num = '250';
console.log(Number(num));
// +, *1, /1 사용
console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string
const width = '105.3px';
console.log(Number(width));
// parseInt, parseFloat 사용
console.log(parseInt(width, 10));
console.log(parseFloat(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend));
console.log(Boolean(' '));

const value = prompt('값을 입력해주세요.');

console.log(typeof value);
