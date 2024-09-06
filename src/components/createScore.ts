import createElement from "../utils/createElement";
import "./scoreStyle.css";

const createScore = () => {
  const scoreContainer = createElement("div", "score");
  const app = document.getElementById("app");

  scoreContainer.innerHTML = `
  <p>score :</p>
  <p>highest score : ${localStorage.getItem("highestScore")}</p>
  `;
  document.body.insertBefore(scoreContainer, app);
};

export default createScore;
