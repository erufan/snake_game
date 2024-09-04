import { SnakeBody } from "../../main";
import createElement from "../../utils/createElement";
import { setHasFruit } from "../../utils/hasFruit";

const eatFruit = (snakeBody: SnakeBody[]) => {
  const fruit = document.querySelector<HTMLElement>(".fruitElement");
  const snakeHead = snakeBody[0].el;

  if (
    snakeHead.style.gridColumn === fruit!.style.gridColumn &&
    snakeHead.style.gridRow === fruit!.style.gridRow
  ) {
    fruit!.remove();
    setHasFruit(false);
    increaseSize(snakeBody, fruit!);
  }
};

export default eatFruit;

const increaseSize = (snakeBody: SnakeBody[], food: HTMLElement) => {
  snakeBody.push({
    el: createElement("snakeElement"),
    x: parseFloat(food.style.gridColumn),
    y: parseFloat(food.style.gridRow),
  });
};
