import React from "react";
import styles from "./sectionPage.module.css";
import BlogRows from "../../components/blogRows/BlogRows";

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
      <BlogRows
        sectionName="All glamour here"
        colorTheme="#f4b6c2"
        textColor="#000000"
        cards={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
      />
    </main>
  );
}

export default SectionPage;
