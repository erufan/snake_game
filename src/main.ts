import "./style.css";

interface SnakeBody {
  el: HTMLElement;
  key: number;
  x: number;
  y: number;
}

const app = document.getElementById("app");
const snakeBody: SnakeBody[] = [];

const createElement = (className: string) => {
  const element = document.createElement("div");
  element.className = className;

  return element;
};

const createSnake = () => {
  const snake = createElement("snakeElement");
  if (snakeBody.length === 0) {
    const obj: SnakeBody = { el: snake, key: snakeBody.length, x: 13, y: 13 };

    snakeBody.push(obj);

    return;
  }
  //for now its 12 and later it will be position of eaten fruit
  const obj: SnakeBody = {
    el: snake,
    key: snakeBody.length,
    x: snakeBody.length + 10,
    y: 13,
  };

  snakeBody.push(obj);
};

const arangeBody = () => {
  snakeBody.forEach((s) => {
    app!.append(s.el);
    s.el.style.gridColumn = s.x.toString();
    s.el.style.gridRow = s.y.toString();
  });
};

let direction: string;
let hasMovement = false;

const move = () => {
  if (hasMovement) {
    for (let i = snakeBody.length - 1; i > 0; i--) {
      snakeBody[i].x = snakeBody[i - 1].x;
      snakeBody[i].y = snakeBody[i - 1].y;
    }

    if (direction === "ArrowLeft") snakeBody[0].x--;

    if (direction === "ArrowUp") snakeBody[0].y--;

    if (direction === "ArrowRight") snakeBody[0].x++;

    if (direction === "ArrowDown") snakeBody[0].y++;
  }
  arangeBody();
};

const setDirection = (event: KeyboardEvent) => {
  hasMovement = true;
  if (event.key === "ArrowLeft") direction = "ArrowLeft";

  if (event.key === "ArrowUp") direction = "ArrowUp";

  if (event.key === "ArrowRight") direction = "ArrowRight";

  if (event.key === "ArrowDown") direction = "ArrowDown";
};

document.addEventListener("keydown", setDirection);

let hasFruits = false;
const createFruit = () => {
  if (!hasFruits) {
    const fruit = createElement("fruitElement");
    app!.append(fruit);

    const x = Math.floor(Math.random() * 27);
    const y = Math.floor(Math.random() * 27);

    fruit.style.gridColumn = x.toString();
    fruit.style.gridRow = y.toString();
    hasFruits = true;

    return fruit;
  }
};

const eatFruit = (snake: HTMLElement, fruit: HTMLElement) => {
  if (snake.style.gridArea === fruit.style.gridArea) {
    fruit.remove();
    hasFruits = false;
  }
};

createSnake();
const fruit = createFruit();

setInterval(() => {
  move();
  eatFruit(snakeBody[0].el, fruit!);
}, 500);
