import './Services.css'
import { Slide } from 'react-reveal'
import ServicesTop from './ServicesTop'
function Services() {
  return (
    <>
    <div id='serviceMain'>
    <ServicesTop/>
      <div  className="servicesMain">
        <Slide left duration={500}>
          <div className="same">
            <img
              src="	https://www.oleglobal.app/wp-content/uploads/2022/05/invoiuce.png"
              alt=""
            />
            <p className="para1">Create Invoices In An Instant</p>
            <p className="para2">
              Quickly create invoices from our extensive list of tasks, add a
              pay rate Labor and time and send to clients in minutes
            </p>
          </div>
        </Slide>
        <Slide left duration={500}>
          <div className="same">
            <img
              src="	https://www.oleglobal.app/wp-content/uploads/2022/05/people.png"
              alt=""
            />
            <p className="para1">Add New Clients, Workers</p>
            <p className="para2">
              A designated feature to log time spent and tasks per client and/or
              job site location
            </p>
          </div>
        </Slide>

        <Slide right duration={500}>
          <div className="same">
            <img
              src="	https://www.oleglobal.app/wp-content/uploads/2022/05/pen.png"
              alt=""
            />
            <p className="para1">Reuse Or Edit Old Invoices</p>
            <p className="para2">
              Create and/or select from a customized favorites list of
              frequently used tasks to make invoicing quicker
            </p>
          </div>
        </Slide>

        <Slide right duration={500}>
          <div className="same">
            <img
              src="	https://www.oleglobal.app/wp-content/uploads/2022/05/pdf.png"
              alt=""
            />
            <p className="para1">Send Invoices In PDF</p>
            <p className="para2">
              Effortlessly send invoices to clients in PDF format through email
              or text
            </p>
          </div>
        </Slide>
      </div>

    </div>
    
    </>
  )
}
export default Services
