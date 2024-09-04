import { snakeBody } from "../variables/snakeBody";

const getHeadCoordinate = () => {
  return {
    x: parseInt(snakeBody[0].el.style.gridColumn),
    y: parseInt(snakeBody[0].el.style.gridRow),
  };
};

export default getHeadCoordinate;
