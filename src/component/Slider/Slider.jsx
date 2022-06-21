import React from "react";
import styles from "./styles.module.css";
import slider from "../../images/slider.svg";
import { Box, Text, Button, Image } from "@chakra-ui/react";

function Slider() {
  return (
    <div>
      <Box className={styles.slider}>
        <Image src={slider} alt="product" />
        <Box className={styles.slider_over}>
          <Text className={styles.slider_text}>
            Nothing can stop you
          </Text>
          <Button>FIND OUT MORE</Button>
        </Box>
      </Box>
    </div>
  );
}

export default Slider;
