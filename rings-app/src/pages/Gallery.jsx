import { Image } from "../Components/Image";

export function Gallery() {
  return (
    <>
      <Image url={process.env.PUBLIC_URL + "/images/Szerszen_Filip.JPG"} />
    </>
  );
}
