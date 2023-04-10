import Navbar from '../Navbar/NavBar'
import Slide from 'react-reveal/Slide'
import { useState } from 'react'
import './HeroSection.css'
function HeroSection() {

  return (
    <>
      <div className="heroImageBG">
        <div className="herosectionMaintwo">
          <Navbar />
          <div className="heroMain">
            <div className="heroText">
              <p className="heroHeading">INVOICE CREATION SIMPLIFIED</p>
              <p className="heroHeader">
                {' '}
                Olé empowers Spanish speaking business owners to be as confident
                with the administrative side of their business as they are
                working in the field. With a bilingual interface, invoice
                creation and tracking has never been clearer across language
                barriers.
              </p>
              <div className="herobuttonsImages">
                <img
                  src="https://www.oleglobal.app/wp-content/uploads/2022/05/app-store.png"
                  alt=""
                />
                <img
                  src="	https://www.oleglobal.app/wp-content/uploads/2022/05/playstore.png"
                  alt=""
                />
              </div>
            </div>
            <Slide right duration={500}>
              <div className="heroImage">
                <img className='bubble1'  src="./bubble4.png" alt="" />
              <img  className='bubble2' src="./bubble3.png" alt="" />
              <img className='bubble3' src="./bubble2.png" alt="" />
              <img className='bubble4' src="./bubble1.png" alt="" />
              <img className='bubble5' src="./bubble2.png" alt="" />
              <img className='bubble6' src="./bubble2.png" alt="" />
            
                <img
                  className="heroimage"
                  src="/mobile.png"
                  alt=""
                />
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </>
  )
}
export default HeroSection
