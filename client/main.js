import {
  clearContents,
  diceAnimation,
  endScroll,
  getNode,
  getNodes,
  insertLast,
  memo,
} from './lib/index.js';

const [$rollingButton, $recordButton, $resetButton] = getNodes(
  '.buttonGroup>button'
);
const $recordListWrapper = getNode('.recordListWrapper');

// [phase - 1]
// 1. 처음 시작할 때 주사위 한번 굴리기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation() 실행될 수 있도록 하기

// toggle
// 1. 주사위 눈 값 가져오기
// 2. 태그 만들기
// 3. 뿌려주기

let count = 0;
let total = 0;
function createItem(value) {
  const template = `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${(total += Number(value))}</td>
    </tr>
  `;
  return template;
}
function renderRecordItem() {
  const diceValue = memo('cube').dataset.dice;
  insertLast('.recordList tbody', createItem(diceValue));
  endScroll($recordListWrapper);
}

const handleRollingDice = (() => {
  let isClicked = false;
  let timer;
  return () => {
    if (!isClicked) {
      // 실행
      timer = setInterval(diceAnimation, 100);
      $recordButton.disabled = true;
      $resetButton.disabled = true;
    } else {
      // 정지
      clearInterval(timer);
      $recordButton.disabled = false;
      $resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();
function handleRecord() {
  $recordListWrapper.hidden = false;
  renderRecordItem();
}
function handleReset() {
  $recordListWrapper.hidden = true;
  count = 0;
  total = 0;
  clearContents(getNode('.recordList tbody'));
}
$rollingButton.addEventListener('click', handleRollingDice);
$recordButton.addEventListener('click', handleRecord);
$resetButton.addEventListener('click', handleReset);
