import styled from "styled-components"

export const CardSlide = styled.div`
  width: auto;
  min-width: 180px;
  border: 1px solid #b6b6b6;
  display: flex;
  flex-direction: column;
  padding: .5rem;

  h3 {
    font-size: 1rem;
    height: 50px;
  }
  p {
    font-weight:500;
    display: flex;
    justify-content: space-between;

    span {
      font-size: .8rem;
      font-weight: 400;
      text-decoration: line-through;
    }
  }
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    
  }
`