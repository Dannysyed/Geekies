import React from "react";
import styles from "./sectionPage.module.css";
import BlogRows from "../../components/blogRows/BlogRows";

function SectionPage({ imgSrc, title, subtitle }) {
  return (
    <main>
      <div className={styles.header}>
        <img src={imgSrc} alt="section here" />
      </div>
      <div className={styles.headerText}>
        <h2>{title}</h2>
        <p>
          {subtitle.length > 200 ? subtitle.slice(0, 201) + "..." : subtitle}
        </p>
      </div>
      <BlogRows
        sectionName=""
        colorTheme="#ffd3b6"
        textColor="#000000"
        cards={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
      />
    </main>
  );
}

export default SectionPage;
