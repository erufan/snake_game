import { SnakeBody } from "../../main";
import { direction } from "../../utils/direction";

const move = (snakeBody: SnakeBody[]) => {
  moveSnakeBody(snakeBody);
  updateHeadPosition(snakeBody);
  arangeBody(snakeBody);
};
export default move;

const moveSnakeBody = (snakeBody: SnakeBody[]) => {
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i].x = snakeBody[i - 1].x;
    snakeBody[i].y = snakeBody[i - 1].y;
  }
};

const updateHeadPosition = (snakeBody: SnakeBody[]) => {
  const snakeHead = snakeBody[0];

  if (direction === "ArrowLeft") snakeHead.x--;

  if (direction === "ArrowUp") snakeHead.y--;

  if (direction === "ArrowRight") snakeHead.x++;

  if (direction === "ArrowDown") snakeHead.y++;
};

const arangeBody = (snakeBody: SnakeBody[]) => {
  const app = document.getElementById("app"); //check this later

  snakeBody.forEach((s) => {
    app!.append(s.el); //check this later
    s.el.style.gridColumn = s.x.toString();
    s.el.style.gridRow = s.y.toString();
  });
};
