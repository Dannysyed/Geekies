import HeroSection from "../../components/heroSection/HeroSection";
import styles from "./homePage.module.css";
import myImage from "../../assets/heroPage/zenitsu.jpg";
import BlogRows from "../../components/blogRows/BlogRows";

let Homepage = () => {
  return (
    <div className={styles.home}>
      <HeroSection imgSrc={myImage} />
      <BlogRows />
    </div>
  );
};
export default Homepage;
