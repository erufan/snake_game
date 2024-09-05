const createElement = (tag: string, className: string) => {
  const element = document.createElement(tag);
  element.className = className;

  return element;
};

export default createElement;
