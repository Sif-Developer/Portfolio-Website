import React, { useState } from 'react'
import "./Nav.css"
import {AiOutlineHome, AiFillInfoCircle} from "react-icons/ai"
import { BsInfoCircle, BsBriefcase } from "react-icons/bs";
import { MdComputer} from "react-icons/md";
import { IoIosContact} from "react-icons/io";


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""} ><BsInfoCircle/></a>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""} ><BsBriefcase/></a>
      <a href="#services" onClick={()=> setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><MdComputer/></a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><IoIosContact/></a>
    </nav>
  )
}

export default Nav