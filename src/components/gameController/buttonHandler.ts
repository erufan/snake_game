import { direction, setDirection } from "../../variables/direction";

const buttonHandler = (
  leftButton: HTMLElement,
  rightButton: HTMLElement,
  directions: ("ArrowDown" | "ArrowLeft")[] | ("ArrowUp" | "ArrowRight")[]
) => {
  if (!direction || isMovingHorizontally()) {
    setDirection(directions[0]);
    updateButtonClasses(leftButton, rightButton, "left", "right");
    return;
  }

  if (isMovingVertically()) {
    setDirection(directions[1]);
    updateButtonClasses(leftButton, rightButton, "down", "up");
  }
};

export default buttonHandler;

const updateButtonClasses = (
  leftButton: HTMLElement,
  rightButton: HTMLElement,
  leftClass: string,
  rightClass: string
) => {
  leftButton.classList.remove("up", "down", "left");
  leftButton.classList.add(leftClass);
  rightButton.classList.remove("up", "down", "right");
  rightButton.classList.add(rightClass);
};

const isMovingHorizontally = () => {
  return direction === "ArrowRight" || direction === "ArrowLeft";
};

const isMovingVertically = () => {
  return direction === "ArrowUp" || direction === "ArrowDown";
};
