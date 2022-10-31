import styled from "styled-components";
import {motion} from "framer-motion"

export const StyledNav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;

  @media screen and (max-width: 767px){
    display: ${({wrap}) => wrap ? 'inline' : 'none' };
    background: ${({theme}) => theme === "dark" ? theme.background : theme.fontColor};
    color: ${({theme}) => theme === "dark" ? theme.fontColor : theme.background};
    height: 80vh;
    width: 60vw;
    padding: 1rem;
    position: absolute;
    text-align: center;
  }
`;

export const Logo = styled(motion.div)`
  font-weight: 700;
  font-size: 25px;
  color: ${({theme}) => theme === "dark" ? '#fdc153' : theme.fontColor};

  span{
    color: ${({theme}) => theme === "dark" ? "#cbd5e1" : '#fdc153'};
  }

  @media screen and (max-width: 460px){
    font-size: 18px;
  }

`;

export const NavLinks = styled.div``;
export const Link = styled(motion.a)`
  display: inline-block;
  text-decoration: none;
  margin-right: 50px;
  color: ${({theme}) => theme.fontColor};
  font-weight: 600;
  &:last-child{
    margin-right: 0;
  }
  &:hover {
    color: #ffc14d
  }

  @media screen and (max-width: 767px){
    display: block;
    margin: 1rem 0 1rem 0;
    color: ${({theme}) => theme === "dark" ? theme.fontColor : theme.background};
  }
`;

export const ThemeIcon = styled(motion.div)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${({theme}) => theme === "dark" ? "#ffc14d" : theme.fontColor};
  cursor: pointer;

  @media screen and (max-width: 767px){
    width: 100%;
  }

`;

export const SocialIcons = styled(motion.div)`
  display: flex;
  div{
    margin-right: 10px;
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
    border-radius: 10px;
    padding: 12px;

    &:hover{
      color: ${({theme}) => theme.background};
      background: #ffc14d
    }
  }

  @media screen and (max-width: 767px){
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div{
      width: 50px;
      margin-bottom: 10px;
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
  padding-top: 2rem;

  @media screen and (max-width: 767px){
    display: fixed;
    z-index: 10;
  }
`
