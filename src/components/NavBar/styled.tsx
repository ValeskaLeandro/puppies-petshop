import styled from "styled-components"

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Logo = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .3rem;
  }

`

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    
    li a {
      display: flex;
      align-items: center;
      gap: .3rem;
      padding: .5rem;
    }

    a span, li {
      transition: .4s ease;
    }

    a span:hover {
      color: var(--pink);
    }
  
    li:not(:last-child) {
    margin-right: 1rem;
    }
  }
  
  .menu-mobile {
    background-color: var(--pink);
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem;
    border-radius: 2rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    z-index: 2;

    span {
      display: none;
    }
    li {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li:hover {
      background-color: var(--ligth-green);
      border-radius: 50%;
    }
  }

`