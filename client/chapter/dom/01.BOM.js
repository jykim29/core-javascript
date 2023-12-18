/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/

/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;

// alert('aa');
// confirm('확실한가요?');

/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location;

console.log(location.href);
//  http: 프로토콜
console.log(location.protocol);
// localhost:5500 : 호스트
console.log(location.host);
// 5500 : port
console.log(location.port);
// /index.html : 경로 이름
console.log(location.pathname);
// ?type=listing&page=2 : 쿼리
console.log(location.search);

const urlParams = new URLSearchParams(location.search);

// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }

/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;

console.log(navigator.platform);
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.onLine);

// const getCoords = () => {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => resolve(pos),
//       (err) => reject(err)
//     );
//   });
// };

function getCoords() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((data) => {
      if (data) {
        const { latitude: lat, longitude: long } = data.coords;
        resolve({ lat, long });
      } else {
        reject({ message: '위치 서비스 동의 하세요' });
      }
    });
  });
}
(async () => {
  const result = await getCoords().then((data) => data);
  console.log('반환 객체', result);
  console.log('반환값', result.lat, result.long);
})();
const result = getCoords().then((data) => data);
console.log('반환 객체', result);
console.log('반환 값', result.lat, result.long);

// async function getCoords() {
//   let value = await navigator.geolocation.getCurrentPosition(
//     (data) => data.coords
//   );
//   return value;
// }

// navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
//   console.log(stream);
//   document.querySelector('#videoElement').srcObject = stream;
// });
const video = document.querySelector('#videoElement');
navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  console.log('stream', stream);
  video.srcObject = stream;
});
/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

// height : 모니터 사이즈
// availHeight : 브라우저 크기
// innerHeight : 브라우저 해상도 크기 === 100vh
// innerWidth : 브라우저 해상도 크기 === 100vw
// orientation : {
//  landscape : 가로
//  portrait : 세로
// }

/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;

// back : 뒤로가기
// forward : 앞으로가기
// go(n) : 특정 페이지수(n) 만큼 이동하기. 음수는 뒤로가기. 양수는 앞으로 가기
