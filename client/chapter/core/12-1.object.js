/* --------- */
/* Object    */
/* --------- */

/* global isObject */ // eslint가 isObject를 global로 인식해서 밑줄을 없앰

const html = /* html */ `
  <h1>title</h1>
  <div class="first">hello</div>
`;

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  '.dialog': {
    position: 'fixed',
    zIndex: 10000,
    top: '50%',
    left: '50%',
    width: '60vw',
    maxWidth: 800,
    height: '40vh',
    minHeight: 280,
    transform: 'translate(-50%, -50%)',
  },
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;
authUser = {
  uid: 'user-id-akskdkfjbnek!@123',
  name: 'tiger',
  email: 'seonbeom2@gmail.com',
  isSginIn: false,
  permission: 'paid', // paid | free
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSginIn);
console.log(authUser.permission);
// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSginIn']);
console.log(authUser['permission']);

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'tel'; // phone | tel

function createUser(name, age, phone = '010-0000-0000') {
  return {
    name,
    age,
    [calculateProperty]: phone,
  };
}
const user = createUser('tiger', '35');

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열
function getPropertiesList(object) {
  let result = [];

  for (let key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

const result = getPropertiesList(authUser);

// 프로퍼티 제거 or 삭제

function removeProperty(obj, prop) {
  if (isObject(obj)) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      obj[prop] = null;
      return true;
    }
  }
  return false;
}
function deleteProperty(obj, prop) {
  if (isObject(obj)) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return delete obj[prop];
    }
  }
  return false;
}

removeProperty(authUser, 'name'); // authUser.name = null
deleteProperty(authUser, 'name'); // delete authUser.name

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin: false,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

// 객체의 key만을 모아놓은 배열
let keyList = Object.keys(authUser);
// console.log(keyList);

// 객체의 value만을 모아놓은 배열
let valueList = Object.values(authUser);
// console.log(valueList);

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
const arr = [10, 100, 1000, 10000];
const [a1, ...rest] = arr;

const [first, second, third] = document.querySelectorAll('span'); // NodeList

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

const salaries = {
  김지수: 85,
  이정현: 50,
  박수양: 6,
  장효진: 33,
};

let total = 0;
for (let [key, value] of Object.entries(salaries)) {
  total += value;
}

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const {
  김지수: kim,
  이정현: lee,
  박수양: park,
  장효진: jang,
  이경화 = 500,
} = salaries;

function createUserData(obj) {
  const { userName, age, job, gender = 'male' } = obj;
  return {
    userName,
    age,
    job,
    gender,
  };
}

const user1 = createUserData({
  userName: 'tiger',
  age: 40,
  job: 'developer',
});
