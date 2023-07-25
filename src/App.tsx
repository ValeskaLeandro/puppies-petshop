
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import MainBanner from './components/MainBanner'
import NavBar from './components/NavBar'
import OurServices from './components/OurServices'
import Products from './components/Products'
import { products } from './data/products'
import { services } from './data/services'

function App() {
  return (
    <>
      <NavBar />
      <MainBanner />
      <OurServices services={services}/>
      <About />
      <Products products={products} />
      <Contact/>
    </>
  )
}

export default App
