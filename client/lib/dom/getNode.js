function getNode(selector) {
  if (typeof selector !== 'string')
    throw new Error('getNode 함수의 첫 번째 인수는 문자열이어야 합니다.');
  let result = document.querySelector(selector);
  if (result === null) throw new Error('해당 노드를 찾을 수 없습니다.');
  return result;
}

function getNodes(selector) {
  if (typeof selector !== 'string')
    throw new Error('getNode 함수의 첫 번째 인수는 문자열이어야 합니다.');
  let result = document.querySelectorAll(selector);
  if (result.length === 0) throw new Error('해당 노드를 찾을 수 없습니다.');
  return result;
}
