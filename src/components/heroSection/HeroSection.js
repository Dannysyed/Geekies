import React, { Suspense } from "react";
import styles from "./heroSection.module.css";

function HeroSection({ imgSrc, heading, subHeading }) {
  return (
    <div className={styles.heroContainer}>
      <Suspense fallback={<h2>loading...</h2>}>
        <img src={imgSrc} alt="best blogs to read today" />
      </Suspense>
      <h1 className={styles.mainHeading}>{heading}</h1>
      <p className={styles.subHeading}>{subHeading}</p>
    </div>
  );
}

export default HeroSection;
