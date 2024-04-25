import { Card } from "../components";
import { EntertainmentContext } from "../context/EntertainmentProvider";
import PropTypes from "prop-types";
import styles from "./PageLayout.module.css";
import { useContext } from "react";

const PageLayout = ({ shows, sectionHeading }) => {
  const { setBookmarkedShows, windowWidth } = useContext(EntertainmentContext);
  return (
    <section className={styles.pageLayout}>
      <h2>{sectionHeading}</h2>
      <section className={styles.cardContainer}>
        {shows.map((show, index) => (
          <Card
            key={show.title + index}
            show={show}
            setBookmarkedShows={setBookmarkedShows}
            windowWidth={windowWidth}
          />
        ))}
      </section>
    </section>
  );
};

PageLayout.propTypes = {
  shows: PropTypes.array,
  sectionHeading: PropTypes.string,
};

export default PageLayout;
