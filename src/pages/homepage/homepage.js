import HeroSection from "../../components/heroSection/HeroSection";
import styles from "./homePage.module.css";
import myImage from "../../Assets/heroPage/zenitsu.jpg";
import BlogRows from "../../components/blogRows/BlogRows";
import Carouselfn from "../../components/heroSection/carusol";

let Homepage = () => {
  return (
    <div className={styles.home}>
      {/* <Carouselfn></Carouselfn> */}
      <HeroSection
        imgSrc={myImage}
        heading="Demon Slayer Season 3"
        subHeading="When Demon Slayer season 3 comes out, based on everything we know"
      />
      <BlogRows />
    </div>
  );
};
export default Homepage;
