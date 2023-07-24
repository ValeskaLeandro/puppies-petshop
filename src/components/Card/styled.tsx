import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: auto;
  max-width: 400px;
  padding: 2rem;
  border: 1px solid #dddddd;
  border-radius: 25px;
  box-shadow: 3px 10px 20px -7px rgba(0,0,0,0.23);

  h3 {
    padding: 1rem;
  }
  p {
    font-weight: 500;
    text-align: center;
  }
  img {
    width: 100%;
    height: 70px;
    object-fit: contain;

  }
`