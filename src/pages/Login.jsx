import { FormButton, FormInput } from "../components";

import Logo from "../assets/logo.svg";
import styles from "./Login.module.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) setError(true);
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
          error={error}
          value={email}
          placeholder="Email address"
          onChange={handleChange}
        />
        <FormInput
          id="password"
          name="password"
          type="password"
          error={error}
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <FormButton buttonText="Login" />
        <span className={styles.span}>
          {`Don't have an account? `}
          <a href="#signup" className={styles.redirectLink}>
            Sign Up
          </a>
        </span>
      </form>
    </section>
  );
};

export default Login;
