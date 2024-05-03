import FormButton from "../components/FormButton/FormButton";
import Logo from "../assets/logo.svg";
import styles from "./Login.module.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className={styles.section}>
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
      <form className={styles.form}>
        <h1>Login</h1>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormButton buttonText="Login" />
        <span className={styles.span}>
          Don&apos;t have an account?{" "}
          <a href="#signup" className={styles.redirectLink}>
            Sign Up
          </a>
        </span>
      </form>
    </section>
  );
};

export default Login;
