import { EntertainmentContext } from "../../context/EntertainmentProvider";
import PropTypes from "prop-types";
import { icons } from "../../assets";
import styles from "./TrendingCard.module.css";
import { useContext } from "react";

const {
  iconBookmark,
  iconBookmarkFilled,
  iconPlay,
  iconCategoryMovies,
  iconCategoryTv,
} = icons;

const TrendingCard = ({ show }) => {
  const { windowWidth, toggleBookmark } = useContext(EntertainmentContext);

  const {
    isBookmarked,
    id: showID,
    thumbnail: { trending },
    category,
    rating,
    title,
    year,
  } = show;

  const trendingThumbnail = windowWidth > 768 ? trending.large : trending.small;
  const categoryIcon = category === "Movie" ? iconCategoryMovies : iconCategoryTv;

  return (
    <article
      className={`${styles.trendingCard} ${styles.cardBackground}`}
      style={{ backgroundImage: `url(${trendingThumbnail})` }}
    >
      <button
        className={styles.bookmarkButton}
        onClick={() => toggleBookmark(showID)}
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

// Add prop types for type checking
TrendingCard.propTypes = {
  show: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    thumbnail: PropTypes.shape({
      trending: PropTypes.shape({
        large: PropTypes.string.isRequired,
        small: PropTypes.string.isRequired,
      }),
    }),
    category: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
};

export default TrendingCard;
