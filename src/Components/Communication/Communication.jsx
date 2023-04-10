import './Communication.css'
import Slide from 'react-reveal/Slide'
function Communication() {
  return (
    <>
      <div id='communicationMain' className="communicationMain">
      <Slide right duration={500}>
        <div className="communicationImage">
          <img
            className="commImage"
            src="	https://www.oleglobal.app/wp-content/uploads/2023/01/Group-26.png"
            alt=""
          />
        </div>
        
          <div className="communicationParas">
            <p className="paracomone">RUN YOUR</p>
            <p className="paracomtwo">BUSINESS</p>
            <p className="paraThree">CONFIDENTLY AND PROFESSIONALLY</p>
            <p className="parafour">
              Olé empowers Spanish speaking business owners to be as confident
              with the administrative side of their business as they are working
              in the field. With a bilingual interface, invoice creation and
              tracking has never been clearer across language barriers.
            </p>
          </div>
        </Slide>
      </div>
    </>
  )
}
export default Communication
