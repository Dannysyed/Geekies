import HeroSection from "../../components/navbar/heroSection/HeroSection";
import styles from "./homepage.module.css";

let Homepage = () => {
  return (
    <div className={styles.home}>
      <HeroSection
        heading="Demon Slayer Season 3"
        subHeading="When Demon Slayer season 3 comes out, based on everything we know"
      />
    </div>
  );
};
export default Homepage;
