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
    const score = document.querySelector(".score");

    fruit!.remove();
    setHasFruit(false);
    increaseSize(fruit!);

    score!.innerHTML = `<p>score : ${(
      snakeBody.length * 10 -
      10
    ).toString()}</p>`;
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
