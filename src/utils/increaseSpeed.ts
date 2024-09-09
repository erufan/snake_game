import updateGame from "../updateGame";
import { snakeBody } from "../variables/snakeBody";

const increaseSpeed = () => {
  const initialSpeed = 250;
  const Max_Speed = 85; // lessr move faster
  const Speed_Coefficient = 15; //lessr change speed is biger
  const reducer = snakeBody.length * Speed_Coefficient;

  const speed = Math.max(Max_Speed, initialSpeed - reducer);

  const interval = setInterval(() => updateGame(interval), speed);
};

export default increaseSpeed;
