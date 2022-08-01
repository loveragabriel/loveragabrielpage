import React, { useState } from 'react'

export const Detailspopup = () => {
  const [closet, setCloset] = useState('none')
  const close=(e)=>{
    e.currentTarget.style.display = "none";
  }

  return (
    <div id="details-pop" onClick={close}>
    <i className="fa-solid fa-xmark" ></i>
        Gabriel
    </div>
  )
}
