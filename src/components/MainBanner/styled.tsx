import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--ligth-green);
  
`

export const Content = styled.div`
  width: 70%;
  max-width: 1500px;
  height: 60vh;
  display: flex;
  align-items: center;

  .image, .texts {
    flex: 1;
  }

  .texts {
    padding: 2rem;
    h2 {
      font-size: 2rem;

      span {
        color: var(--pink);
      }
    }
    p {
      font-size: 1.25rem;
    }
  }
  .texts {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: linear-gradient(rgba(168, 222, 219, .7), rgba(168, 222, 219, .7)), url("/img/footprints1.svg");
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .image {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image img {
    height: 100%;
  }  

  @media (max-width: 1250px) {
    width: 80%;
    height: 50vh;
  }

  @media (max-width: 950px) {
    width: 90%;
    .texts {
      padding: 0;
    }

    .image img {
      width: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 750px) {
    width: 90%;
    height: 40vh;
    h2 {
      font-size: 1.25rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    
    .image {
      display: none;
    }
  }

`