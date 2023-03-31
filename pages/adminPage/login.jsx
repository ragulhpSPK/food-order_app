import styles from "../../styles/login.module.css";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

function Login() {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/adminPage");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          type="text"
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.btn}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong credentials</span>}
      </div>
    </div>
  );
}

export default Login;
