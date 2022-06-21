import React from "react";
import styles from "./styles.module.css";
import { Flex, Spacer, Box, Image } from "@chakra-ui/react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <Flex>
        <Box p="4" display="flex" alignItems="center">
          <Link to="/">
            <Image src={logo} alt="product" />
          </Link>
        </Box>
        <Spacer />
        <Box className={styles.header_right}>
          <Link to="/show-all">
            <Box p="4">Show All Tyres</Box>
          </Link>
          <Link to="/find-dealer">
            <Box p="4">Find a Dealer</Box>
          </Link>
          <Link to="/guides-videos">
            <Box p="4">Guides & Videos</Box>
          </Link>
          <Link to="/go-with">
            <Box p="4">Go with</Box>
          </Link>
          <Link to="/service-help">
            <Box p="4">Service & Help</Box>
          </Link>
        </Box>
      </Flex>
    </div>
  );
}

export default Header;
