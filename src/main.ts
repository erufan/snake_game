import createFruit from "./components/fruit/createFruit";
import createSnake from "./components/snake/createSnake";
import eatFruit from "./components/snake/eatFruit";
import handleDirectionChange from "./components/snake/handleDirectionChange";
import move from "./components/snake/move";
import "./style.css";
import loseCondition from "./utils/lose/loseCondition";

document.addEventListener("keydown", handleDirectionChange);

const startGame = () => {
  createSnake();
  const interval = setInterval(() => updateGame(interval), 100);
};

const updateGame = (interval: NodeJS.Timeout) => {
  createFruit();
  move();
  eatFruit();
  loseCondition(interval);
};

startGame();
