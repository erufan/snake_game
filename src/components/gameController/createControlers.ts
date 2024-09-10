import createElement from "../../utils/createElement";
import { app } from "../../variables/app";
import { direction, setDirection } from "../../variables/direction";
import { gameStarted } from "../../variables/gameStarted";
import createButton from "../createButton";
import "./controlersStyle.css";

const createControlers = () => {
  // "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown";
  const leftButton = createButton("", "controlers", () => {
    if (!direction || direction === "ArrowRight" || direction === "ArrowLeft") {
      setDirection("ArrowDown");
      leftButton.classList.remove("down");
      leftButton.classList.add("left");
      rightButton.classList.remove("up");
      rightButton.classList.add("right");
      return;
    }
    if (direction === "ArrowUp" || direction === "ArrowDown") {
      setDirection("ArrowLeft");
      leftButton.classList.add("down");
      leftButton.classList.remove("left");
      rightButton.classList.add("up");
      rightButton.classList.remove("right");
    }
  });
  const rightButton = createButton("", "controlers", () => {
    if (!direction || direction === "ArrowRight" || direction === "ArrowLeft") {
      setDirection("ArrowUp");
      leftButton.classList.remove("up");
      leftButton.classList.add("left");
      rightButton.classList.remove("up");
      rightButton.classList.add("right");
      return;
    }
    if (direction === "ArrowUp" || direction === "ArrowDown") {
      setDirection("ArrowRight");
      leftButton.classList.add("down");
      leftButton.classList.remove("left");
      rightButton.classList.add("up");
      rightButton.classList.remove("right");
    }
  });
  const controlersContainer = createElement("div", "controlersContainer");

  controlersContainer.append(leftButton);
  controlersContainer.append(rightButton);
  leftButton.classList.add("down");
  rightButton.classList.add("up");

  app!.after(controlersContainer);
};

export default createControlers;
