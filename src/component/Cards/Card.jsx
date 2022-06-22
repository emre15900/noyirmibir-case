import React from "react";
import styles from "./styles.module.css";
import { Box, Text, Image } from "@chakra-ui/react";
import Button from "../Button/Button";

function Card({heading, description}) {
  return (
    <div>
      <Box display="flex">
        {heading && <Box as="h1" fontSize="3xl">{heading}</Box>}
        {description && <Box as="p" fontSize="lg">{description}</Box>}
        <Button text={"Learn More"} className={"slider_button pink"} />
        <Button text={"Find a Dealer"} className={"slider_button red"} />
      </Box>
    </div>
  );
}

export default Card;
