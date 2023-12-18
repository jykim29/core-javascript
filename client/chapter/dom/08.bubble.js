/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

/* 버블링 ----------------------------------------------------------------- */
section.addEventListener('click', (e) => {
  console.log('e.target:', e.target);
  console.log('e.currentTarget:', e.currentTarget);
  console.log('%c section!!', 'color: orange');
});
article.addEventListener('click', () =>
  console.log('%c article!!', 'color: dodgerblue')
);
p.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('%c p!!', 'color: hotpink');
});

/* 캡처링 ----------------------------------------------------------------- */
