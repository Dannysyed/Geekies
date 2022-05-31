import { Button } from "@mui/material";
import React from "react";
import styles from "./navbar.module.css";
import CreateIcon from "@mui/icons-material/Create";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Link } from "react-router-dom";
import MyDrawer from "../drawer/MyDrawer";

// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  const { width, height } = useWindowDimensions();

  return (
    <nav>
      <div className={styles.logoBox}>
        <h2>
          <Link className={styles.reactRouterLink} to="/">
            Geekies
          </Link>
        </h2>
      </div>
      <div className={styles.navLinks}>
        <ul>
          <li>
            <Link to={"/section/technology"}>Technology</Link>
          </li>
          <li>
            <Link to={"/section/anime"}>Anime</Link>
          </li>
          <li>
            <Link to={"/section/controversy"}>Controversy</Link>
          </li>
          <li>
            <Link to={"/section/celebs"}>Celebs</Link>
          </li>
          <li>
            <Link to={"/section/productivity"}>Productivity</Link>
          </li>
        </ul>
      </div>
      <div className={styles.others}>
        {width > 1200 ? (
          <Button
            endIcon={<CreateIcon />}
            variant="contained"
            className={styles.addPost}
            disableElevation
          >
            Add Blog
          </Button>
        ) : (
          <MyDrawer />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
