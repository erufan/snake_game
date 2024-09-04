import "./style.css";

interface SnakeBody {
  el: HTMLElement;
  key: number;
  x: number;
  y: number;
}

const app = document.getElementById("app");
const snakeBody: SnakeBody[] = [];
let hasFruits = false;
const getpositions = () => {
  return [
    parseInt(snakeBody[0].el.style.gridRow),
    parseInt(snakeBody[0].el.style.gridColumn),
  ];
};

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

const createFruit = () => {
  if (!hasFruits) {
    const fruit = createElement("fruitElement");

    app!.append(fruit);

    const x = Math.floor(Math.random() * 26) + 1;
    const y = Math.floor(Math.random() * 26) + 1;

    fruit.style.gridColumn = x.toString();
    fruit.style.gridRow = y.toString();
    hasFruits = true;
  }
};

const eatFruit = (snake: HTMLElement) => {
  const fruit = document.querySelector<HTMLElement>(".fruitElement");

  if (
    snake.style.gridColumn === fruit!.style.gridColumn &&
    snake.style.gridRow === fruit!.style.gridRow
  ) {
    fruit!.remove();
    hasFruits = false;
    increaseSize(fruit!);
  }
};

const increaseSize = (food: HTMLElement) => {
  snakeBody.push({
    el: createElement("snakeElement"),
    key: snakeBody.length,
    x: parseFloat(food.style.gridColumn),
    y: parseFloat(food.style.gridRow),
  });
};

const Grid_Max = 26;
const Grid_Min = 1;

const boxLoseCondition = () => {
  const positions = getpositions();

  if (positions.some((p) => p > Grid_Max || p < Grid_Min)) {
    document.body!.innerHTML = "<div>you lost</div>";
    clearInterval(interval);
  }
};

const startGame = () => {
  createSnake();
};

const updateGAme = () => {
  createFruit();
  move();
  eatFruit(snakeBody[0].el);
  boxLoseCondition();
};

startGame();
const interval = setInterval(updateGAme, 100);
