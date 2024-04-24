import { EntertainmentContext } from "../context/EntertainmentProvider";
import PropTypes from "prop-types";
import { icons } from "../assets";
import styles from "./Card.module.css";
import { useContext } from "react";

const { iconBookmark, iconBookmarkFilled, iconPlay } = icons;
const Card = ({ show }) => {
  const { windwWidth } = useContext(EntertainmentContext);
  const {
    isBookmarked,
    title,
    thumbnail: { regular },
    category,
    rating,
    year,
  } = show;

  const cardThumbnail = windwWidth > 768 ? regular.large : regular.small;
  
  return (
    <article className={` ${styles.card}`}>
      <figure
        className={`${styles.cardBackground} ${styles.cardImage}`}
        style={{ backgroundImage: `url(${cardThumbnail})` }}
      >
        <button className={styles.bookmarkButton}>
          <img
            src={isBookmarked ? iconBookmarkFilled : iconBookmark}
            alt="Bookmark icon"
          />
        </button>
        <button className={styles.cardPlayButton}>
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
};

export default Card;
