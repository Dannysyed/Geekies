import React from "react";
import styles from "./heroSection.module.css";
import myImage from "../../assets/heroPage/zenitsu.jpg";

function HeroSection({ heading, subHeading }) {
  return (
    <div className={styles.heroContainer}>
      <img src={myImage} alt="best blogs for today" />
      <h1 className={styles.mainHeading}>{heading}</h1>
      <p className={styles.subHeading}>{subHeading}</p>
    </div>
  );
}

export default HeroSection;
