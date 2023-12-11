function earth() {
  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macstudio', 'applewatch'],
  };
  let gravity = 10;

  return function tiger(value, product) {
    gravity = value;
    apple.product.push(product);
    console.log(water, gravity, apple);
  };
}

const ufo = earth();

const button = document.querySelector('button');

// IIFE(즉시실행함수)로 함수를 즉시 실행 => 클로저 생성
const handleClick = (() => {
  let isClicked = false;
  return function () {
    if (!isClicked) {
      document.body.style.backgroundColor = 'orange';
    } else {
      document.body.style.backgroundColor = 'white';
    }
    isClicked = !isClicked;
  };
})();

// button.addEventListener('click', handleClick); // 이벤트 생성

// setTimeout(() => {
//   button.removeEventListener('click', handleClick); // 이벤트 제거
// }, 3000);

// bindEvent 함수로 클로저 생성
function bindEvent(node, type, handler) {
  node.addEventListener(type, handler);
  return () => node.removeEventListener(type, handler);
}

const remove = bindEvent(button, 'click', handleClick); // 이벤트 생성
remove(); // 이벤트 제거

// 클로저를 활용한 리액트 useState 훅 따라하기
function useState(initialValue) {
  let value = initialValue;
  console.log(value);

  function read() {
    return value;
  }
  function write(newValue) {
    value = newValue;
  }
  return [read, write];
}
const [state, setState] = useState(true);
