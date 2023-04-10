import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavBar.css'
import { Link, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react'
import Slide from 'react-reveal/Slide'
function Navbar() {
  const [bgrList, setbgrList] = useState(false)

  const handleClick = () => {
    setbgrList(!bgrList)
  }

  return (
    <>
      <div className="navMain">
        {/* To disappear logo when menu is clicked on smaller screens */}
         <Slide left duration={500}>
        <div className="logo">
          <img
            className="logoImage"
            src="https://www.oleglobal.app/wp-content/uploads/2022/05/logo.png"
            alt=""
          />
        </div>
        </Slide>

        <div className="linksmain">
        <Slide right duration={500}>  
          <ul className="linksList">
          
          <li className="NavLinks">
              <Link className="NavAnchors" 
               activeClass="active"
               to="serviceMain"
               spy={true}
               smooth={true}
               duration={500}
              >
                What We Offer
              </Link>
            </li>
        
            
            <li className="NavLinks">
              <Link className="NavAnchors"
               activeClass="active"
               to="bussinessMain"
               spy={true}
               smooth={true}
               duration={500}
              
              >
                Our Specialty
              </Link>
            </li>
            <li className="NavLinks">
              <Link className="NavAnchors"
              activeClass="active"
              to="contactMain"
              spy={true}
              smooth={true}
              duration={500}
              >
                Contact Us
              </Link>
            </li>
            <li className="NavLinks">
              <Link className="navButton" >
                Download Olé
              </Link>
            </li>
          </ul>
          </Slide>
        </div>
        <div>
          <div className="burger" onClick={handleClick}>
            {bgrList ? (
              <FontAwesomeIcon className="iconWidth" icon={faXmark} />
            ) : (
              <FontAwesomeIcon className="iconWidth"  icon={faBars} />
            )}
          </div>
          {/* <button onClick={setState(true)}></button> */}
          <div className="burgerlist">
            {bgrList && (
              <div className="adjDisplay">
                <p className="bgrLinks">
              <Link className="NavAnchors" 
               activeClass="active"
               to="serviceMain"
               spy={true}
               onClick={handleClick}
               smooth={true}
               duration={500}
              >
                What We Offer
              </Link>
                </p>
                <p className="bgrLinks">
              <Link className="NavAnchors"
               activeClass="active"
               to="bussinessMain"
               onClick={handleClick}
               spy={true}
               smooth={true}
               duration={500}
              
              >
                Our Specialty
              </Link>
                </p>
                <p className="bgrLinks">
              <Link className="NavAnchors"
              activeClass="active"
              to="contactMain"
              onClick={handleClick}
              spy={true}
              smooth={true}
              duration={500}
              >
                Contact Us
              </Link>
                </p>
                <p className="bgrLinks1">
                  <Link className="navButton"
                  onClick={handleClick}

                  >
                    Download Olé
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
