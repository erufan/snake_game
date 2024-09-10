import createEnterImage from "../../components/menu/createEnterImage";
import { app } from "../../variables/app";
import { setGameStarted } from "../../variables/gameStarted";
import sounds from "../audioManager";
import createElement from "../createElement";
import getHeadCoordinate from "../getHeadCoordinate";
import "./loseStyle.css";

const loseCondition = (interval: NodeJS.Timeout) => {
  const coordinate = getHeadCoordinate();
  const position = Object.values(coordinate);

  if (isHitWall(position) || isHitItself(coordinate)) {
    sounds.lose.play();
    loseUi(interval);
  }
};

export default loseCondition;

const isHitItself = (coordinate: { x: number; y: number }) => {
  const snake = [...document.querySelectorAll<HTMLElement>(".snakeElement")];
  const body = snake.slice(1);

  return body.some(
    (b) =>
      parseInt(b.style.gridColumn) === coordinate.x &&
      parseInt(b.style.gridRow) === coordinate.y
  );
};

const isHitWall = (position: number[]) => {
  const Grid_Max = 26;
  const Grid_Min = 1;

  return position.some((p) => p > Grid_Max || p < Grid_Min);
};

const loseUi = (interval: NodeJS.Timeout) => {
  clearInterval(interval);
  setGameStarted(false);

  app!.innerHTML = "";
  app!.classList.remove("play");
  app!.classList.add("menu");

  const lost = createElement("p", "loseText");
  app!.append(lost);
  lost.textContent = "You Lost";
  lost.onclick = () => location.reload();

  createEnterImage("/public/sadlose-min.webp", "you lost");
};
