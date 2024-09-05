import createSnake from "./components/snake/createSnake";
import handleDirectionChange from "./components/snake/handleDirectionChange";
import "./style.css";
import updateGame from "./updateGame";

document.addEventListener("keydown", handleDirectionChange);
const startGame = () => {
  createSnake();
  const interval = setInterval(() => updateGame(interval), 100);
};

startGame();
