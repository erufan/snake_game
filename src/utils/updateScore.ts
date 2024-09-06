import { snakeBody } from "../variables/snakeBody";

const updateScore = () => {
  const score = document.querySelector(".score");
  const Score_Coefficient = 10;
  const bodyExceptHead = snakeBody.length - 1;

  score!.innerHTML = `<p>score : ${Score_Coefficient * bodyExceptHead}</p>`;
};

export default updateScore;
