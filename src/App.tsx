
import './App.css'
import MainBanner from './components/MainBanner'
import NavBar from './components/NavBar'
import OurServices from './components/OurServices'
import { services } from './data/services'

function App() {
  return (
    <>
      <NavBar />
      <MainBanner />
      <OurServices services={services}/>
    </>
  )
}

export default App
