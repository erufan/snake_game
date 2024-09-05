import getHeadCoordinate from "../getHeadCoordinate";

const loseCondition = (interval: NodeJS.Timeout) => {
  const coordinate = getHeadCoordinate();
  const position = Object.values(coordinate);

  if (isHitWall(position) || isHitItself(coordinate)) loseUi(interval);
};

export default loseCondition;

const isHitItself = (coordinate: { x: number; y: number }) => {
  const snake = [...document.querySelectorAll<HTMLElement>(".snakeElement")];
  const body = snake.slice(1);

  return body.some(
    (b) =>
      parseInt(b.style.gridColumn) === coordinate.x &&
      parseInt(b.style.gridRow) === coordinate.y
  );
};

const isHitWall = (position: number[]) => {
  const Grid_Max = 26;
  const Grid_Min = 1;

  return position.some((p) => p > Grid_Max || p < Grid_Min);
};

const loseUi = (interval: NodeJS.Timeout) => {
  clearInterval(interval);
  const app = document.getElementById("app");

  app!.classList.remove("app");
  app!.innerHTML = `
    <p class="loseText">You Lost</p>
    <img class="image" src="./public/sadlose.webp" alt="you lost">
  `;
};
