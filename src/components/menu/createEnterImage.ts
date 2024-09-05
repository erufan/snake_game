import createElement from "../../utils/createElement";

const createEnterImage = (src: string, alt: string) => {
  const image = createElement("img", "image");
  const app = document.getElementById("app");
  app!.append(image);

  image.setAttribute("src", src);
  image.setAttribute("alt", alt);
};

export default createEnterImage;
