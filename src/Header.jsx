import React from 'react'
import DP from './asset/profile__img.png'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineSlack} from 'react-icons/ai'
import HeaderStyles from './Header.css'

export const Header = () => {
    return (
      <>
        <div className="profile_ctn">
          <img src={DP} alt="profile img" id="profile_img" />
          <h1 className="user_name">Annie Black</h1>
          <a href="www.twitter.com" id="twitter">
            <BsTwitter />{" "}
          </a>
          <a href="https://www.slack.com" id="slack">
            <AiOutlineSlack />{" "}
          </a>
        </div>
      </>
    );
}
