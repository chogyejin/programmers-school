import PropTypes from "prop-types";

const Image = ({ src, width, height, alt, ...props }) => {
  const imageStyle = {
    width,
    height,
  };

  return <img src={src} {...props} style={{ ...props.style, ...imageStyle }} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alt: PropTypes.string,
};

export default Image;
