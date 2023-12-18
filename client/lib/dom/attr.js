function getAttr(selector, attribute) {
  if (typeof selector !== 'string' || typeof attribute !== 'string')
    throw new Error(
      'getAttr 함수의 첫 번째와 두 번째 인수는 문자열이여야 합니다.'
    );
  const node = getNode(selector);
  const result = node.getAttribute(attribute);
  if (result === null) throw new Error('해당 속성을 찾을 수 없습니다.');
  return result;
}

function setAttr(selector, attribute, value) {
  if (
    typeof selector !== 'string' ||
    typeof attribute !== 'string' ||
    typeof value !== 'string'
  )
    throw new TypeError(
      'setAttr 함수의 첫 번째, 두 번째, 세 번째 인수는 필수이며, 문자열이여야 합니다.'
    );
  const node = getNode(selector);
  value = value.replace(/\s*/g, '');
  if (value === '') {
    node.removeAttribute(attribute);
    return;
  }
  if (attribute.startsWith('data-')) {
    const dataName = attribute.slice(5);
    node.dataset[dataName] = value;
    return;
  } else {
    node.setAttribute(attribute, value);
  }
  return;
}

function attr(selector, attribute, value) {
  if (value === undefined) return getAttr(selector, attribute);
  else return setAttr(selector, attribute, value);
}
