/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
const nav = getNode('nav');
function handleClick(e) {
  let target = e.target;
  let li = target.closest('li');
  if (!li) return;
  if (li.dataset.name === 'home') {
    target.style.backgroundColor = 'orange';
  } else if (li.dataset.name === 'about') {
    target.style.backgroundColor = 'skyblue';
  } else target.style.backgroundColor = 'hotpink';
}
nav.addEventListener('click', handleClick);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
