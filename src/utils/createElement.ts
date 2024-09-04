const createElement = (className: string) => {
  const element = document.createElement("div");
  element.className = className;

  return element;
};

export default createElement;
