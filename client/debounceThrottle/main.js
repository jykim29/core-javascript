/*const normalInput = document.querySelector('#normal-input');
const debounceInput = document.querySelector('#debounce-input');
const throttleInput = document.querySelector('#throttle-input');

function handleNormalInput(e) {
  const list = e.target.nextElementSibling;
  list.insertAdjacentHTML('beforeend', `<li>${e.target.value}</li>`);
}

normalInput.addEventListener('input', handleNormalInput);
debounceInput.addEventListener('input', debounce(handleNormalInput, 500));
throttleInput.addEventListener('input', throttle(handleNormalInput, 500));

function debounce(callback, limit = 100) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(args);
      callback.apply(this, args);
    }, limit);
  };
}

function throttle(callback, limit) {
  let isWaiting = false;
  return (...args) => {
    if (!isWaiting) {
      isWaiting = true;
      callback.apply(this, args);
      setTimeout(() => {
        isWaiting = false;
      }, limit);
    }
  };
}
*/

const normalInput = document.querySelector('#normal-input');
const debounceInput = document.querySelector('#debounce-input');
const throttleInput = document.querySelector('#throttle-input');
const intervalInput = document.querySelector('#interval-input');

normalInput.addEventListener('input', handleInput);
throttleInput.addEventListener('input', useInterval(handleInput, 500));

// 첫번째 인터벌만 살리고 그다음 인터벌은 X

/*
(e) => {
  setInterval(() => {
    const list = e.target.nextElementSibling;
    list.insertAdjacentHTML('beforeend', <li>${e.target.value}</li>);
  }, 500);
}
*/

function handleInput(e) {
  const list = e.target.nextElementSibling;
  list.insertAdjacentHTML('beforeend', `<li>${e.target.value}</li>`);
}

// debounceInput.addEventListener(
//   'input',
//   debounce(() => {
//     console.log(e);
//   }, 500)
// );

function debounce(callback, limit) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}
// 1. 첫 실행
// 2. setTimeout이 timeout에 할당
// 3.
// 결론 : 클로저를 쓰는 이유 : timeout 변수를 관리하고, 이벤트리스너에 매개변수들을 넣고 사용하기 위해?

debounceInput.addEventListener(
  'input',
  debounce((e) => console.log(e), 500)
);

function throttle(callback, limit) {
  let isWaiting = false;
  return (...args) => {
    if (!isWaiting) {
      callback.apply(this, args);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, limit);
    }
  };
}

function useInterval() {
  let isWaiting = false;
  let timer;
  return (...args) => {
    isWaiting = true;
    timer = setInterval(() => {
      callback.apply(this, args);
      isWaiting = false;
    }, limit);
  };
}

/*// before
<ul> // begin
// after

// before
</ul> // end
// after*/
