import createElement from "../../utils/createElement";
import { setHasFruit } from "../../variables/hasFruit";
import { snakeBody } from "../../variables/snakeBody";

const eatFruit = () => {
  const fruit = document.querySelector<HTMLElement>(".fruitElement");
  const snakeHead = snakeBody[0].el;

  if (
    snakeHead.style.gridColumn === fruit!.style.gridColumn &&
    snakeHead.style.gridRow === fruit!.style.gridRow
  ) {
    fruit!.remove();
    setHasFruit(false);
    increaseSize(fruit!);
  }
};

export default eatFruit;

const increaseSize = (food: HTMLElement) => {
  snakeBody.push({
    el: createElement("snakeElement"),
    x: parseFloat(food.style.gridColumn),
    y: parseFloat(food.style.gridRow),
  });
};
