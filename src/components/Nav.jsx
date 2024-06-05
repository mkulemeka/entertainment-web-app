import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";

import { EntertainmentContext } from "../context/EntertainmentProvider";
import PropTypes from "prop-types";

const linkStyles = {
  transition: "ease-in-out 0.2s",
  transform: "scale(1.15)",
};

const hoverColor = "hsl(0, 97%, 63%)";

const Nav = ({ pages }) => {
  const { pathname } = useLocation();
  const { windowWidth } = useContext(EntertainmentContext);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <nav className="flex gap-6 lg:flex-col">
      {pages.map(([path, Icon]) => {
        const isHovered = hoveredIcon === path;
        return (
          <Link
            key={path}
            to={path}
            onMouseEnter={() => setHoveredIcon(path)}
            onMouseLeave={() => setHoveredIcon(null)}
            style={pathname === path ? linkStyles : {}}
          >
            <Icon
              color={pathname === path ? "white" : "#5A698F"}
              isHovered={isHovered}
              hoverColor={windowWidth > 768 ? hoverColor : "white"}
            />
          </Link>
        );
      })}
    </nav>
  );
};

Nav.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Nav;
