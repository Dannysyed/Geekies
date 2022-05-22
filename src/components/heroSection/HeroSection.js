import React from "react";
import styles from "./heroSection.module.css";

function HeroSection({ heading, subHeading }) {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.mainHeading}>{heading}</h1>
      <p className={styles.subHeading}>{subHeading}</p>
    </div>
  );
}

export default HeroSection;
