import menu from "./components/menu/menu";
import createSnake from "./components/snake/createSnake";
import handleDirectionChange from "./components/snake/handleDirectionChange";
import "./style.css";
import updateGame from "./updateGame";
import { gameStarted } from "./variables/gameStarted";

document.addEventListener("keydown", handleDirectionChange);
const app = document.getElementById("app");

const startGame = () => {
  if (!gameStarted) menu(startGame);
  else {
    app!.innerHTML = "";
    app!.classList.remove("menu");
    app!.classList.add("play");

    createSnake();
    const interval = setInterval(() => updateGame(interval), 100);
  }
};

startGame();
