import React, { useState } from 'react'
import './Header.css'
import Logo from "../../assets/logo.png"
import bars from "../../assets/bars.png"
import { Link } from "react-scroll"


const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMEnuOpened] = useState(false);


  return (
    <div className='Header'>

      <img src={Logo} alt="" className='logo' />
      {(menuOpened === false && mobile === true) ? (
        <div
          onClick={() => setMEnuOpened(true)}
        ><img src={bars} alt="" style={{ width: "1.5rem", height: "1.4rem", padding: "1rem 0.1rem" }} /></div>
      ) :

        <ul className='headerMenu'>
          <li>
            <Link
            onClick={()=>setMEnuOpened(false)}
            to='Hero'    //it search for the div whose id is Hero but here it is also work for classname
            smooth={true}
            >
            Home
            </Link>
            </li>
          <li >
            <Link
            onClick={()=>setMEnuOpened(false)}
            to='Programs'
            smooth={true}
            spy={true}
            >
            Programs
            
            </Link>
            </li>
          
          <li>
            
            <Link
            onClick={()=>{setMEnuOpened(false)}}
            to='Reasons'
            smooth={true}
            spy={true}
            >
              Why Us
            </Link>
            </li>


          <li >
            <Link
            onClick={() => setMEnuOpened(false)}
            to='plan'
            smooth={true}
            spy={true}
            >
            Plans
            
            </Link>
            </li>
          
          <li >
            <Link
              onClick={() => setMEnuOpened(false)}
              to='Testimonial' 
              smooth={true}
              spy={true}
            >
              Testimonial
            </Link>
            </li>
        </ul>
      }
    </div>
  )
}

export default Header