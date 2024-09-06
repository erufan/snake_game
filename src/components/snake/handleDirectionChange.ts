import { direction, setDirection } from "../../variables/direction";
import { snakeBody } from "../../variables/snakeBody";

const handleDirectionChange = (event: KeyboardEvent) => {
  const validDirections = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];
  const oppositeDirections = {
    ArrowLeft: "ArrowRight",
    ArrowRight: "ArrowLeft",
    ArrowUp: "ArrowDown",
    ArrowDown: "ArrowUp",
  };

  if (
    event.key ===
      oppositeDirections[direction as keyof typeof oppositeDirections] &&
    snakeBody.length > 1
  )
    return;

  if (validDirections.includes(event.key)) {
    setDirection(event.key);
  }
};

export default handleDirectionChange;
