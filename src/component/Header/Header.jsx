import React from "react";
import styles from "./styles.module.css";
import { Flex, Spacer, Box, Image, color } from "@chakra-ui/react";
import logo from "../../images/logo.svg";
import { Link } from "react-scroll";
import HamburgerMenu from "../Menu/HamburgerMenu";
import "./active.css"

function Header() {

  return (
    <div className={styles.header}>
      <Flex>
        <Box className={styles.header_logo}>
          <Link
            to="show-all"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Image src={logo} alt="product" />
          </Link>
        </Box>
        <Spacer />
        <Box className={styles.header_right}>
          <Link
            to="show-all"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Box p="4">Show All Tyres</Box>
          </Link>
          <Link
            to="find-dealer"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Box p="4">Find a Dealer</Box>
          </Link>
          <Link
            to="guides-videos"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            <Box p="4">Guides & Videos</Box>
          </Link>
          <Link
            to="/go-with"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Box p="4">Go with</Box>
          </Link>
          <Link
            to="/service-help"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Box p="4">Service & Help</Box>
          </Link>
        </Box>
        <Box className={styles.header_menu}>
          <HamburgerMenu />
        </Box>
      </Flex>
    </div>
  );
}

export default Header;
