/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};
console.log(calculateTotal(1000, 5000, 4500, 15000));
// let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
//                rest parameter
let calcAllMoney = (...args) => args.reduce((acc, cur) => acc + cur, 0);
console.log(calcAllMoney(1000, 5000, 4500, 15000));

// 화살표 함수와 this
// 일반 함수
// constructor 내장
// - this : 나를 호출한 대상을 this로 찾음.

// 화살표 함수
// constructor 비내장
// - this : 자체를 바인딩하지 않음

const user = {
  total: 0,
  name: '상원',
  age: 13,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades() {
    // concise method
    // constructor 비내장

    // this = user

    this.grades.forEach((item) => (this.total += item));

    return this.total;

    // console.log( '일반 함수 :' , this);

    // const sayHi =()=>{
    //   console.log('sayHi : ' , this);
    // }

    // sayHi()
  },
};

const result2 = user.totalGrades();

console.log(result2);

// 메서드 체이닝  : jQuery
// user.totalGrades().grades

// $().fadeOut().css().animate()

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }
  return result;
};
console.log(pow(2, 53));

let powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

console.log(powExpression(2, 53));
// console.log(pow(2, 53));

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  // for문 사용
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

console.log(repeat('hello😄', 3)); // 'hello😄hello😄hello😄'

const repeatExpresssion = (text, repeatCount) => {
  return Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, '');
};
console.log(repeatExpresssion('hello😄', 3));
