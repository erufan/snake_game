import createElement from "../../utils/createElement";
import { hasFruit, setHasFruit } from "../../variables/hasFruit";

const createFruit = () => {
  const app = document.getElementById("app");

  if (!hasFruit) {
    const fruit = createElement("fruitElement");

    app!.append(fruit);
    setFruitPosition(fruit);
    setHasFruit(true);
  }
};

export default createFruit;

const setFruitPosition = (fruit: HTMLElement) => {
  const x = Math.floor(Math.random() * 26) + 1;
  const y = Math.floor(Math.random() * 26) + 1;

  fruit.style.gridColumn = x.toString();
  fruit.style.gridRow = y.toString();
};
