import sounds from "../../utils/audioManager";
import createElement from "../../utils/createElement";
import increaseSpeed from "../../utils/increaseSpeed";
import updateScore from "../../utils/updateScore";
import { setHasFruit } from "../../variables/hasFruit";
import { snakeBody } from "../../variables/snakeBody";

const eatFruit = (interval: NodeJS.Timeout) => {
  const fruit = document.querySelector<HTMLElement>(".fruitElement");

  if (isEatFruit(fruit!)) {
    sounds.eat.play();
    fruit!.remove();
    setHasFruit(false);
    increaseSize(fruit!);
    updateScore();
    clearInterval(interval);
    increaseSpeed();
  }
};

export default eatFruit;

const increaseSize = (food: HTMLElement) => {
  snakeBody.push({
    el: createElement("div", "snakeElement"),
    x: parseFloat(food.style.gridColumn),
    y: parseFloat(food.style.gridRow),
  });
};

const isEatFruit = (fruit: HTMLElement) => {
  const snakeHead = snakeBody[0].el;

  return (
    snakeHead.style.gridColumn === fruit!.style.gridColumn &&
    snakeHead.style.gridRow === fruit!.style.gridRow
  );
};
