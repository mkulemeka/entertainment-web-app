import {
  IconNavBookmark,
  IconNavHome,
  IconNavMovies,
  IconNavTvSeries,
  icons,
} from "../../assets";

import { AuthContext } from "../../context/AuthProvider";
import { Nav } from "../../components";
import styles from "./Header.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const { imageAvatar, logo } = icons;
const pages = [
  ["/", IconNavHome],
  ["/movies", IconNavMovies],
  ["/tvseries", IconNavTvSeries],
  ["/bookmarkedshows", IconNavBookmark],
];

const Header = () => {
  const navigate = useNavigate();
  const { logout, setLoading, setError } = useContext(AuthContext);
  const handleClick = async () => {
    try {
      await logout();
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError(error?.message);
    }
  };
  return (
    <header className={`bg-darkBlueGrey ${styles.header}`}>
      <figure>
        <img src={logo} alt="Logo" />
      </figure>
      <Nav pages={pages} />
      <figure className={styles.headerProfile}>
        <img src={imageAvatar} alt="Avatar" className="w-full h-auto" />
        <button onClick={handleClick} className={styles.logoutButton}>
          Logout
        </button>
      </figure>
    </header>
  );
};

export default Header;
