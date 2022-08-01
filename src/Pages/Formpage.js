import React from 'react'
import NavBar from '../Components/NavBar'

export const Formpage = () => {

  function sendEmail() 
{
    window.location.assign("mailto:loveragabriel20@gmail.com subject={}");
}
  return (
    <div>
    <h1>GET IN TOUCH</h1>
    <span className='span-bckg-T'>GET IN TOUCH</span>
    <h3>
    I want to help companies to make true their projects with my skills. 
    </h3>
    <form className='class-form' >
    <label>Name:
    <input type="text" name="name" placeholder='Gabriel' />
    </label>
    <label>Last Name:
    <input type="text" name="lastName" placeholder='Lovera'/>
    </label>
    <label>Subject:
    <input type="text" name="subject"placeholder='write your message'/>
    </label>
    <label>Message:
    <input type="textarea" name="message" placeholder='write your message'/>
    </label>
    {/* <input type="submit" value="Submit" /> */}
    </form>
    <button id="about-btn" className='icon-btn' onClick={sendEmail}>
        SEND MESSAGE 
        <i className="fa-solid fa-paper-plane"></i>
        </button>
    <NavBar></NavBar>
    </div>
  )
}
