import React from 'react'
import { useState } from 'react';
import { Detailspopup } from '../Pages/Detailspopup';


function BtnAbout() {
  const [isHide,setIsHide] = useState(true);
     const showMe=(e)=>{
      if(isHide){
       setIsHide(false)
     } else setIsHide(true )
    }

  return (
    <div>
    { !isHide ? <Detailspopup></Detailspopup> : null}
    <div id="about-btn" onClick={showMe}>
        MORE ABOUT ME 
        <div className='icon-btn'>
        <i className="fa-solid fa-arrow-right"></i>
        </div>
    </div>
    </div>
  )
}

export default BtnAbout