import React from 'react'
import "./program.css"
// import "../../data/programsData.js"
import { programsData } from '../../data/programsData.jsx'
import RightArrow from "../../assets/rightArrow.png"
const Program = () => {
    return (
        <div className="Programs" id="Programs">
            <div className="Program-Header">
                <span className='stroke-text'>Explore our </span>
                <span>Programs </span>
                <span className='stroke-text'>to Shape you</span>
            </div>


            {/* <div className="programCategeories">
                {
                    programsData.map((element) => (
                        <div className="categeories">

                            {element.image}
                            <span>
                                {element.heading},
                            </span>
                            <span>
                                {element.details}
                            </span>
                        </div>
                    ))
                }
            </div> */}

            <div className="programCatogerios">
            {programsData.map((program)=>(
                <div className='category'>
                    {program.image}
                    <span>
                        {program.heading}
                    </span>
                    <span>{program.details}</span>

                    <div className="joinNow">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Program