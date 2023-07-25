import styled from "styled-components"

export const Content = styled.div`
  width: 70%;  
  max-width: 1500px;
  

  h2 {
    text-transform: uppercase;
    margin: 2rem 0;
    font-size: 2rem;

    span {
      border-bottom: 2px solid var(--pink);
    }
  }
  
  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    h2 {
      font-size: 1rem;
    }
  }
`