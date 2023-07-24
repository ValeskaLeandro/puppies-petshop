import { Header, Logo, Nav } from "./styled"
import { useState, useEffect } from "react"
import { MdPets, MdOutlineHome, MdMiscellaneousServices, MdOutlinePeopleAlt} from "react-icons/md";
import { BsBagHeartFill, BsEnvelopeOpenHeart } from "react-icons/bs";
   
const NavBar = () => { 
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const color = isMobile ? "#2b2b2b" : "#9dcc96";
  
  useEffect(() => {    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if(windowWidth < 1000) setIsMobile(true); 
    else setIsMobile(false)
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);
  return(
    <Header>
      <Logo>
        <h1><MdPets style={{
          fill: 'url(#linear-gradient)',
        }}/>
        puppies.com</h1>
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
        <ul className={isMobile ? "menu-mobile": "menu"}>
          <li><a href="#"><MdOutlineHome style={{fill: color}}/> <span>Home</span></a></li>
          <li><a href="#"><MdMiscellaneousServices style={{fill: color}}/> <span>Serviços</span></a></li>
          <li><a href="#"><MdOutlinePeopleAlt style={{fill: color}}/> <span>Sobre nós</span></a></li>
          <li><a href="#"><BsBagHeartFill style={{fill: color}}/> <span>Produtos</span></a></li>
          <li><a href="#"><BsEnvelopeOpenHeart style={{fill: color}}/> <span>Contato</span></a></li>
        </ul>
      </Nav>
    </Header>
  )
};

export default NavBar