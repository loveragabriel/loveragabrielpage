import React from 'react'

export const Detailspopup = () => {
  const close=(e)=>{
    e.currentTarget.style.visibility = "hidden";
  }

  return (
    <div id="details-pop" onClick={close}>
    <i className="fa-solid fa-xmark" ></i>
        Gabriel
    </div>
  )
}
