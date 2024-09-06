import { snakeBody } from "../variables/snakeBody";

const updateScore = () => {
  const score = document.querySelector(".score");
  const Score_Coefficient = 10;
  const bodyExceptHead = snakeBody.length - 1;
  const currentScore = Score_Coefficient * bodyExceptHead;

  let highestScore = parseInt(localStorage.getItem("highestScore")!);

  if (highestScore < currentScore)
    localStorage.setItem("highestScore", currentScore.toString());

  score!.innerHTML = `
  <p>score : ${currentScore}</p>
  <p>highest score : ${localStorage.getItem("highestScore")}</p>
  `;
};

export default updateScore;
