import createScore from "./components/createScore";
import menu from "./components/menu/menu";
import createSnake from "./components/snake/createSnake";
import handleDirectionChange from "./components/snake/handleDirectionChange";
import "./style.css";
import increaseSpeed from "./utils/increaseSpeed";
import { app } from "./variables/app";
import { setDirection } from "./variables/direction";
import { snakeBody } from "./variables/snakeBody";
import { gameStarted, setGameStarted } from "./variables/gameStarted";
import createControlers from "./components/gameController/createControlers";

document.addEventListener("keydown", handleDirectionChange);
document.addEventListener("touchstart", (e) => {
  const head = snakeBody[0].el;
  const headRect = head.getBoundingClientRect();
  const touch = e.touches[0];

  const deltaX = touch.clientX - headRect.x;
  const deltaY = touch.clientY - headRect.y;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > 0) {
      setDirection("ArrowRight");
    } else {
      setDirection("ArrowLeft");
    }
  } else {
    if (deltaY > 0) {
      setDirection("ArrowDown");
    } else {
      setDirection("ArrowUp");
    }
  }
});

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
    createControlers();
    createSnake();
    increaseSpeed();
  }
};

startGame();
