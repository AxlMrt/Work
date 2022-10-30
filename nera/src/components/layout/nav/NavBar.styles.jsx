import styled from "styled-components";
import {motion} from "framer-motion"

export const StyledNav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`

export const Logo = styled(motion.div)`
  font-weight: 700;
  font-size: 25px;

  span{
    color: #cbd5e1;
  }

  @media screen and (max-width: 890px){
    font-size: 18px;
  }

  @media screen and (max-width: 650px){
    display: none;
  }
`

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
`;

export const ThemeIcon = styled(motion.div)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color:${({theme, colorTheme}) => colorTheme === "dark" ? "#ffc14d" : theme.fontColor};
  cursor: pointer;
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
`