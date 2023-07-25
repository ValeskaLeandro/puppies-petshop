import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

export const Content = styled.div`
  width: 70%;
  max-width: 1500px;
  display: flex;
  
  justify-content: center;
  align-items: center;
  .rigth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    background-image: url("/img/footprint.svg");
    background-size: 30%;
    background-position: bottom right;
    background-repeat: no-repeat;
      h2 {
      margin-bottom: 2rem;
      text-transform: uppercase;
      font-size: 2rem;

      span {
        border-bottom: 2px solid var(--pink);
      }
    }

    p {
      padding: 0 1rem;
      font-weight: 500;
    }
  } 
  .left img{  
    width: 100%;
    max-height: 600px;
    object-fit: contain;
  }

  @media (max-width: 1000px) {
    width:90%;

    .rigth {
      width: 80%;
    }

    .left img{       
      width: 70%;
    }
  }

  @media (max-width: 700px) {
    .rigth h2 {
      font-size: 1rem;
    }
    
    .left {       
      display: none;
    }
  }
`