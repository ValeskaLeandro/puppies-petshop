import { Container, Content } from "./styled"

const About = () => {
  return(
    <Container id="about">
      <Content>
        <div className="left">
          <img src="/img/img-dog.png" alt="Cachorro da raça basenji." />
        </div>
        <div className="rigth">
          <h2>Sobre <span>nós</span></h2>
          <p>Bem-vindo ao Puppies.com! Aqui, seu pet é tratado com carinho e atenção especial. Oferecemos produtos de qualidade, desde ração até brinquedos divertidos. Nossa equipe está pronta para ajudar na escolha certa. Além disso, contamos com serviços de banho, tosa e cuidados estéticos. Proporcione ao seu amiguinho peludo o melhor, venha nos visitar!</p>
        </div>
        
      </Content>
    </Container>
  )
}

export default About