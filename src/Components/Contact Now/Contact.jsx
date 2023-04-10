import './Contact.css'
import Slide from 'react-reveal/Slide'
function Contact() {
  return (
    <>
      <div id='contactMain' className="contactMain">
        <Slide left duration={500}>
          <div className="contactParas">
            <p className="cnpara1">Get in Touch</p>
            <p className="cnpara2">Contact Now</p>
            <p className="cnpara3">
              We would like to hear how the app is working for you and what we
              can do to improve your experience. Please contact us if you have
              any questions, special requests, or recommendations!
            </p>
            <p className="cnpara4">
              <span className="emailtext">Email Us</span>
            </p>
          </div>

        <div className="contactImage">
          <img
            className="contactimage"
            src="	https://www.oleglobal.app/wp-content/uploads/2023/01/Group-16-1.png"
            alt=""
            />
        </div>
            </Slide>
      </div>
    </>
  )
}
export default Contact
