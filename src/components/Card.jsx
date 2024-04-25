import PropTypes from "prop-types";
import { handleBookmarkClick } from "../utils/bookmarkUtils";
import { icons } from "../assets";
import styles from "./Card.module.css";

const { iconBookmark, iconBookmarkFilled, iconPlay } = icons;
const Card = ({ show, windowWidth, setBookmarkedShows }) => {
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

  // Handle bookmark click
  const handleClick = () => {
    handleBookmarkClick(show, setBookmarkedShows);
  };

  return (
    <article className={`${styles.card}`}>
      <figure
        className={`${styles.cardBackground} ${styles.cardImage}`}
        style={{ backgroundImage: `url(${cardThumbnail})` }}
      >
        <button
          className={styles.bookmarkButton}
          aria-label="bookmark button"
          onClick={handleClick}
        >
          <img
            src={isBookmarked ? iconBookmarkFilled : iconBookmark}
            alt="Bookmark icon"
          />
        </button>
        <button className={styles.cardPlayButton} aria-label="play button">
          <img src={iconPlay} />
          <span>Play</span>
        </button>
      </figure>
      <div className={`${styles.div} ${styles.showStat}`}>
        <p>{year}</p>•<p>{category}</p>•<p>{rating}</p>
      </div>
      <h3 className={styles.showTitle}>{title}</h3>
    </article>
  );
};

Card.propTypes = {
  show: PropTypes.object,
  windowWidth: PropTypes.number,
  setBookmarkedShows: PropTypes.func,
};

export default Card;
