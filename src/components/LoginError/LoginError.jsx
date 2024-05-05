import { MdError } from "react-icons/md";
import PropTypes from "prop-types";
import styles from "./LoginError.module.css";

const LoginError = ({ error }) => {
  return (
    <span className={styles.loginError}>
      <MdError />
      {error}
    </span>
  );
};

LoginError.propTypes = {
  error: PropTypes.string.isRequired,
};

export default LoginError;
