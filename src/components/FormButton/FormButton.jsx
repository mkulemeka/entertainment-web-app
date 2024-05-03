import PropTypes from "prop-types";
import styles from "./FormButton.module.css";

const FormButton = ({ buttonText }) => {
  return (
    <button className={styles.button} type="submit" aria-label="submit button">
      {buttonText}
    </button>
  );
};

FormButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default FormButton;
