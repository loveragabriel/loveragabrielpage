import React, { useState } from 'react'
import NavBar from '../Components/NavBar';
import emailjs from '@emailjs/browser';


export const Formpage = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1it5j0o', 'template_6y201bt', e.target, 'rMXRUT4nOtufEUTg2')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
        alert("Your message was sent correctly, I will respond to you soon 😎")
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <div className='form-format'>
        <h1>GET IN TOUCH</h1>
        <span className='span-bckg-T'>GET IN TOUCH</span>
        <h3>
        I want to grow with companies, working on projects related to the front-end, but open to exploring more areas of development.        </h3>
        <form className='class-form' onSubmit={sendEmail}>
          <label>Name:
            <input type="text" name="user_name" placeholder='Gabriel Lovera' required />
          </label>
          <label>Email:
            <input type="email" name="user_email" placeholder='email@correo.com' required />
          </label>
          <label>Message:
            <input type="textarea" name="message" placeholder='write your message' required />
          </label>
          <input id='submit' type="submit" value="Submit" />
        </form>
      </div>
      <NavBar></NavBar>
    </>
  )
}
