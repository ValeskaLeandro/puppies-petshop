import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  .location {
    margin-bottom: 1rem;
    p > span {
      color: var(--pink);
    }

    p > svg {
      fill: var(--pink);
    }

  }
  .social {
    display: flex;
    gap: .5rem;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2.5px solid var(--pink);
      border-radius:50%;
      padding: 1rem;
      font-size: 1.5rem;
      transition: .5s ease-in;
      
      svg {
        fill: var(--pink);
      }

      &:hover {
        background-color: var(--ligth-green);
      }
    }
  }
  @media (max-width: 1000px) {
    margin-bottom: 6rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  @media (max-width: 550px) {
    padding: 2rem;
  }
`