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
