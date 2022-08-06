import React from 'react'
import ImgProfile from '../Components/ImgProfile'
import NavBar from '../Components/NavBar'
import { Cards } from '../Components/Cards'
import { Network } from '../Components/Network'

export const About = () => {

  return (
    <div>
    <h1>ABOUT ME</h1>
    <span className='span-bckg'>ABOUT ME</span>
    <ImgProfile></ImgProfile>
    <Cards></Cards>
    <Network></Network>
    <NavBar></NavBar>
    </div>
  )
}
