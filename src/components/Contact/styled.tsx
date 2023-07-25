import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--pink);
  padding: 3rem 0;
  margin-bottom: 1rem;
`
export const Content = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  p {
    margin-bottom: 1.5rem;
  }
  .img, .contact {
    flex: 1;
  }
  .img img {
    width: 100%;
    max-height: 500px;
    object-fit: contain;
  }
  .input-group{
    position: relative;
  }

  input, textarea {
    width: 80%;
    border: 2px solid var(--ligth-green);
    border-radius: 1rem;
    background: none;
    padding: 1rem;
    transition: .15s cubic-bezier(.4, 0, .2, 1);
    margin-bottom: 1rem;
  }

  label {
    position: absolute;
    left: 16px;
    pointer-events: none;
    transform: translateY(1rem);
    transition: .15s cubic-bezier(.4, 0, .2, 1)
  }

  input:focus, 
  textarea:focus {
    outline: none;
    border: 2px solid var(--ligth-green);
  }

  input:focus ~ label, 
  textarea:focus ~ label, 
  input:not(:placeholder-shown) ~ label, 
  textarea:not(:placeholder-shown) ~ label  {
    transform: translateY(-50%) scale(.8);
    background-color: var(--pink);
    padding: 0 .2rem;
    color: var(--ligth-green);
  }

  .button {
    width: 80%;
    display: flex;
    justify-content: end;
  }

  .button button {
    position: relative;
    font-weight: 600;
    font-size: 1rem;
    padding: 1rem 2rem;
    border: 2px solid var(--ligth-green);
    border-radius: 1rem;
    background: transparent;
    cursor: pointer;
    transition: .8s ease-in-out;

  }
  .button button:hover {
    background-color: var(--ligth-green);
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 750px) {
    justify-content: center;
    .button {
      width: 100%;
    }
    .img {
      display: none;
    }
    input, textarea {
    width: 100%;
    }
  }
`