import React from 'react'
import "./Nav.css"
import {AiOutlineHome, AiFillInfoCircle} from "react-icons/ai"
import { BsInfoCircle, BsBriefcase } from "react-icons/bs";
import { MdComputer} from "react-icons/md";
import { IoIosContact} from "react-icons/io";


const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><BsInfoCircle/></a>
      <a href="#experience"><BsBriefcase/></a>
      <a href="#services"><MdComputer/></a>
      <a href="#contact"><IoIosContact/></a>
    </nav>
  )
}

export default Nav