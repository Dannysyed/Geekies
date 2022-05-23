import HeroSection from "../../components/heroSection/HeroSection";
import styles from "./homepage.module.css";
import myImage from "../../assets/heroPage/zenitsu.jpg";

let Homepage = () => {
  return (
    <div className={styles.home}>
      <HeroSection
        imgSrc={myImage}
        heading="Demon Slayer Season 3"
        subHeading="When Demon Slayer season 3 comes out, based on everything we know"
      />
    </div>
  );
};
export default Homepage;
