import React from "react";
import Button from "../components/button";
import styles from "../styles/home.module.scss"
import variables from '../styles/variables.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Next.js complete Course 2023 (🚀)</h1>
      <Button> Hello CSS </Button>
      <p style={{color:variables.primaryColor}}>Custom CSS variables</p>
    </div>
  );
};

export default Home;
