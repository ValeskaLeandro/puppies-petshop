import { Container, Content } from "./styled"

const MainBanner = () => {
  return(
    <Container id="home">
      <Content>
        <div className="texts">
          <h2>O bem-estar do seu pet <span>em primeiro lugar!</span></h2>
          <p>Serviços completos e seguros para seu melhor amigo.</p>
        </div>

        <div className="image">
          <img src="/img/dog-and-cat.png" alt="Um pinscher sentado nas costa de um gato cinza." />
        </div>
      </Content>
    </Container>
  )
}

export default MainBanner