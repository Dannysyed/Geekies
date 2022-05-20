import React from "react";
import styles from "./heroSection.module.css";

function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.mainHeading}>Demon Slayer Season 3</h1>
      <p className={styles.subHeading}>
        When Demon Slayer season 3 comes out, based on everything we know
      </p>
    </div>
  );
}

export default HeroSection;
