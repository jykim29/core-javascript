/* --------------- */
/* While Loop      */
/* --------------- */

/*let l = 10;
while (l + 1) {
  console.log(l--);
}*/

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

/*console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]);
console.log(frontEndDev[6]);*/

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
let idx = 0;
while (idx < frontEndDev.length) {
  console.log(frontEndDev[idx++]);
}

// while 문 (역순환 : 역방향)
let i = frontEndDev.length - 1;
while (i >= 0) {
  console.log(frontEndDev[i--]);
}
// 성능 진단 : 순환 vs. 역순환
