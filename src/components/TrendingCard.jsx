import { EntertainmentContext } from "../context/EntertainmentProvider";
import PropTypes from "prop-types";
import { icons } from "../assets";
import styles from "./Card.module.css";
import { useContext } from "react";

const { iconBookmark, iconBookmarkFilled, iconPlay } = icons;
const TrendingCard = ({ show }) => {
  const { windwWidth } = useContext(EntertainmentContext);
  const {
    isBookmarked,
    title,
    thumbnail: { trending },
    category,
    rating,
    year,
  } = show;

  const trendingThumbnail = windwWidth > 768 ? trending.large : trending.small;

  return (
    <article
      className={`${styles.trendingCard} ${styles.cardBackground}`}
      style={{ backgroundImage: `url(${trendingThumbnail})` }}
    >
      <button className={styles.bookmarkButton}>
        <img src={isBookmarked ? iconBookmarkFilled : iconBookmark} />
      </button>
      <button className={styles.cardPlayButton}>
        <img src={iconPlay} />
        <span>Play</span>
      </button>
      <div>
        <div className={styles.div}>
          <p className="show-stat">{year}</p>
          <span className="font-bold">•</span>
          <p className="show-stat">{category}</p>
        </div>
        <h3 className="show-title">{title}</h3>
      </div>
      <span className={styles.trendingCardRating}>{rating}</span>
    </article>
  );
};

TrendingCard.propTypes = {
  show: PropTypes.object,
};

export default TrendingCard;
