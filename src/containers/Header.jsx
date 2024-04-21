import { Nav } from "../components";
import { icons } from "../assets";

const {
  iconNavBookmark,
  iconNavHome,
  iconNavMovies,
  iconNavTv,
  imageAvatar,
  logo,
} = icons;
const pages = [
  ["/", iconNavHome],
  ["movies", iconNavMovies],
  ["tvseries", iconNavTv],
  ["bookmarkedshows", iconNavBookmark],
];

const Header = () => {
  return (
    <header>
      <figure>
        <img src={logo} alt="Logo" />
      </figure>
      <Nav pages={pages} />
      <figure>
        <img src={imageAvatar} alt="Avatar" />
      </figure>
    </header>
  );
};

export default Header;
