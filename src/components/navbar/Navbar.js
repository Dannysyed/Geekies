import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

let Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.name}>
        <NavLink to={"/homepage"}>
          <h1>Geekies</h1>
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to={"/technology"}>Technology</NavLink>
        <NavLink to={"/Anime"}>Anime</NavLink>
        <NavLink to={"/Games"}>Games</NavLink>
      </div>
    </div>
  );
};
export default Navbar;
