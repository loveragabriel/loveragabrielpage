import React from 'react'


function BtnAbout() {

  
  const gabriel=()=>{
       alert('Gabriel INFO');
  }
  
  return (
    <div>
    <div id="about-btn" onClick={gabriel}>
        MORE ABOUT ME 
        <div className='icon-btn'>
        <i className="fa-solid fa-arrow-right"></i>
        </div>
    </div>
    </div>
  )
}

export default BtnAbout