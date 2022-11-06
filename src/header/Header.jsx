import React from "react";
import DP from "../asset/profile__img.png";
import Share from '../asset/_Avatar share button.png'
import Share2 from '../asset/_Avatar share button (1).png'

import HeaderStyles from "./Header.css";
import Slack from "../asset/slack.png";

export const Header = () => {
  return (
    <>
      <div className="profile_ctn">
        <a href="/">
          <img src={DP} alt="profile img" id="profile_img" />
        </a>
        <a href="/">
          <img src={Share} alt="share_btn" id="share_btn"/>
          <img src={Share2} alt="share_btn" id="share_btn2"/>
        </a>
        <h1 className="user_name">Annie Black</h1>
      </div>
    </>
  );
};
