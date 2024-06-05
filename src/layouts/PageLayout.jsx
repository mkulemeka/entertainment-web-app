import { Card } from "../components";
import PropTypes from "prop-types";
import styles from "./PageLayout.module.css";

const PageLayout = ({ shows, sectionHeading }) => {
  return (
    <section className={styles.pageLayout}>
      <h2>{sectionHeading}</h2>
      <section className={styles.cardContainer}>
        {shows.map((show, index) => (
          <Card key={show.id + index} show={show} />
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
