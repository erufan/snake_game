import createElement from "../../utils/createElement";
import { app } from "../../variables/app";

const createEnterImage = (src: string, alt: string) => {
  const image = createElement("img", "image");
  app!.append(image);

  image.setAttribute("src", src);
  image.setAttribute("alt", alt);
};

export default createEnterImage;
