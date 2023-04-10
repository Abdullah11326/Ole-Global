import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar/NavBar'
import HeroSection from './Components/HeroSection/HeroSection'
import Services from './Components/Services/Service'
import Bussiness from './Components/Bussiness/Bussiness'
import Communication from './Components/Communication/Communication'
import Contact from './Components/Contact Now/Contact'
import SingleImage from './Components/SingleImage/SingleImage'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <HeroSection />
      <Services />
      <Bussiness />
      <Communication />
      <Contact />
      <SingleImage />
      <Footer />
    </>
  )
}

export default App
