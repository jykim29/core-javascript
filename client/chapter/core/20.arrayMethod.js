/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
const isArray = (data) => Array.isArray(data);
const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

const normalIsArray = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';

const arr = [10, 100, 1000, 10_000];

const people = [
  {
    id: 0,
    name: '김다영',
    job: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'ASdkl31',
  },
  {
    id: 1,
    name: '김충만',
    job: '치킨집사장',
    age: 51,
    imageSrc: 'asFkzo23',
  },
  {
    id: 2,
    name: '조윤주',
    job: '화가',
    age: 12,
    imageSrc: 'Gzoskq13',
  },
  {
    id: 3,
    name: '송현규',
    job: '마델',
    age: 25,
    imageSrc: 'aabaq23',
  },
];

/* 요소 순환 ---------------------------- */

// forEach
arr.forEach((item, index) => {
  console.log(index, item);
});

people.forEach((item) => {
  console.log(item.job);
});

/* 이벤트 위임의 필요성 ---------------------------- */
const span = document.querySelectorAll('span');

// 모든 요소에 이벤트 리스너를 부착한다면? => 요소가 많아질 경우 메모리를 많이 잡아먹고 느려진다.
// span.forEach((item) => {
//   item.addEventListener('click', function () {
//     this.style.color = 'red';
//   });
// });

// 부모 요소에 이벤트 리스너를 부착하여 이벤트 위임을 사용한 사례
const h1 = document.querySelector('h1');
h1.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) return;
  e.target.style.color = 'red';
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 ------------------------ */

// concat
// slice

// toSorted
const sortedArray = arr.toSorted((a, b) => b - a);
// toReversed
const reversedArray = arr.toReversed();
// toSpliced
const splicedArray = arr.toSpliced(1, 2, 'javascript', 'css', 'react');

// 원본 배열 훼손
// const reverseArray = arr.reverse();
// const splicedArray = arr.splice(1,2,'javascript','css','react');
// const sortedArray = arr.sort((a,b)=> b-a);

// map
const newAge = people.map((item) => item.age - 2);
console.log(newAge);

// const card = people.map((item, index) => {
//   return /* html */ `
//     <div class='userCard card${index}'>
//       <div class="imageField">
//         <img src="${item.imageSrc}.jpg" alt="${item.alt}" />
//       </div>
//       <span>이름 : ${item.name}</span>
//       <span>나이 : ${item.age}</span>
//       <span>직업 : ${item.job}</span>
//     </div>
//   `;
// });
// card.forEach((item) => {
//   document.body.insertAdjacentHTML('beforeend', item);
// });

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
const findUser = people.find((item) => item.age < 30);
console.log(findUser);
// findIndex
const findUserIndex = people.findIndex((item) => item.name === '송현규');
console.log(findUserIndex);

/* 요소 걸러내기 --------------------------- */

// filter
const 젊은이들 = people.filter((item) => item.age < 30);
console.log(젊은이들);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);
console.log(totalAge);
const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name} : ${cur.age} 살</div>`,
  ''
);

document.body.insertAdjacentHTML('beforeend', template);
// reduceRight

/* string ←→ array 변환 ------------------ */
const str = '종명 예진 현주 지인 훈 은원';
// split : 문자 → 배열
const stringToArray = str.split(' ');
console.log(stringToArray);

// join : 배열 → 문자
const arrayToString = stringToArray.join('-');
console.log(arrayToString);
