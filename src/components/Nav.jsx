import { Link, useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import { useState } from "react";

const Nav = ({ pages }) => {
  const { pathname } = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const linkStyles = {
    transition: "ease-in-out 0.2s",
    transform: "scale(1.15)",
  };

  const hoverColor = "hsl(0, 97%, 63%)";

  return (
    <nav className="flex gap-6 lg:flex-col">
      {pages.map(([path, Icon]) => {
        return (
          <Link
            key={path}
            to={path}
            style={pathname === path ? linkStyles : {}}
          >
            <Icon
              color={pathname === path ? "white" : "#5A698F"}
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              hoverColor={hoverColor}
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
