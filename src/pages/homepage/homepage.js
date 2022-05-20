import HeroSection from "../../components/navbar/heroSection/HeroSection";
import styles from "./homepage.module.css";

let Homepage = () => {
  return (
    <div className={styles.home}>
      <HeroSection />
    </div>
  );
};
export default Homepage;
