import createElement from "../../utils/createElement";
import { app } from "../../variables/app";
import createButton from "../createButton";
import buttonHandler from "./buttonHandler";
import "./controlersStyle.css";

const createControlers = () => {
  const controlersContainer = createElement("div", "controlersContainer");

  const leftButton = createButton("", "controlers", () =>
    buttonHandler(leftButton, rightButton, ["ArrowDown", "ArrowLeft"])
  );

  const rightButton = createButton("", "controlers", () =>
    buttonHandler(leftButton, rightButton, ["ArrowUp", "ArrowRight"])
  );

  controlersContainer.append(leftButton);
  controlersContainer.append(rightButton);
  leftButton.classList.add("down");
  rightButton.classList.add("up");

  app!.after(controlersContainer);
};

export default createControlers;
