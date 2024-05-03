import FormButton from "../components/FormButton/FormButton";
import Logo from "../assets/logo.svg";
import styles from "./Login.module.css";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState({ password: "", confirmPassword: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Handle password input
  const handlePassword = ({ target }) => {
    const { name, value } = target;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [name]: value,
    }));
  };

  return (
    <section className={styles.section}>
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Email address"
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          value={passwords.password}
          placeholder="Password"
          onChange={handlePassword}
        />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={passwords.confirmPassword}
          placeholder="Confirm Password"
          onChange={handlePassword}
        />
        <FormButton buttonText="Sign Up" />
      </form>
    </section>
  );
};

export default SignUp;
