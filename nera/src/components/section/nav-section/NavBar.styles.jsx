import styled from "styled-components";
import {motion} from "framer-motion"

export const StyledNav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;

  @media screen and (max-width: 890px){
    z-index: 1001;
    position: absolute;
    height: 80vh;
    width: 60vw;
    display: ${({open}) => open ? 'inline' : 'none' };
    background: ${({theme}) => theme === "dark" ? theme.background : theme.fontColor};
    color: ${({theme}) => theme === "dark" ? theme.fontColor : theme.background};
    padding: 1rem;
    text-align: center;
    border-radius: .6rem;
  }
`;

export const Logo = styled(motion.div)`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({theme}) => theme === "dark" ? '#fdc153' : theme.fontColor};

  span{
    color: ${({theme}) => theme === "dark" ? "white" : '#fdc153'};
  }

  @media screen and (max-width: 890px){
    span{
      color: ${({theme}) => theme === "dark" ? "black" : '#fdc153'};
    }
  }

  @media screen and (max-width: 460px){
    font-size: 1.1rem;
  }

`;

export const NavLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 890px){
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;
  }
`;

export const Link = styled(motion.div)`
  * {
    text-decoration: none;
    color: ${({theme}) => theme.fontColor};
    font-weight: 600;
    transition: .15s ease-in-out;

    &:hover {
      color: #ffc14d;
      transition: .15s ease-in-out;
    }
  }
  

  @media screen and (max-width: 890px){
    *{
      color: ${({theme}) => theme === "dark" ? theme.fontColor : theme.background};
    }
  }
`;

export const ThemeIcon = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: ${({theme}) => theme === "dark" ? "#ffc14d" : theme.fontColor};
  cursor: pointer;

  @media screen and (max-width: 890px){
    width: 100%;
  }

`;

export const SocialIcons = styled(motion.div)`
  display: flex;
  div{
    margin-right: .6rem;

    &:last-child{
      margin-right: 0;
    }
  }

  a{
    color: ${({theme}) => theme.fontColor};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #eeeeee;
    border-radius: .6rem;
    padding: .75rem;
    transition: .15s ease-in-out;

    &:hover{
      color: ${({theme}) => theme.background};
      background: #ffc14d;
      transition: .15s ease-in-out;
    }
  }

  @media screen and (max-width: 890px){
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div{
      width: 3rem;
      margin-bottom: .6rem;
      margin-right: 0;
    }

    a{
      color: ${({theme}) => theme === "dark" ? theme.fontColor : theme.background};
      
    }
  }
`;

export const Hamburger = styled(motion.div)`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
  cursor: pointer;

  div{
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background: ${({theme}) => theme === "dark" ? "#ffc14d" : theme.fontColor};
    transform-origin: 1px;
    transition: all 0.3 linear;
  }

  div:first-of-type{
    transform: ${({open}) => open === true ? 'rotate(45deg)' : 'rotate(0)'};
  }

  div:nth-of-type(2n){
    transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({open}) => open ? 0 : 1};
  }

  div:last-of-type{
    transform: ${({open}) => open === true ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;

export const Burg = styled(motion.div)`
  display: none;
  padding-top: 1rem;

  @media screen and (max-width: 890px){
    display: fixed;
    z-index: 10;
  }
`
