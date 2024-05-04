import { FormButton, FormInput } from "../components";

import Logo from "../assets/logo.svg";
import styles from "./Login.module.css";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState({ password: "", confirmPassword: "" });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !passwords.password || !passwords.confirmPassword) setError(true);
  };

  // Handle password input
  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "email") setEmail(value);
    if (name === "password" || name === "confirmPassword")
      setPasswords({ ...passwords, [name]: value });

    setError(false);
  };

  return (
    <section className={styles.section}>
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <FormInput
          id="email"
          type="email"
          name="email"
          error={error}
          value={email}
          placeholder="Email address"
          onChange={handleChange}
        />
        <FormInput
          id="password"
          type="password"
          name="password"
          error={error}
          value={passwords.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <FormInput
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          error={error}
          value={passwords.confirmPassword}
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <FormButton buttonText="Sign Up" />
      </form>
    </section>
  );
};

export default SignUp;