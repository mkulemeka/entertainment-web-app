import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Nav = ({ pages }) => {
  return (
    <nav>
      {pages.map(([path, icon]) => {
        return (
          <Link key={path} to={path}>
            <img src={icon} alt={path} />
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
