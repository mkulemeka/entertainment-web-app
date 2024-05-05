import { FormButton, FormInput, LoginError } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthProvider";
import Logo from "../assets/logo.svg";
import styles from "./Login.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { error, loading, signUp, setLoading, setError } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState({ password: "", confirmPassword: "" });
  const [formError, setFormError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = passwords;
    if (!email || !password || !confirmPassword || password !== confirmPassword) {
      setFormError(true);
      return;
    }

    try {
      await signUp(email, passwords.password);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError("User already exists");
      setLoading(false);
    }
  };

  // Handle email and password input
  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "email") setEmail(value);
    if (name === "password" || name === "confirmPassword")
      setPasswords({ ...passwords, [name]: value });

    setFormError(false);
  };

  return (
    <section className={styles.section}>
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
      {error && <LoginError error={error} />}
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <FormInput
          id="email"
          type="email"
          name="email"
          formError={formError}
          value={email}
          placeholder="Email address"
          onChange={handleChange}
        />
        <FormInput
          id="password"
          type="password"
          name="password"
          formError={formError}
          value={passwords.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <FormInput
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          formError={formError}
          value={passwords.confirmPassword}
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <FormButton
          buttonText={loading ? "Signing up" : "Sign Up"}
          loading={loading}
        />
        <span className={styles.span}>
          {`Already have an account? `}
          <Link to="/login" className={styles.redirectLink}>
            Login
          </Link>
        </span>
      </form>
    </section>
  );
};

export default SignUp;
