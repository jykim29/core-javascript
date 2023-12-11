/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

class Animal {
  constructor(options) {
    for (let [key, value] of Object.entries(options)) {
      this[key] = value;
    }
    // this.name = name;
    // this.stomach = [];
    // this.legs = 4;
    // this.tail = true;
  }
  get eat() {
    return this.stomach;
  }

  set eat(value) {
    this.prey = value;
    this.stomach.push(value);
  }
}
// const animal = new Animal({ name: '포동이', age: 15 });

class Tiger extends Animal {
  options = {
    version: '1.0.0',
    company: 'like-lion',
    ceo: '이두희',
  };

  constructor(name) {
    super(name);
    this.pattern = '호랑이무늬';
  }
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }
  static bark() {
    return '어흥!🐯';
  }
}
const 한라산호랑이 = new Tiger({ name: '푸동이' });

class Array {
  constructor() {}

  static isArray() {}

  forEach() {}

  reduce() {}

  map() {}
}

// model, view, control

// model (데이터)
// view (랜더링)
// control (이벤트)
// 패턴

// 클래스를 이용한 투두리스트
class Todo {
  target = null;
  registerButton = null;
  list = null;

  constructor({ input, button, renderPlace }) {
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace);
    this.todoListArray = [];
    this.data;

    this.registerEvent();

    this.target.addEventListener('input', () => {
      this.data = this.currentInputTodoData;
    });
  }

  get currentInputTodoData() {
    return this.target.value;
  }

  set currentInputTodoData(value) {
    this.target.value = value;
  }

  get todoList() {
    return this.todoListArray;
  }

  set todoList(value) {
    this.todoList.push(value);
  }

  #createList() {
    let template = `
      <li>${this.data}</li>
    `;
    return template;
  }

  render() {
    this.list.insertAdjacentHTML('beforeend', this.#createList());
    this.target.value = '';
  }

  addTodoData() {
    this.todoList = this.data;
  }

  registerEvent() {
    this.registerButton.addEventListener('click', () => {
      this.addTodoData();
      this.render();
    });
  }
}

const button = new Todo({
  input: '#todo',
  button: '.register',
  renderPlace: '.todoList',
});

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 생성자 함수
