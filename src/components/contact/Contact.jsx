import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { GoLocation } from "react-icons/go";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_an1k95e', 'template_eabiuoo', form.current, {
        publicKey: 'zfHPThNUNDRMgdKwT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='total'>
      <div className='contactHome'>
        <h1 className='con'>Contact Us</h1>
        <div className='flexrow'>
          <div className='flexcol'>
            {isSubmitted ? (
              <div className="thank-you-message">
                <h2>Thank you for contacting us!</h2>
                <p>We'll get back to you soon.</p>
                <button onClick={() => setIsSubmitted(false)}>Send another message</button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' placeholder='Last Name' required/>
                <input type='email' name='user_email' placeholder='Email' required/>
                <textarea rows="4" cols="60" name='message' placeholder='Enter Text' required></textarea>
                <button type='submit'>send</button>
              </form>
            )}
          </div>
        </div>
      </div>
      {isSubmitted ? " ": <div className='sidecontainer'>
        <h3>Our Contact Information</h3>
        <p>Fill the form or contact us via other channels listed below</p>
        <div className="icons">
          <span>
            <FaPhoneAlt />
            <p>+91 9652553176</p>
          </span>
          <span>
            <FaEnvelope />
            <p>Support@Dealsy.com</p>
          </span>
          <span>
            <GoLocation />
            <p>Hyderabad, India</p>
          </span>
          <span>
            <FaTwitter />
            <p>@SaiTejaVellan</p>
          </span>
        </div>
      </div>}
    </div>
  )
}

export default Contact;