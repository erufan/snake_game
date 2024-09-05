import createElement from "../../utils/createElement";
import { setGameStarted } from "../../variables/gameStarted";

const createStartButton = (callback: () => void) => {
  const button = createElement("button", "button");
  const app = document.getElementById("app");
  app!.append(button);

  button.textContent = "start";

  button.onclick = () => {
    setGameStarted(true);
    callback();
  };
};

export default createStartButton;
