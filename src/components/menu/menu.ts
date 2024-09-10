import { app } from "../../variables/app";
import createEnterImage from "./createEnterImage";
import createStartButton from "./createStartButton";
import "./menuStyle.css";
import imgae from "../../../public/happySnake-min.webp";

const menu = (callback: () => void) => {
  app!.classList.add("menu");

  createStartButton(callback);
  createEnterImage(`${imgae}`, "an green image in the box");
};

export default menu;
