import { Button } from "@mui/material";
import React from "react";
import styles from "./navbar.module.css";
import CreateIcon from "@mui/icons-material/Create";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MyDrawer from "../drawer/MyDrawer";

function Navbar() {
  const { width, height } = useWindowDimensions();

  return (
    <nav>
      <div className={styles.logoBox}>
        <h2>Geekies</h2>
      </div>
      <div className={styles.navLinks}>
        <ul>
          <li>Technology</li>
          <li>Anime</li>
          <li>Controversy</li>
          <li>Celebs</li>
          <li>Productivity</li>
        </ul>
      </div>
      <div className={styles.others}>
        {width > 920 ? (
          <Button
            endIcon={<CreateIcon />}
            variant="contained"
            className={styles.addPost}
            disableElevation
          >
            Add post
          </Button>
        ) : (
          <MyDrawer />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
