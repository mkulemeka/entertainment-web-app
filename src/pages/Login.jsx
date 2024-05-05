import { FormButton, FormInput } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthProvider";
import Logo from "../assets/logo.svg";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading, error, setLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    setFormError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) setFormError(true);
    if (email && password) {
      try {
        await login(email, password);
        setLoading(false);
        navigate("/");
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    }
  };

  return (
    <section className={styles.section}>
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <FormInput
          id="email"
          name="email"
          type="email"
          formError={formError}
          value={email}
          placeholder="Email address"
          onChange={handleChange}
        />
        <FormInput
          id="password"
          name="password"
          type="password"
          formError={formError}
          value={password}
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
