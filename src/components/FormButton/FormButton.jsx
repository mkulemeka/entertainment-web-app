import PropTypes from "prop-types";
import styles from "./FormButton.module.css";

const FormButton = ({ buttonText, loading }) => {
  return (
    <button
      className={styles.button}
      type="submit"
      aria-label="submit button"
      disabled={loading}
    >
      {buttonText}
    </button>
  );
};

FormButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default FormButton;
