import "./style.css";

const app = document.getElementById("app");

const createElement = (className: string) => {
  const element = document.createElement("div");
  element.className = className;
  app!.append(element);
};

createElement("snakeElement"); // test create Element
