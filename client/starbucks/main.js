const list = document.querySelectorAll('li');
const depth = document.querySelectorAll('.depth');
const nav = document.querySelector('nav');

list.forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    let currentDepth = e.target.lastElementChild;
    depth.forEach((item) => (item.style.height = 0));
    currentDepth.style.height = '100px';
  });
});

list.forEach((item) => {
  item.addEventListener('transitionend', (e) => {
    console.log(e.target);
  });
});

nav.addEventListener('mouseleave', (e) => {
  depth.forEach((depth) => (depth.style.height = 0));
});
