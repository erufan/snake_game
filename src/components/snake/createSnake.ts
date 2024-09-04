import { SnakeBody } from "../../main";
import createElement from "../../utils/createElement";

const createSnake = (snakeBody: SnakeBody[]) => {
  const Middle_Of_Board = { x: 13, y: 13 };
  const snake = createElement("snakeElement");
  const obj: SnakeBody = { el: snake, ...Middle_Of_Board };

  snakeBody.push(obj);
};

export default createSnake;
