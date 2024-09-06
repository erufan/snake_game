import createElement from "../utils/createElement";

const createScore = () => {
  const scoreContainer = createElement("div", "score");
  const app = document.getElementById("app");

  scoreContainer.innerHTML = `<p>score :</p>`;
  document.body.insertBefore(scoreContainer, app);
};

export default createScore;
