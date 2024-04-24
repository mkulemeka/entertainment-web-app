import PropTypes from "prop-types";
import { TrendingCard } from "../components";
import styles from "./Trending.module.css";

const Trending = ({ trendingShows }) => {
  return (
    <section className={styles.container}>
      <h2>Trending</h2>
      <section className={styles.cardContainer}>
        {trendingShows.map((trendingShow, index) => (
          <TrendingCard key={trendingShow.title + index} show={trendingShow} />
        ))}
      </section>
    </section>
  );
};

Trending.propTypes = {
  trendingShows: PropTypes.array,
};

export default Trending;
