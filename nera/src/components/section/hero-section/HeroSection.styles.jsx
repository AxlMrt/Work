import styled from 'styled-components';
import {motion} from 'framer-motion'

export const StyledHeroSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: calc(100% - 4.4rem);
  @media screen and (max-width: 890px){
    text-align: center;
  }
`;

export const HeroContent = styled.div`
  padding-top: 6rem;
  flex: 1;
  height: 100%;
    h2{
      font-size: 4.5rem;
      font-weight: 500;
      line-height: 5.5rem;
      span{
        color: #ffc14d;
        font-weight: 700;
        display: block;
      }
    p{
      margin: 5px 0 5px 0;
    }

    
  @media screen and (max-width: 890px){
    margin-top: -3rem;
    font-size: 4.5rem;
    line-height: 5rem;
  }
  @media screen and (max-width: 660px){
    font-size: 3rem;
    line-height: 3.75rem;
  }
}
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  img{
    max-width: 80%;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 890px){
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 2rem;
    div img{
      width: 50%;
    }
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  button{
    background: none;
    outline: none;
    border: 2px solid #eeeeee;
    padding: 1rem 2.2rem;
    margin-right: 1.5rem;
    border-radius: 2.2rem;
    color: ${({theme}) => theme.fontColor};

    &:hover{
      background: #ffc14d;
      cursor: pointer;
      color: ${({theme}) => theme.background};
    }
  }
`


export const ContactIcons = styled.div`
  display: flex;
  position: absolute;
  bottom: 2%;
  left: 6.5rem;
  a{
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.2rem;
    border: 1px solid #dadada;
    border-radius: 50%;
    color: ${({theme}) => theme.fontColor};
    font-size: 1.2rem;
    &:hover{
      background: #ffc14d;
      color: ${({theme}) => theme.background};
      cursor: pointer;
    }
  }
  @media screen and (max-width: 890px){
    bottom: 1rem;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;