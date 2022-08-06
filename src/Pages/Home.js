 import React, { useEffect } from 'react'
import ImgProfile from '../Components/ImgProfile' 
import DetailsMe from '../Components/DetailsMe'
import BtnAbout from '../Components/BtnAbout'
import NavBar from '../Components/NavBar'
import { Detailspopup } from './Detailspopup'
import { useState } from 'react'

 export default function Home() {
       
   return (
    < div id="home">
         <ImgProfile></ImgProfile>
         <DetailsMe/>
         <BtnAbout></BtnAbout>
         <NavBar></NavBar> 
     <div></div>
     </div>
   )
 }

