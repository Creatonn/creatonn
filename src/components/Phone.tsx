import React, { FC, ReactHTML, useState } from "react";
import Close from "../../public/assets/icons/close.jpg";
import "../css/phone.css";

export const Phone: FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const close = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div style={styles.bottomLeft}>
        {isOpen ? (
          <>
            <a onClick={close}>
              <img className="close" src={Close} />
            </a>

            <div className="card">
              <div className="btn1"></div>
              <div className="btn2"></div>
              <div className="btn3"></div>
              <div className="btn4"></div>
              <div className="card-int">
                <img
                  className="demo"
                  src="https://e1.pxfuel.com/desktop-wallpaper/179/634/desktop-wallpaper-mobile-phone-screen-saver-iphone-7-mobile-screen.jpg"
                />
              </div>
              <div className="top">
                <div className="camera">
                  <div className="int"></div>
                </div>
                <div className="speaker"></div>
              </div>
            </div>
          </>
        ) : (
          <>
          <div className="x">

          </div>
            <button className="watchBtn" onClick={close}>
              CREATONN
            </button>
          </>
        )}
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
    padding: "40px",
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
