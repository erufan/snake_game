import { setDirection } from "../../utils/direction";

const handleDirectionChange = (event: KeyboardEvent) => {
  const validDirections = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];

  if (validDirections.includes(event.key)) setDirection(event.key);
};

export default handleDirectionChange;
