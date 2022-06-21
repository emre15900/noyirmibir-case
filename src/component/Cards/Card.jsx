import React from "react";
import styles from "./styles.module.css";
import { Box, Text, Image } from "@chakra-ui/react";
import Button from "../Button/Button";

function Card() {
  return (
    <div>
      <Box display="flex">
        <Button text={"Learn More"} className={"slider_button pink"} />
        <Button text={"Find a Dealer"} className={"slider_button red"} />
      </Box>
    </div>
  );
}

export default Card;
