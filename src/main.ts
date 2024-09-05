import createSnake from "./components/snake/createSnake";
import handleDirectionChange from "./components/snake/handleDirectionChange";
import "./style.css";
import updateGame from "./updateGame";

document.addEventListener("keydown", handleDirectionChange);
const app = document.getElementById("app");
let gameStarted = false;

const startGame = () => {
  if (!gameStarted) {
    app!.classList.add("menu");
    app!.innerHTML = `
    <button id="button">play</button>
    <image class="image" src="./public/happySnake-min.webp">
    `;
    document.getElementById("button")!.onclick = () => {
      gameStarted = true;
      startGame();
    };
    return;
  }
  app!.innerHTML = "";
  app!.classList.remove("menu");
  app!.classList.add("play");

  createSnake();
  const interval = setInterval(() => updateGame(interval), 100);
};

startGame();
