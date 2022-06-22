import React from "react";
import styles from "./styles.module.css";
import { Box } from "@chakra-ui/react";
import Button from "../Button/Button";

function Card({ heading, description }) {
  return (
    <div>
      <Box className={styles.card_box}>
        <Box className={styles.card_head}>
          <div>
            {heading && (
              <Box as="h1" className={styles.card_heading}>
                {heading}
              </Box>
            )}
          </div>
          <div>
            {description && (
              <Box as="p" className={styles.card_description}>
                {description}
              </Box>
            )}
          </div>
        </Box>
        <div className={styles.card_button}>
          <Button text={"Learn More"} className={"slider_button pink"} />
          <Button text={"Find a Dealer"} className={"slider_button red"} />
        </div>
      </Box>
    </div>
  );
}

export default Card;
