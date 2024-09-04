import { SnakeBody } from "../main";

const getHeadCoordinate = (snakeBody: SnakeBody[]) => {
  return {
    x: parseInt(snakeBody[0].el.style.gridColumn),
    y: parseInt(snakeBody[0].el.style.gridRow),
  };
};

export default getHeadCoordinate;
