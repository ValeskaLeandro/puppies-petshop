import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import { settings } from "../../utils/settings"
import CardProduct from '../CardProduct';
import { Content } from './styled';
import { Container } from '../../styles/styled-global';

export interface Product {
  id: number,
  name: string,
  price: number,
  old_price: number,
  image: string
}

interface ProductsProps {
  products: Product[];
}
const Products = ({products}: ProductsProps) => {
  return(
    <Container id="products">
      <Content>
      <h2>Nossas <span>promoções</span></h2>
      <Swiper {...settings}>
          {products.length > 0 && products.map((product) => (
          <SwiperSlide key={product.id}>
            <CardProduct 
            image={product.image} 
            name={product.name} 
            price={product.price} 
            old_price={product.old_price} />
          </SwiperSlide>
          ))}
    </Swiper>
      </Content>
    </Container>
  )
}

export default Products;