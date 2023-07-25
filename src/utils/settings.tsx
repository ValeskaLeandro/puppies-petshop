import { Navigation } from 'swiper/modules'


export const settings = {
  modules: [Navigation],
  loop: true,
  navigation: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    500:{
      slidesPerView: 2
    },
    750: {
      slidesPerView: 3
    },
    1000:{
      slidesPerView:4
    },
    1275:{
      slidesPerView:5
    },
    1500:{
      slidesPerView:6
    }
  }
}