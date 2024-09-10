import createElement from "../../utils/createElement";
import { app } from "../../variables/app";
import createButton from "../createButton";
import "./controlersStyle.css";

const createControlers = () => {
  const rightButton = createButton("", "controlers");
  const leftButton = createButton("", "controlers");
  const controlersContainer = createElement("div", "controlersContainer");

  controlersContainer.append(rightButton);
  controlersContainer.append(leftButton);

  app!.after(controlersContainer);
};

export default createControlers;
