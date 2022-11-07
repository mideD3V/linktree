import React from 'react'
import ContactStyles from './Contact.css'
import Footer from '../footer/Footer'

export const Contact = () => {
    let first_name; 
    let last_name;
  const name = '{name}';
  
  return (
    <div className='contact'>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind</p>

      <form action="GET">
        <div className="name">
          <div className="fname">
            <label htmlFor="fname">First name</label>
            <input required
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>

          <div className="lname">
            <label htmlFor="lname">Last name</label>
            <input
              type="text"
              name="lname"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        
        <div className="email">
          <label htmlFor="email">Email</label>
          <input required
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
            You agree to providing your data to <>{name}</> who may contact you.
          </label>
        </div>

        <button type="submit" id='btn__submit'>Send message</button>
      </form>
<hr />
      <Footer/>
    </div>
  );
}
export default Contact
