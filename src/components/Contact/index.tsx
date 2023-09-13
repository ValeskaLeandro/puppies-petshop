import { Container, Content } from "./styled"

const Contact = () => {
  return(
    <Container id="contact">
      <Content>
        <div className="img">
          <img src="./img/labrador.png" alt="" />
        </div>
        <div className="contact">
          <h2>Entre em contato.</h2>
          <p>Estamos disponíveis e prontos para atendê-lo.</p>
          <div className="input-group">
            <input type="text" name="name" placeholder=" "/>
            <label htmlFor="name">Nome</label>
          </div>
          <div className="input-group">
            <input type="text" name="email" placeholder=" "/>
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="input-group">
            <textarea name="message"  rows={5} placeholder=" "></textarea>
            <label htmlFor="message">Mensagem</label>
          </div>
          <div className="button">
            <button>Enviar</button>
          </div>
        </div>
      </Content>
    </Container>
  )
}

export default Contact