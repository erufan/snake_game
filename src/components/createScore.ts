import createElement from "../utils/createElement";
import { app } from "../variables/app";
import "./scoreStyle.css";

const createScore = () => {
  const scoreContainer = createElement("div", "score");

  scoreContainer.innerHTML = `
  <p>score :</p>
  <p>highest score : ${localStorage.getItem("highestScore")}</p>
  `;
  document.body.insertBefore(scoreContainer, app);
};

export default createScore;
