import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { Card, Input } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

let Navbar = () => {
  const Input = styled('input')({
    display: 'none',
  });
  return (
    <Card elevation={8} className={styles.nav}>
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
        <div className="input-group rounded">
          {/* <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <span className="input-group-text border-0" id="search-addon">
            <i class="fa fa-search" aria-hidden="true"></i>
          </span> */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" />
              <Button variant="contained" component="span" style={{ backgroundColor: 'black' }}>
                Add post
                <PhotoCamera style={{ marginLeft: '8px' }} />
              </Button>

            </label>
            <label htmlFor="icon-button-file" >
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton color="primary" aria-label="upload picture" component="span" >
              </IconButton >
            </label>
          </Stack>
        </div>
      </div>
    </Card>
  );
};
export default Navbar;
