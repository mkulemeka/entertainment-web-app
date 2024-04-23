import PropTypes from "prop-types";

const IconNavHome = ({
  color = "#5A698F",
  hoverColor,
  isHovered,
  setIsHovered,
}) => {
  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path
        d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
        fill={isHovered ? hoverColor : color}
      />
    </svg>
  );
};

IconNavHome.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  isHovered: PropTypes.bool,
  setIsHovered: PropTypes.func,
};

export default IconNavHome;