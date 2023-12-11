/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

// function calcTotal(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// const resultX = calcTotal(10000, 8900, 1360, 2100);
// const resultY = calcTotal(21500, 3200, 9800, 4700);
// const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  let total = 0;
  // for문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // for ~ of문
  // for (let value of arguments) {
  //   total += value;
  // }

  // Array 프로토타입 메서드 빌려쓰기
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });

  /* 유사 배열을 진짜 배열로 만들기 */
  // slice 프로토타입 메서드를 빌려쓰기
  // const arr = Array.prototype.slice.call(arguments);

  // from 정적 메서드를 사용하기
  // const arr = Array.from(arguments);

  // 스프레드 사용하기
  const arr = [...arguments];

  arr.forEach(function (item) {
    total += item;
  });
  // map: 값을 반환함, 단 배열만 반환
  // filter : 값을 반환함 단, 배열만 반환
  // reduce : 값을 반환함.
  arr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

  // arguments의 태생(부모) 자체를 Array로 바꾼다면?
  // arguments.__proto__ = Array.prototype;
  // console.log(arguments);
  return total;
};

const result = calculateTotal(1000, 2300, 5000, 1500, 3500, 4600, 35000);
console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (isActive, success, fail) {
  if (isActive) success();
  else fail();
};

callbackFunctionExpression(
  true,
  function () {
    console.log('성공');
  },
  function () {
    console.log('실패');
  }
);

function movePage(url, success, fail) {
  if (url) success(url);
  else fail();
}

movePage(
  'www.naver.com',
  function (url) {
    console.log(url + ' 해당 페이지로 넘어갑니다.');
  },
  function () {
    console.log('입력하신 url 주소는 없는 주소입니다.');
  }
);

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

let IIFE;

// 함수가 선언 됨과 동시에 실행되는 것을 말합니다.

// 📂
// import css from 'css.js' // module

// var는 블록 스코프 : x
// var는 함수 스코프 : o

// incapsulation (캡슐화)
// 모듈화

// const MASTER = (function (g){

//   console.log( g.alert() );
//   let uuid =  'askdjazxjd!@#!@$123';

//   return {
//     getKey(){
//       return uuid
//     },
//     setKey(value){
//       uuid = value
//     }
//   }

// })(window);

// // console.log(MASTER.getKey());

// MASTER.setKey('새로운 비밀번호')

const css = (function () {
  function getStyle(node, prop) {
    if (typeof node === 'string') node = document.querySelector(node);
    if (typeof prop !== 'string')
      throw new Error(
        'getStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.'
      );

    return getComputedStyle(node, null)[prop];
  }

  function setStyle(node, prop, value) {
    if (typeof node === 'string') node = document.querySelector(node);
    if (typeof prop !== 'string')
      throw new Error(
        'setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.'
      );
    if (!value)
      throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');

    node.style[prop] = value;
  }

  function css(node, prop, value) {
    // if(!value){
    //   return getStyle(node,prop) // getter
    // }else{
    //   setStyle(node,prop,value) // setter
    // }

    return !value ? getStyle(node, prop) : setStyle(node, prop, value);
  }
  return css;
})();
