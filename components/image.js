import { getMediaUrl } from "../lib/media";

const Image = ({ image, style }) => {
  const imageUrl = getMediaUrl(image);

  return (
    <img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
    />
  );
};

export default Image;
