import createElement from "../../utils/createElement";
import { snakeBody } from "../../variables/snakeBody";

const createSnake = () => {
  const Middle_Of_Board = { x: 13, y: 13 };
  const snake = createElement("div", "snakeElement");
  const obj = { el: snake, ...Middle_Of_Board };

  snakeBody.push(obj);
};

export default createSnake;
