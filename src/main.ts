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

createSnake(); //for test move
createSnake(); //for test move
createSnake(); //for test move

setInterval(() => {
  move();
}, 500); //for test move
