import createFruit from "./components/fruit/createFruit";
import createSnake from "./components/snake/createSnake";
import eatFruit from "./components/snake/eatFruit";
import handleDirectionChange from "./components/snake/handleDirectionChange";
import move from "./components/snake/move";
import "./style.css";
import getHeadCoordinate from "./utils/getHeadCoordinate";

export interface SnakeBody {
  el: HTMLElement;
  x: number;
  y: number;
}

// const app = document.getElementById("app"); make it global later
const snakeBody: SnakeBody[] = [];

document.addEventListener("keydown", handleDirectionChange);

const Grid_Max = 26;
const Grid_Min = 1;

const boxLoseCondition = () => {
  const coordinate = getHeadCoordinate(snakeBody);
  const position = Object.values(coordinate);
  const snake = [...document.querySelectorAll<HTMLElement>(".snakeElement")];
  const body = snake.slice(1);

  if (position.some((p) => p > Grid_Max || p < Grid_Min)) {
    document.body!.innerHTML = "<div>you lost</div>";
    clearInterval(interval);
  }

  if (
    body.some(
      (b) =>
        parseInt(b.style.gridColumn) === coordinate.x &&
        parseInt(b.style.gridRow) === coordinate.y
    )
  ) {
    document.body!.innerHTML = "<div>you lost</div>";
    clearInterval(interval);
  }
};

const startGame = () => {
  createSnake(snakeBody);
};

const updateGame = () => {
  createFruit();
  move(snakeBody);
  eatFruit(snakeBody);
  boxLoseCondition();
};

startGame();
const interval = setInterval(updateGame, 100);
