import React from 'react'
import ContactStyles from './Contact.css'
export const Contact = () => {
    let fname; 
    let lname;
    const name = fname + lname;
  return (
    <div className='contact'>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind</p>

      <form action="GET">
        <div className="name">
          <div className="fname">
            <label htmlFor="fname">First name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter your first name"
            />
          </div>

          <div className="lname">
            <label htmlFor="lname">Last name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="yourname@email.com"
          />
        </div>

        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>

        <div className="checkbox">
          <input type="checkbox" name="terms" id="terms" />

          <label
            htmlFor="terms"
            id='condition'>
            You agree to providing your data to <code>{ name }</code> who may contact you.
          </label>
        </div>

        <button type="submit">Send message</button>
      </form>
    </div>
  );
}
export default Contact
