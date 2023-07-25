import { Header, Logo, Nav } from "./styled"
import { useState, useEffect } from "react"
import { MdPets, MdOutlineHome, MdMiscellaneousServices, MdOutlinePeopleAlt} from "react-icons/md";
import { BsBagHeartFill, BsEnvelopeOpenHeart } from "react-icons/bs";
   
const NavBar = () => { 
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const color = isMobile ? "#2b2b2b" : "#a8dedb";
  console.log(isMobile, windowWidth)
  useEffect(() => {    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if(windowWidth && windowWidth < 1000) setIsMobile(true); 
    else setIsMobile(false)
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);
  return(
    <Header>
      <Logo>
        <a href="#">
          <h1><MdPets style={{fill: 'url(#linear-gradient)'}}/>puppies.com</h1>
        </a>
        
        <svg style={{ height: 0, width: 0, position: 'absolute' }}>
        <defs>
          <linearGradient id="linear-gradient" gradientTransform="rotate(45)">
            <stop offset="50%" stopColor="#efa6c2" />
            <stop offset="100%" stopColor="#96cdbd" />
          </linearGradient>
        </defs>
        </svg>        
      </Logo>
      <Nav>
        <ul className={isMobile ? "menu-mobile": ""}>
          <li><a href="#home"><MdOutlineHome style={{fill: color}}/> <span>Home</span></a></li>
          <li><a href="#services"><MdMiscellaneousServices style={{fill: color}}/> <span>Serviços</span></a></li>
          <li><a href="#about"><MdOutlinePeopleAlt style={{fill: color}}/> <span>Sobre nós</span></a></li>
          <li><a href="#products"><BsBagHeartFill style={{fill: color}}/> <span>Promoções</span></a></li>
          <li><a href="#contact"><BsEnvelopeOpenHeart style={{fill: color}}/> <span>Contato</span></a></li>
        </ul>
      </Nav>
    </Header>
  )
};

export default NavBar