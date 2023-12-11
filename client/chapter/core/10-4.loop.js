/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {
    return '난 누구게!';
  },
};
javaScript.__proto__.nickName = 'tiger';

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
/*const key = 'toString';
console.log(key in javaScript);*/

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
const key = 'createAt';
// console.log(javaScript.hasOwnProperty(key));  -- 직접 호출 금지
console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
for (let key in javaScript) {
  // console.log(key);
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

// for ~ in 은 객체를 순환하는 용도로 사용해주세요.
// 배열은 순서 보장이 안됨, 성능도 안좋음... for ~ in 은 객체에 양보하세요.
const tens = [10, 100, 1000, 10000];
for (let key in tens) {
  console.log(key);
  // console.log(tens[key]);
}

const obj = {};
obj.nickName = 'tiger';

// 객체의 키가 가지는 속성들을 직접 심어줄 수 있다.
Object.defineProperty(obj, 'key1', {
  enumerable: false,
  value: 'kindtiger',
});

Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
    enumerable: true,
  },
  property2: {
    value: 'hello',
    writable: false,
    configurable: true,
  },
});
