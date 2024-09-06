import { app } from "../../variables/app";
import { direction } from "../../variables/direction";
import { snakeBody } from "../../variables/snakeBody";

const move = () => {
  moveSnakeBody();
  updateHeadPosition();
  arangeBody();
};
export default move;

const moveSnakeBody = () => {
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i].x = snakeBody[i - 1].x;
    snakeBody[i].y = snakeBody[i - 1].y;
  }
};

const updateHeadPosition = () => {
  const snakeHead = snakeBody[0];

  if (direction === "ArrowLeft") snakeHead.x--;

  if (direction === "ArrowUp") snakeHead.y--;

  if (direction === "ArrowRight") snakeHead.x++;

  if (direction === "ArrowDown") snakeHead.y++;
};

const arangeBody = () => {
  snakeBody.forEach((s) => {
    app!.append(s.el); //check this later
    s.el.style.gridColumn = s.x.toString();
    s.el.style.gridRow = s.y.toString();
  });
};
