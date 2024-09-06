import createElement from "../../utils/createElement";
import { app } from "../../variables/app";
import { setGameStarted } from "../../variables/gameStarted";

const createStartButton = (callback: () => void) => {
  const button = createElement("button", "button");
  app!.append(button);

  button.textContent = "start";

  button.onclick = () => {
    setGameStarted(true);
    callback();
  };
};

export default createStartButton;
