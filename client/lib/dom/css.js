/* -------------------------------------------------------------------------- */
/*                                  class 함수                                  */
/* -------------------------------------------------------------------------- */
function addClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string')
    throw new TypeError('addClass 함수의 두 번째 인수는 문자열이어야 합니다.');
  node.classList.add(className);
}
function removeClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if (!className) {
    node.className = '';
    return;
  }
  if (typeof className !== 'string')
    throw new TypeError(
      'removeClass 함수의 두 번째 인수는 문자열이어야 합니다.'
    );
  node.classList.remove(className);
}
function toggleClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string')
    throw new TypeError(
      'toggleClass 함수의 두 번째 인수는 문자열이어야 합니다.'
    );
  return node.classList.toggle(className);
}

/* -------------------------------------------------------------------------- */
/*                                  style 함수                                  */
/* -------------------------------------------------------------------------- */
function getCss(node, prop) {
  if (typeof node === 'string') node = getNode(node);
  if (!(prop in document.body.style))
    throw new SyntaxError(
      'getCSS 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
    );
  return getComputedStyle(node).getPropertyValue(prop);
}
function setCss(node, prop, value) {
  if (typeof node === 'string') node = getNode(node);
  if (!(prop in document.body.style))
    throw new SyntaxError(
      'getCSS 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
    );
  return (node.style[prop] = value);
}
const css = (node, prop, value) =>
  value === undefined ? getCss(node, prop) : setCss(node, prop, value);
