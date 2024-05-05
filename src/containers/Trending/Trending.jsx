import { EntertainmentContext } from "../../context/EntertainmentProvider";
import PropTypes from "prop-types";
import { TrendingCard } from "../../components";
import styles from "./Trending.module.css";
import { useContext } from "react";

const Trending = ({ trendingShows }) => {
  const { windowWidth, toggleBookmark } = useContext(EntertainmentContext);
  return (
    <section className={styles.container}>
      <h2>Trending</h2>
      <section className={styles.cardContainer}>
        {trendingShows.map((trendingShow, index) => (
          <TrendingCard
            key={trendingShow.title + index}
            show={trendingShow}
            toggleBookmark={toggleBookmark}
            windowWidth={windowWidth}
          />
        ))}
      </section>
    </section>
  );
};

Trending.propTypes = {
  trendingShows: PropTypes.array,
};

export default Trending;
