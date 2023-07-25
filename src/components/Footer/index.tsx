import { FooterContainer } from "./styled"
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiFillPhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";



const Footer = () => {
  return(
    <FooterContainer>
      <div className="location">
        <p>Copyright 2023 &copy; Todos os direitos reservados à <span>Valeska Leandro</span></p>
        <p><span>CNPJ:</span> 12.123.456/1234-56</p>
        <p><FaLocationDot /> Rua das flores 812, Encanto, São Paulo - SP, 00011-222</p>
        <p><AiFillPhone /> +55 85 99999-2222</p>
      </div>
      <div className="social">
        <a href="https://github.com/ValeskaLeandro" target="_blank"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/valeskaleandro/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://instagram.com/ValeskaLeandro" target="_blank"><AiOutlineInstagram/></a>
      </div>
    </FooterContainer>
  )
}

export default Footer