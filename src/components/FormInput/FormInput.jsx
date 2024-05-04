import PropTypes from "prop-types";
import styles from "./FormInput.module.css";

const FormInput = ({ type, id, name, value, placeholder, onChange, error }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${styles.input} ${error && !value ? styles.inputError : ""}`}
      />
      {error && !value && <span className={styles.error}>{`Can't be empty`}</span>}
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

export default FormInput;
