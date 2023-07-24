import { CardContainer } from "./styled"

interface CardProps {
  icon: string,
  title: string,
  description: string
}
const Card = ({icon, title, description}: CardProps) => {
  return(
    <CardContainer>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </CardContainer>
  )
}

export default Card