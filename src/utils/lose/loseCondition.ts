import getHeadCoordinate from "../getHeadCoordinate";

const loseCondition = () => {
  const coordinate = getHeadCoordinate();
  const position = Object.values(coordinate);

  if (isHitWall(position) || isHitItself(coordinate)) loseUi();
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

const loseUi = () => {
  document.body!.innerHTML = "<div>you lost</div>";
};
