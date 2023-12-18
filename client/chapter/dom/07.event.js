/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */
// const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
function handler() {
  console.log('클릭 발생!');
}
// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])
function handleClick() {
  console.log('클릭 발생!');
}
// first.addEventListener('click', handleClick);
// getNode('.second').addEventListener('click', () => {
//   first.removeEventListener('click', handleClick);
// });

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// first.addEventListener('mouseenter', handleClick);
// first.addEventListener('mouseleave', handleClick);

// - removeEventListener
function bindEvent(node, type, handler) {
  if (typeof node === 'string') node = getNode(node);
  node.addEventListener(type, handler);
  return () => {
    node.removeEventListener(type, handler);
  };
}
// const remove = bindEvent('.first', 'click', handleClick);

// 공 굴리기 예제 (ground 안에서만 움직이도록 수정)
const ground = getNode('.ground');
const ball = getNode('#ball');
function handleClickBall(e) {
  const { offsetX: ox, offsetY: oy } = e;
  const { clientWidth: cw, clientHeight: ch } = e.target;
  const maxRangeX = cw - ball.offsetWidth / 2;
  const minRangeX = ball.offsetWidth / 2;
  const maxRangeY = ch - ball.offsetHeight / 2;
  const minRangeY = ball.offsetHeight / 2;

  let x =
    ox > maxRangeX
      ? maxRangeX - ball.offsetWidth / 2
      : ox < minRangeX
        ? 0
        : ox - ball.offsetWidth / 2;

  let y =
    oy > maxRangeY
      ? maxRangeY - ball.offsetHeight / 2
      : oy < minRangeY
        ? 0
        : oy - ball.offsetHeight / 2;

  ball.style.transform = `translate(${x}px, ${y}px)`;
}
ground.addEventListener('click', handleClickBall);

// Debounce :입력 주기가 끝남과 동시에 이벤트를 호출한다.
function debounce(callback, limit = 100) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, limit);
  };
}
debounce(() => {}, 1000);

// call
// apply
// bind

function func(a, b) {
  console.log('this :', this);
  console.log('a :', a);
  console.log('b :', b);
}
// call(this로 바인딩할 객체, 인수1, 인수2...)
func.call('tiger', 1, 2); // 함수 바로실행

// apply: call과 비슷하지만 인수를 배열로 묶는다!
func.apply('tiger', [1, 2]); // 함수 바로 실행

// bind : call과 비슷하지만 함수를 실행시키진 않는다!
func.bind('tiger', 1, 2); // 바로 실행 안함
const a = func.bind('tiger', 1, 2); // 변수에 할당하고
a(); // 변수를 실행시켜야 한다!

// 그러면 함수funcA와 함수 funcB가 있는데 funcB.apply(funcA, args)를 실행하고 funcB함수안에서 this를 사용하면 funcA로 가서 거기 있는 변수들을 사용할 수 있는건가요?
function funcA(a, b, c) {
  console.log(a, b, c);
}
function funcB(a, b, c) {
  this(a, b, c);
}
funcB.apply(funcA, [1, 2, 3]);

// Throttle : 입력 주기를 방해하지 않고, 일정 시간 동안의 입력을 모아, 정해진 시간마다 이벤트를 호출한다.
function throttle(callback, limit = 100) {
  let waiting = false;
  return () => {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
