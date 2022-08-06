import React, { useState } from 'react'

export const Detailspopup = () => {
   const cerrar=(e)=>{
     const Xbutton = document.getElementById('details-pop');
    Xbutton.style.display = 'none'
   }
   let textDetail = 'Working on this'

  return (
    <div id="details-pop" >
    <i className="fa-solid fa-xmark"  onClick={cerrar}></i>
        {textDetail}
    </div>
  )
}
