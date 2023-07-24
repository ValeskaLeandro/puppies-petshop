import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(rgba(245, 245, 245, .93), rgba(245, 245, 245, .93)), url("/img/sl_011023_55240_03.jpg");
  background-size: 30%;  
  padding-bottom: 2rem;
`

export const Content = styled.div`
  width: 70%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (max-width: 1300px) {
    .grid{
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 1300px) {
    .grid{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 750px) {
    h2 {
    font-size: 1rem;
  }
    .grid{
      grid-template-columns: 1fr;
    }
  }
`