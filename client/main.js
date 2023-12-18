// 모듈 프로그래밍

// named exports (이름 내보내기) => 받아주는 곳에서 { 이름 }
// import { getNode } from './lib/dom/getNode.js';
// import clearContents from './lib/dom/clear.js';
// import { insertLast } from './lib/dom/insert.js';

import { getNode, clearContents, insertLast, getNodes } from './lib/index.js';

function phase() {
  const calculatorForm = getNode('.calculator');
  const clearButton = getNode('#clear');
  const result = getNode('.result');
  let numbers = [0, 0];

  function handleInput(e) {
    const { name, value } = e.target;
    console.log(value);
    if (name === 'first') numbers[0] = parseInt(value);
    else numbers[1] = parseInt(value);
    const answer = calculate(numbers);
    result.textContent = answer;
    console.log(numbers);
  }

  function calculate([first, second]) {
    const answer = first + second;
    return answer;
  }

  function handleClear(e) {
    e.preventDefault();
    clearContents('#firstNumber');
    clearContents('#secondNumber');
    numbers = [0, 0];
    result.textContent = '-';
    getNode('#firstNumber').focus();
  }
  calculatorForm.addEventListener('input', handleInput);
  clearButton.addEventListener('click', handleClear);
}

const calculator = getNode('.calculator');
const result = getNode('.result');
const clear = getNode('#clear');
const numberInputs = Array.from(getNodes('input:not(#clear)'));

function handleInput() {
  const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);
  clearContents(result);
  insertLast(result, total);
}
function handleClear(e) {
  e.preventDefault();
  numberInputs.forEach(clearContents);
  result.textContent = '-';
  getNode('#firstNumber').focus();
}
calculator.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
