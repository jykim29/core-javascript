// querySelector
const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
// eventListener  이벤트 핸들러 => click :  객체, scroll : 객체
/* 클로저를 사용한 handleMenu
const handleMenu = (() => {
  let isClicked = false;
  return (e) => {
    e.preventDefault();
    if (!isClicked) menu.classList.add('is-active');
    else menu.classList.remove('is-active');
    isClicked = !isClicked;
  };
})();
*/

function handleMenu(e) {
  // preventDefault
  e.preventDefault();
  // classList
  menu.classList.toggle('is-active');
}
button.addEventListener('click', handleMenu);
