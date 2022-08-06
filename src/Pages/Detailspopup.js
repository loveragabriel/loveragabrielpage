import React, { useState } from 'react'

export const Detailspopup = () => {
   const cerrar=(e)=>{
     const Xbutton = document.getElementById('details-pop');
    Xbutton.style.display = 'none'
   }

  return (
    <div id="details-pop" >
    <i className="fa-solid fa-xmark"  onClick={cerrar}></i>
        In construction
    </div>
  )
}
