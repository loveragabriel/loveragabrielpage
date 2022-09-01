import React, { useState } from 'react'

export const Detailspopup = () => {
   const cerrar=(e)=>{
     const Xbutton = document.getElementById('details-pop');
    Xbutton.style.display = 'none'
   }
   let textDetail = `Hi! these are some of the technologies that I have been learning`

  return (
    <div id="details-pop" >
    <i className="fa-solid fa-xmark"  onClick={cerrar}></i>
    <p className='pop'>{textDetail}</p>        <div className='tech-tools'>
        <i class="fa-brands fa-html5"></i>  
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-js"></i>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-git"></i>
        </div>
       
    </div>
  )
}
