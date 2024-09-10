import createScore from "./components/createScore";
import menu from "./components/menu/menu";
import createSnake from "./components/snake/createSnake";
import handleDirectionChange from "./components/snake/handleDirectionChange";
import "./style.css";
import increaseSpeed from "./utils/increaseSpeed";
import { app } from "./variables/app";
import { gameStarted, setGameStarted } from "./variables/gameStarted";
import createControlers from "./components/gameController/createControlers";

document.addEventListener("keydown", handleDirectionChange);

if (localStorage.getItem("highestScore") === null) {
  localStorage.setItem("highestScore", "0");
}

const startGame = () => {
  if (!gameStarted)
    menu(() => {
      setGameStarted(true);
      startGame();
    });
  else {
    app!.innerHTML = "";
    app!.classList.remove("menu");
    app!.classList.add("play");

    createScore();
    if (screen.width <= 768) createControlers();
    createSnake();
    increaseSpeed();
  }
};

startGame();
