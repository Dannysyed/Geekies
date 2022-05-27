import React from "react";
import styles from "./blogRows.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function BlogRows({ sectionName, colorTheme, textColor }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{sectionName}</h2>
      <div className={styles.blogsContainer}>
        {[1, 2, 3].map((item) => (
          <Card
            className={styles.blogCard}
            sx={{ maxWidth: 345, borderColor: colorTheme }}
            elevation="0"
          >
            <CardMedia
              component="img"
              height="200"
              image="https://ichef.bbci.co.uk/news/976/cpsprodpb/15E47/production/_124717698_gettyimages-1395200655.jpg"
              alt="green iguana"
            />
            <CardContent
              style={{ backgroundColor: colorTheme }}
              className={styles.cardContent}
            >
              <p className={styles.blogTitle} style={{ color: textColor }}>
                SpaceX president backs Elon Musk over sex misconduct claims: ‘I
                believe the allegations to be false’
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BlogRows;
