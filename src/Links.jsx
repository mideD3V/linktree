import React from 'react'
import LinkStyles from './Links.css'

export const Links = () => {
  return (
    <div id="link_btn">
      <a href="https://training.zuri.team/" id="btn_zuri">
        Zuri Team
      </a>
      <a href="http://books.zuri.team" id="books">
        Read books on Design and Coding
      </a>
      <a href="https://books.zuri.team" id="book_python">
        Become a genius in Python! <br />
        <em> (Use this link to order for the best python book at a discount)</em>
      </a>
      <a href="https://background.zuri.team" id="pitch">
        Run Background Check on a coder here
      </a>
      <a href="https://books.zuri.team/design-rules" id="book_design">
        Get <em>FREE</em> design books by Zuri
      </a>

      <hr />
    </div>
  );
}
