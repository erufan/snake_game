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
  app!.append(element);
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
  const obj: SnakeBody = { el: snake, key: snakeBody.length, x: 12, y: 13 };

  snakeBody.push(obj);
};

const arangeBody = () => {
  snakeBody.forEach((s) => {
    s.el.style.gridColumn = s.x.toString();
    s.el.style.gridRow = s.y.toString();
  });
};

let direction: string;
const move = () => {
  snakeBody.forEach((s) => {
    if (direction === "ArrowLeft") {
      s.key == 0 ? s.x-- : setTimeout(() => s.x--, 1);
    }
    if (direction === "ArrowUp") {
      s.key == 0 ? s.y-- : setTimeout(() => s.y--, 1);
    }
    if (direction === "ArrowRight") {
      s.key == 0 ? s.x++ : setTimeout(() => s.x++, 1);
    }
    if (direction === "ArrowDown") {
      s.key == 0 ? s.y++ : setTimeout(() => s.y++, 1);
    }
  });
};

const setDirection = (event: KeyboardEvent) => {
  if (event.key === "ArrowLeft") direction = "ArrowLeft";

  if (event.key === "ArrowUp") direction = "ArrowUp";

  if (event.key === "ArrowRight") direction = "ArrowRight";

  if (event.key === "ArrowDown") direction = "ArrowDown";
};

document.addEventListener("keydown", setDirection);

createSnake(); //for test move
createSnake(); //for test move

setInterval(() => {
  arangeBody();
  move();
}, 500); //for test move
