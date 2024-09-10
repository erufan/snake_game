import { app } from "../../variables/app";
import createEnterImage from "./createEnterImage";
import createStartButton from "./createStartButton";
import "./menuStyle.css";

const menu = (callback: () => void) => {
  app!.classList.add("menu");

  createStartButton(callback);
  createEnterImage("/public/happySnake-min.webp", "an green image in the box");
};

export default menu;
