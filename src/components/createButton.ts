import createElement from "../utils/createElement";

const createButton = (className: string, callback?: () => void) => {
  const button = createElement("button", className);

  button.textContent = "start";
  if (callback)
    button.onclick = () => {
      callback();
    };

  return button;
};

export default createButton;
