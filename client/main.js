/* global gsap */

import {
  getNode as $,
  attr,
  changeColor,
  clearContents,
  delayP,
  insertLast,
  renderEmptyCard,
  renderSpinner,
  renderUserCard,
  xhrPromise,
  yeon,
} from './lib/index.js';

// [phase - 1]
// 1. user 데이터를 fetch 해주세요.
// 2. 함수 안에 넣기
// 3. 유저 데이터 렌더링하기

const END_POINT = 'http://localhost:3000/users';
const userCardInner = $('.user-card-inner');

const renderUserInfo = async () => {
  try {
    renderSpinner(document.body, 100);
    await delayP(500);
    const response = await yeon.get(END_POINT, {});
    if (response.ok) {
      gsap.to('.loadingSpinner', {
        opacity: 0,
        onComplete() {
          $('.loadingSpinner').remove();
        },
      });
      const userData = response.data;
      userData.forEach((data) => renderUserCard(userCardInner, data));
      changeColor('.user-card');
      gsap.from('.user-card', {
        x: 100,
        opacity: 0,
        stagger: 0.1,
      });
    } else {
      $('.loadingSpinner').remove();
      throw new Error();
    }
  } catch (error) {
    renderEmptyCard(userCardInner);
    console.log(error);
  }
};
renderUserInfo();

function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');
  if (!article || !button) return;
  const id = article.dataset.index.slice(5);
  yeon
    .delete(`${END_POINT}/${id}`)
    .then(() => {
      clearContents(userCardInner);
      renderUserInfo();
    })
    .catch((err) => console.log(err));
}
userCardInner.addEventListener('click', handleDelete);

const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');

function handleCreate(e) {
  gsap.to('.pop', { autoAlpha: 1 });
}
function handleCancel(e) {
  e.stopPropagation();
  gsap.to('.pop', { autoAlpha: 0 });
}
function handleDone(e) {
  e.preventDefault();
  const name = $('#nameField').value;
  const email = $('#emailField').value;
  const website = $('#siteField').value;
  const obj = { name, email, website };
  yeon.post(END_POINT, obj).then(() => {
    clearContents(userCardInner);
    renderUserInfo();
    gsap.to('.pop', { autoAlpha: 0 });
  });
}
createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);
