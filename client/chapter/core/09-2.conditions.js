/* ------------------- */
/* Logical Operators   */
/* ------------------- */
let age;
if (age >= 14 && age <= 90) {
  console.log('통과');
}

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리곱 할당 연산자
// a &&= b;

// 논리합(또는) 연산자
let AorB = a || b;

// 논리합 할당 연산자
// a ||= b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy;

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy;

/* -------------------------------------------------------------------------- */
/*                            프롬프트를 사용하여 로그인 구현해보기           */
/* -------------------------------------------------------------------------- */

let id = prompt('아이디를 입력하세요.');
if (id === null || id.replace(/\s*/g, '') === '') {
  alert('취소되었습니다.');
} else if (id.toLowerCase() === 'admin') {
  let password = prompt('비밀번호를 입력하세요.');
  if (password?.toLowerCase() === 'themaster') {
    alert('환영합니다!');
  } else if (password === '' || password === null) {
    alert('취소되었습니다.');
  } else {
    alert('인증에 실패하였습니다.');
  }
} else {
  alert('아이디가 올바르지 않습니다.');
}
