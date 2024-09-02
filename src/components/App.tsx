import React, { FC } from "react";
import { css } from "@emotion/css";
import { publicPath } from "../modules/utils";
import { SocialButton } from "./SocialButton";
import { TCanvas } from "./three/TCanvas";
import { NavBar } from "./NavBar";
import { InfoStrap } from "./InfoStrap";
import { Phone } from "./Phone";

export const App: FC = () => {
  return (
    <div className={styles.container}>
      <InfoStrap />
      <TCanvas />
      <NavBar />
	  <Phone />
      <SocialButton />
    </div>
  );
};

const styles = {
  container: css`
    width: 100vw;
    height: 100vh;
  `,
};
