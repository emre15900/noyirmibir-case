import React from "react";
import styles from "./styles.module.css";
import slider from "../../images/slider.svg";
import { Box, Text, Image } from "@chakra-ui/react";
import Button from "../Button/Button";

function Slider() {
  return (
    <div>
      <Box className={styles.slider}>
        <Image src={slider} alt="product" />
        <Box className={styles.slider_over}>
          <Text className={styles.slider_text}>
            Nothing can stop <br /> you
          </Text>
          <Button text={"FIND OUT MORE"} className={"slider_button"} />
        </Box>
      </Box>
    </div>
  );
}

export default Slider;
