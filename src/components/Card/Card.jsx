import PropTypes from "prop-types";
import { cardVariants } from "../../animations/variants";
import { icons } from "../../assets";
import { motion } from "framer-motion";
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
    id: showID,
    isBookmarked,
    thumbnail: { regular },
    category,
    rating,
    title,
    year,
  } = show;

  // Set card thumbnail based on window width
  const cardThumbnail = windowWidth > 768 ? regular.large : regular.small;
  const categoryIcon = category === "Movie" ? iconCategoryMovies : iconCategoryTv;

  return (
    <motion.article
      className={`${styles.card}`}
      initial="hidden"
      animate="show"
      exit="exit"
      variants={cardVariants}
    >
      <figure
        className={`${styles.cardBackground} ${styles.cardImage}`}
        style={{ backgroundImage: `url(${cardThumbnail})` }}
      >
        <button
          id={title}
          className={styles.bookmarkButton}
          aria-label="bookmark button"
          onClick={() => toggleBookmark(showID)}
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
    </motion.article>
  );
};

Card.propTypes = {
  show: PropTypes.object,
  windowWidth: PropTypes.number,
  toggleBookmark: PropTypes.func,
};

export default Card;
