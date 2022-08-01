 import React from 'react'
import ImgProfile from '../Components/ImgProfile' 
import DetailsMe from '../Components/DetailsMe'
import BtnAbout from '../Components/BtnAbout'
import NavBar from '../Components/NavBar'
import { Detailspopup } from './Detailspopup'
import { useState } from 'react'

 export default function Home() {
    const [isHide,setIsHide] = useState(true);
     const showMe=(e)=>{
       setIsHide=(!isHide); 
    }
   
    console.log(showMe)
  
   return (
    < div id="home">
    {!isHide ? <Detailspopup> onClick={showMe}</Detailspopup> : null}
         <ImgProfile></ImgProfile>
         <DetailsMe/>
         <BtnAbout></BtnAbout>
         <NavBar></NavBar> 
     <div></div>

     </div>
   )
 }

