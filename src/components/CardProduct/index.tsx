import { CardSlide } from "./styled"

interface CardProductProps {
  name: string,
  price: number,
  old_price: number,
  image: string
}

const CardProduct = ({name, price, old_price, image}: CardProductProps) => {
  return(
    <CardSlide>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>R$ {price} <span>R$ {old_price}</span></p>
    </CardSlide>
  )
}

export default CardProduct