import React from 'react'
import ZuriLogo from '../asset/Vector.png'
import HNG from '../asset/Footer text.png'
import I4G from '../asset/I4G.png'
import FooterStyles from './Footer.css'

export const Footer = () => {
  return (
      <div id="footer">
          
      <a href="https://training.zuri.team/">
        <img src={ZuriLogo} alt="zuri internship" />
      </a>
      <a href="https://training.zuri.team/">
        <img src={HNG} alt="hng" />
      </a>
      <a href="https://training.zuri.team/">
        <img src={I4G} alt="i4g" />
      </a>
    </div>
  );
}

export default Footer