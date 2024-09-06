import createScore from "./components/createScore";
import menu from "./components/menu/menu";
import createSnake from "./components/snake/createSnake";
import handleDirectionChange from "./components/snake/handleDirectionChange";
import "./style.css";
import increaseSpeed from "./utils/increaseSpeed";
import { app } from "./variables/app";
import { gameStarted } from "./variables/gameStarted";

document.addEventListener("keydown", handleDirectionChange);
if (localStorage.getItem("highestScore") === null) {
  localStorage.setItem("highestScore", "0");
}

const startGame = () => {
  if (!gameStarted) menu(startGame);
  else {
    app!.innerHTML = "";
    app!.classList.remove("menu");
    app!.classList.add("play");

    createScore();
    createSnake();
    increaseSpeed();
  }
};

startGame();
