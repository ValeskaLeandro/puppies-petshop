import Card from "../Card";
import { Container, Content } from "./styled"

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface OurServicesProps {
  services: Service[];
}
const OurServices = ({services}: OurServicesProps) => {
  return(
    <Container>
      <Content id="services">
        <h2>Nossos serviços</h2>
        <div className="grid">
          {services && services.map((service) => (
            <Card key={service.id} icon={service.icon} 
            title={service.title}
            description={service.description}/>
          ))}
        </div>
      </Content>
    </Container>
  )
}

export default OurServices;