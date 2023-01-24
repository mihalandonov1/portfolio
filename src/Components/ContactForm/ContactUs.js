import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vjb7gjn', 'template_cy31lqw', form.current, 'VrEVTE5rrWXwz-eLh')
      .then((result) => {
          console.log(result.text);
          alert("Thank you for your email. I will apply back soon. Have a nice Day.")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Your Name:' required />
      <label>Email</label>
      <input type="email" name="user_email" placeholder='@email' required/>
      <label>Message</label>
      <textarea name="message" placeholder='Type your message here ... ' required/>
      <input className='btn' type="submit" value="Send"/>
    </form>
  );
};

export default ContactUs;