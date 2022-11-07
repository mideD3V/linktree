import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Maintsyles from './Main.css'
import Slack from '../asset/slack.png'
import GitHub from '../asset/github_Icon.png'
import Contact from '../contact/Contact'
import {Header} from '../header/Header'
import Footer from '../footer/Footer'


export const Main = () => {

  return (
    <>
      <Header />

      <div id="link_btn">
        <a href="https://twitter.com/mideD3v" id="twitter_link">
          Twitter Link
        </a>

        <a href="https://training.zuri.team/" id="btn_zuri">
          Zuri Team
        </a>

        <a href="http://books.zuri.team" id="books">
          Zuri Books
        </a>

        <a href="https://books.zuri.team" id="book_python">
          Python Books
        </a>

        <a href="https://background.zuri.team" id="pitch">
          Background Check for Coders
        </a>

        <a href="https://books.zuri.team/design-rules" id="book_design">
        Design Books
        </a>

        <Link to="/contact" id='contact'>Contact Me </Link>

      </div>
      <div className="socials">
        <a href="https://slack.com/mided3v/" id="slack">
          {" "}
          <img src={Slack} alt="slack_icon" />
        </a>

        <a href="https://github.com/mided3v/" id="github">
          <img src={GitHub} alt="github_icon" />
        </a>
      </div>
      <hr />
      <Footer />
    </>
  );
}
export default Main