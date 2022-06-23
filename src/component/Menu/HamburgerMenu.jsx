import React from "react";
import { useState } from "react";
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import "./styles.css";
import { Link } from "react-router-dom";
import { Image, Text } from "@chakra-ui/react";
import logo from "../../images/logo.svg";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="navBar">
        <button onClick={handleToggle}>
          {isOpen ? (
            <VscChromeClose
              style={{ color: "#000", width: "40px", height: "40px" }}
            />
          ) : (
            <VscMenu style={{ color: "#000", width: "40px", height: "40px" }} />
          )}
        </button>
        <ul className={`menuNav ${isOpen ? " showMenu" : ""}`}>
          <li>
            <Link to="/">
              <Image src={logo} alt="product" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Text>Show All Tyres</Text>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Text>Find a Dealer</Text>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Text>Guides & Videos</Text>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Text>Go with</Text>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Text>Service & Help</Text>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
