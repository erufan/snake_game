import { app } from "../../variables/app";
import createEnterImage from "./createEnterImage";
import createButton from "../createButton";
import "./menuStyle.css";
import imgae from "../../../public/happySnake-min.webp";

const menu = (callback: () => void) => {
  app!.classList.add("menu");

  const startButton = createButton("start", "startButton", callback);
  app!.append(startButton);

  createEnterImage(`${imgae}`, "an green image in the box");
};

export default menu;
