import createElement from "../../utils/createElement";
import createButton from "../createButton";

const createControlers = () => {
  const horizontalMove = createButton("right/left", "horizontal");
  const verticalMove = createButton("up/down", "vertical");
  const controlersContainer = createElement("div", "controlersContainer");

  controlersContainer.append(horizontalMove);
  controlersContainer.append(verticalMove);
  document.body.append(controlersContainer);
};

export default createControlers;
