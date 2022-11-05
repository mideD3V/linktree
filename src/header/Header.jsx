import React from "react";
import DP from "../asset/profile__img.png";

import HeaderStyles from "./Header.css";
import Slack from "../asset/slack.png";

export const Header = () => {
  return (
    <>
      <div className="profile_ctn">
        <a href="/">
          <img src={DP} alt="profile img" id="profile_img" />
        </a>
        <h1 className="user_name">Annie Black</h1>
      </div>
    </>
  );
};