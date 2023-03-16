import React from "react";
import Button from "../components/button";
import styles from "../styles/home.module.css"
const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Next.js complete Course 2023 (🚀)</h1>
      <Button> Hello CSS </Button>
    </div>
  );
};

export default Home;
