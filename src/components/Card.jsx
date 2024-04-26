import PropTypes from "prop-types";
import { icons } from "../assets";
import styles from "./Card.module.css";

const {
  iconBookmark,
  iconBookmarkFilled,
  iconPlay,
  iconCategoryMovies,
  iconCategoryTv,
} = icons;
const Card = ({ show, windowWidth, toggleBookmark }) => {
  const {
    isBookmarked,
    title,
    thumbnail: { regular },
    category,
    rating,
    year,
  } = show;

  // Set card thumbnail based on window width
  const cardThumbnail = windowWidth > 768 ? regular.large : regular.small;
  const categoryIcon = category === "Movie" ? iconCategoryMovies : iconCategoryTv;

  return (
    <article className={`${styles.card}`}>
      <figure
        className={`${styles.cardBackground} ${styles.cardImage}`}
        style={{ backgroundImage: `url(${cardThumbnail})` }}
      >
        <button
          id={title}
          className={styles.bookmarkButton}
          aria-label="bookmark button"
          onClick={() => toggleBookmark(title)}
        >
          <img
            src={isBookmarked ? iconBookmarkFilled : iconBookmark}
            alt="Bookmark icon"
          />
        </button>
        <button className={styles.cardPlayButton} aria-label="play button">
          <img src={iconPlay} alt="Play icon" />
          <span>Play</span>
        </button>
      </figure>
      <div className={`${styles.div} ${styles.showStat}`}>
        <p>{year}</p>•
        <p className={styles.category}>
          <img
            src={categoryIcon}
            className={styles.categoryIcon}
            alt="Category icon"
          />
          {category}
        </p>
        •<p>{rating}</p>
      </div>
      <h3 className={styles.showTitle}>{title}</h3>
    </article>
  );
};

Card.propTypes = {
  show: PropTypes.object,
  windowWidth: PropTypes.number,
  toggleBookmark: PropTypes.func,
};

export default Card;
