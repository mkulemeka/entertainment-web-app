import { FormButton, FormInput, LoginError } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthProvider";
import Logo from "../assets/logo.svg";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading, error, setLoading, setError } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
    setFormError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      setFormError(true);
      return;
    }

    try {
      await login(email, password);
      setLoading(false);
      navigate("/");
      clearForm();
    } catch (error) {
      setError("Invalid email or password");
      setLoading(false);
    }
  };

  const clearForm = () => {
    setFormData({ email: "", password: "" });
  };

  return (
    <section className={styles.section}>
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
      {error && <LoginError error={error} />}
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <FormInput
          id="email"
          name="email"
          type="email"
          formError={formError}
          value={formData.email}
          placeholder="Email address"
          onChange={handleChange}
        />
        <FormInput
          id="password"
          name="password"
          type="password"
          formError={formError}
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <FormButton
          buttonText={loading ? "Logging in" : "Login"}
          loading={loading}
        />
        <span className={styles.span}>
          {`Don't have an account? `}
          <Link to="/signup" className={styles.redirectLink}>
            Sign Up
          </Link>
        </span>
      </form>
    </section>
  );
};

export default Login;
