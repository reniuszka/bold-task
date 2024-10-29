import fallbackImg from "/QguApMA.jpeg";

import "./index.css";

const Image = ({
  src,
  alt,
  className,
  width = "auto",
  height = "auto",
  loading = "lazy",
  fallbackSrc = fallbackImg,
  ariaLabel,
}) => {
  let defaultAlt = "lorem ipsum";

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackSrc;
    e.target.alt = "Image failed to load";
  };

  return (
    <img
      src={src || fallbackSrc}
      alt={alt || defaultAlt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      onError={handleImageError}
      aria-label={ariaLabel}
    />
  );
};

export default Image;
