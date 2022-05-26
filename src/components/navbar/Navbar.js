import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { Card } from "@mui/material";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

let Navbar = () => {
  return (
    <Card component="nav" elevation={8} className={styles.nav}>
      <div className={styles.name}>
        <NavLink to={"/homepage"}>
          <h1>Geekies</h1>
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to={"/technology"}>HOMEPAGES</NavLink>
        <NavLink to={"/technology"}>TECHNOLOGY</NavLink>
        <NavLink to={"/Anime"}>ANIME</NavLink>
        <NavLink to={"/Games"}>GAMES</NavLink>
        <NavLink to={"/Games"}>CONTACT US</NavLink>
      </div>
      <div className={styles.search}>
        <div className="">
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: "black", fontSize: "1.3rem" }}
          >
            Add post
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default Navbar;
