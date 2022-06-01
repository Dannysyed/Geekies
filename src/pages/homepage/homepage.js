import HeroSection from "../../components/heroSection/HeroSection";
import styles from "./homePage.module.css";
import myImage from "../../assets/heroPage/zenitsu.jpg";
import BlogRows from "../../components/blogRows/BlogRows";

let Homepage = () => {
  return (
    <div className={styles.home}>
      <HeroSection imgSrc={myImage} />
      <BlogRows
        sectionName="Trending today"
        colorTheme="#ff0000"
        textColor="#ffffff"
        cards={[1, 2, 3]}
      />
      <BlogRows
        sectionName="Explore new topics"
        colorTheme="#ffd700"
        textColor="#000000"
        cards={[1, 2, 3]}
      />
      <BlogRows
        sectionName="Must read section"
        colorTheme="#00ff7f"
        textColor="#000000"
        cards={[1, 2, 3]}
      />
    </div>
  );
};
export default Homepage;
