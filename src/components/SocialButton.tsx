import React, { FC, ReactHTML, useState } from "react";
import "../css/social.css";
import X from "../../public/assets/icons/x.jpg";
import Tg from "../../public/assets/icons/telegram.png";

export const SocialButton: FC = () => {
  return (
    <div style={styles.bottomRight}>
      <ul className="wrapper">
        <a href="https://x.com/0xCreatonn" target="_blank">
          <li className="icon">
            <span className="tooltip">Telegram</span>
            <img src={X} />
          </li>
        </a>
        <a href="https://t.me/Creatonn_bot" target="_blank">
          <li className="icon">
            <span className="tooltip">X</span>
            <img src={Tg} />
          </li>
        </a>
      </ul>
    </div>
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
    top: "10px",
    left: "10px",
  },
  topRight: {
    ...temp.container,
    top: "15px",
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
