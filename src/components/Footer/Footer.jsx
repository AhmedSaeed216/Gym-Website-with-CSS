import React from 'react'
import "./Footer.css"
import Github from "../../assets/github.png"
import Insta from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"


const Foter = () => {
  return (
    <div className="Footer-container">
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
      <hr />
      <div className="footer">
        <div className="Social-links">
          <img src={Github} alt="" />
          <img src={Insta} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Foter