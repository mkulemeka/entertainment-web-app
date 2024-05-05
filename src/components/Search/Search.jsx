import PropTypes from "prop-types";
import { icons } from "../../assets";
import styles from "./Search.module.css";

const { iconSearch } = icons;
const Search = ({ placeholder, searchInput, handleSearch }) => {
  return (
    <section className={styles.section}>
      <img src={iconSearch} alt="search" className={styles.icon} />
      <input
        type="text"
        placeholder={placeholder}
        value={searchInput}
        name="searchInput"
        onChange={handleSearch}
        className={`bg-lightBlack caret-red ${styles.input}`}
      />
    </section>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  searchInput: PropTypes.string,
  handleSearch: PropTypes.func,
};

export default Search;
