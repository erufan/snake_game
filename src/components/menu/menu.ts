import createEnterImage from "./createEnterImage";
import createStartButton from "./createStartButton";

const menu = (callback: () => void) => {
  const app = document.getElementById("app");
  app!.classList.add("menu");

  createStartButton(callback);
  createEnterImage("./public/happySnake-min.webp", "an green image in the box");
};

export default menu;
