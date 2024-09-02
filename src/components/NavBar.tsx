import React, { FC, ReactHTML, useState } from "react";
import "../css/navbar.css";
import Logo from "../../public/assets/images/logo.png";

export const NavBar: FC = () => {
  return (
    <>
      <div style={styles.topLeft}>
        <div className="wrapper">
          <img className="logo" src={Logo} />
        </div>
      </div>
      <div style={styles.topRight}>
        <div className="wrapper">
          <button className="btn">
            <span className="text">Open App</span>
          </button>
        </div>
      </div>
    </>
  );
};

// ========================================================
// styles

type Styles = { [key in string]: React.CSSProperties };

const temp: Styles = {
  container: {
    position: "absolute",
  },
};

const styles: Styles = {
  topLeft: {
    ...temp.container,
    top: "1px",
    left: "10px",
  },
  topRight: {
    ...temp.container,
    top: "0px",
    right: "10px",
  },
  bottomLeft: {
    ...temp.container,
    bottom: "10px",
    left: "10px",
  },
  bottomRight: {
    ...temp.container,
    bottom: "10px",
    right: "10px",
  },
  img: {
    objectFit: "cover",
    opacity: "0.5",
    transform: "rotate(0deg)",
    transition: "all 0.3s",
  },
};
