import createSnake from "./components/snake/createSnake";
import handleDirectionChange from "./components/snake/handleDirectionChange";
import "./style.css";
import updateGame from "./updateGame";

document.addEventListener("keydown", handleDirectionChange);
const app = document.getElementById("app");
let gameStarted = false;

const startGame = () => {
  if (!gameStarted) {
    app!.innerHTML = `
    <button id="start">play</button>
    `;
    document.getElementById("start")!.onclick = (event) => {
      gameStarted = true;
      startGame();
      (event.target! as HTMLElement).remove();
    };
    return;
  }
  app!.classList.add("app");
  createSnake();
  const interval = setInterval(() => updateGame(interval), 100);
};

startGame();
