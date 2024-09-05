import createFruit from "./components/fruit/createFruit";
import eatFruit from "./components/snake/eatFruit";
import move from "./components/snake/move";
import loseCondition from "./utils/lose/loseCondition";

const updateGame = (interval: NodeJS.Timeout) => {
  createFruit();
  move();
  eatFruit();
  loseCondition(interval);
};

export default updateGame;
