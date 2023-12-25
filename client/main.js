import { getNode as $, getStorage, setStorage } from './lib/index.js';

// 1. textField의 value값을 로컬스토리지에 저장해주세요.

const textField = $('#textField');

function handleSetStorage(e) {
  setStorage('input', e.currentTarget.value);
}
textField.addEventListener('input', handleSetStorage);

// 2. 새로고침시 로컬스토리지에 저장된 textField의 값을 가져와 뿌려줍니다.
function init() {
  getStorage('input').then((res) => {
    textField.value = res;
  });
  textField.focus();
}
window.addEventListener('DOMContentLoaded', init);
