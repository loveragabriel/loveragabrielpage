import React from 'react'
import { useState } from 'react';
import { Detailspopup } from '../Pages/Detailspopup';


function BtnAbout() {
  const [showPopUp,setShowPopUp] = useState(true);
  return (
    <div>
    <div id="about-btn" onClick={()=>{setShowPopUp(!showPopUp)}}>
        MORE ABOUT ME 
        { !showPopUp && <Detailspopup/> }
        <div className='icon-btn'>
        <i className="fa-solid fa-arrow-right"></i>
        </div>
        </div>
    </div>
  )
}

export default BtnAbout