import {
  IconNavBookmark,
  IconNavHome,
  IconNavMovies,
  IconNavTvSeries,
  icons,
} from "../assets";

import { Nav } from "../components";
import styles from "./Header.module.css";

const { imageAvatar, logo } = icons;
const pages = [
  ["/", IconNavHome],
  ["/movies", IconNavMovies],
  ["/tvseries", IconNavTvSeries],
  ["/bookmarkedshows", IconNavBookmark],
];


const Header = () => {
  return (
    <header className={`bg-darkBlueGrey ${styles.header}`}>
      <figure>
        <img src={logo} alt="Logo" />
      </figure>
      <Nav pages={pages} />
      <figure className="w-[24px] h-[24px]">
        <img src={imageAvatar} alt="Avatar" className="w-full h-auto" />
      </figure>
    </header>
  );
};

export default Header;
