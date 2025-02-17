import React from 'react'
import "./Reason.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"


const Reason = () => {
  return (
    <div className="Reasons" id="Reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>

        <div className="right-r">
            <span>Some reasons</span>
            <div>
                <span className='stroke-text'>why </span>
                <span>choose us?</span>
            </div>

            <div className='details-r'>

            <div><img src={tick} alt=""/><span>Over 140+ Expert coaches</span></div>
            <div><img src={tick} alt=""/><span>Train Smarter and faster than before</span></div>
            <div><img src={tick} alt=""/><span>1 free program for new member</span></div>
            <div><img src={tick} alt=""/><span>reiable partners</span></div>

            </div>

        <span style={{
            color:"var(--gray)",
            fontWeight:"normal",
        }}>OUR PARTNERS</span>

            <div className="partners">
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
            <img src={nb} alt="" /></div>

        </div>
    </div>
  )
}

export default Reason