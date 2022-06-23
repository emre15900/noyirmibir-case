import React from "react";
import styles from "./styles.module.css";
import { Box, Container, Text, Flex } from "@chakra-ui/react";
import Button from "../Button/Button";

function Videos() {
  return (
    <Box className={styles.video_page}>
      <Flex className={styles.video_head}>
        <Box className={styles.video_hood}>
          Feel the excellent wet braking with Driveways!
        </Box>
        <Button text={"Watch All Videos"} className={"slider_button big"} />
      </Flex>
      <Box className={styles.video_section}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/czED2FSc508"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
    </Box>
  );
}

export default Videos;
