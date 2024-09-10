import createElement from "../utils/createElement";

const createButton = (
  textContent: string,
  className: string,
  callback?: () => void
) => {
  const button = createElement("button", className);

  button.textContent = textContent;
  if (callback)
    button.onclick = () => {
      callback();
    };

  return button;
};

export default createButton;
