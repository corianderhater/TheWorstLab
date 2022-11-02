import { Image } from "../Components/Image";
import data from "../modelsData.json";

export function Gallery() {
  return (
    <div className="gallery-container">
      {data.map((modelData, index) => {
        return <Image url={modelData["image-url"]} />;
      })}
    </div>
  );
}
