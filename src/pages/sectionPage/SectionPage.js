import React from "react";
import styles from "./sectionPage.module.css";

function SectionPage() {
  return (
    <main>
      <div className={styles.header}>
        <img
          src="https://www.rollingstone.com/wp-content/uploads/2022/05/met-gala-blake-and-ryan.jpg?w=1024"
          alt=""
        />
      </div>
      <div className={styles.headerText}>
        <h2>The Met Gala theme, dresses and red carpet pictures</h2>
        <p>
          All the news from the Met Gala including the latest theme, celebrity
          news and the best and worst Met Ball red carpet dresses.
        </p>
      </div>
    </main>
  );
}

export default SectionPage;
