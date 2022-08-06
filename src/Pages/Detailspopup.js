import React, { useState } from 'react'

export const Detailspopup = () => {
   const cerrar=(e)=>{
     const Xbutton = document.getElementById('details-pop');
    Xbutton.style.display = 'none'
   }
   let textDetail = `I have been learing about programming with focuse on front end and with the objective of working on projects that allow me to broad my knowlodge and skills. I am open to explore new areas of software development.`

  return (
    <div id="details-pop" >
    <i className="fa-solid fa-xmark"  onClick={cerrar}></i>
        <p className='pop'>{textDetail}</p>
    </div>
  )
}
