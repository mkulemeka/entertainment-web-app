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
const TrendingCard = ({ show, windowWidth, toggleBookmark }) => {
  const {
    isBookmarked,
    title,
    thumbnail: { trending },
    category,
    rating,
    year,
  } = show;

  const trendingThumbnail = windowWidth > 768 ? trending.large : trending.small;
  const categoryIcon =
    category === "Movie" ? iconCategoryMovies : iconCategoryTv;

  return (
    <article
      className={`${styles.trendingCard} ${styles.cardBackground}`}
      style={{ backgroundImage: `url(${trendingThumbnail})` }}
    >
      <button
        className={styles.bookmarkButton}
        onClick={() => toggleBookmark(title)}
        aria-label="Bookmark button"
      >
        <img
          src={isBookmarked ? iconBookmarkFilled : iconBookmark}
          alt="Bookmark icon"
        />
      </button>
      <button className={styles.cardPlayButton} aria-label="Play button">
        <img src={iconPlay} alt="Play icon" />
        <span>Play</span>
      </button>
      <div>
        <div className={`${styles.div} ${styles.showStat}`}>
          <p>{year}</p>
          <span className="font-bold">•</span>
          <p className={styles.category}>
            <img
              src={categoryIcon}
              className={styles.categoryIcon}
              alt="Category icon"
            />
            <span>{category}</span>
          </p>
        </div>
        <h3 className={styles.showTitle}>{title}</h3>
      </div>
      <span className={styles.trendingCardRating}>{rating}</span>
    </article>
  );
};

TrendingCard.propTypes = {
  show: PropTypes.object,
  windowWidth: PropTypes.number,
  toggleBookmark: PropTypes.func,
};

export default TrendingCard;
