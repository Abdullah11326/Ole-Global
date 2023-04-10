import './Bussiness.css'
import { Slide } from 'react-reveal'
function Bussiness() {
  return (
    <>
      <div id='bussinessMain' className="bussinessMain">
          <Slide left duration={500}>
        <div className="innerMain">
            <div className="bussinessPara">
              <p className="paraone">communicate across</p>
              <p className="bussinessheading">BORDERS</p>
              <p className="paratwo">
                Effectively communicate between Spanish and English. Create all
                administrative notes and invoices in Spanish language and let
                Olé transcribe your work into English.
              </p>
            </div>
          

          <div className="bussinessImage">
            <img
              className="bussinessimgae"
              src="	https://www.oleglobal.app/wp-content/uploads/2023/01/Group-22.png"
              alt=""
            />
          </div>
        </div>
        </Slide>
      </div>
    </>
  )
}
export default Bussiness
