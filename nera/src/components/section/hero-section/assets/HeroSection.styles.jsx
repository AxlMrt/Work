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
  flex: 1;
  height: 100%;
  margin-top: 3rem;
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
      margin: 5px 0;
    }

    h3{
      margin-top: 5rem;
    }

    
  @media screen and (max-width: 890px){
    font-size: 3.5rem;
    line-height: 4rem;
  }

  @media screen and (max-width: 660px){
    font-size: 3rem;
    line-height: 3.75rem;
  }
}
`;

export const ImageContainer = styled.div`
  flex: 1;
  display:flex;
  justify-content: center;
  align-items: center;
  img{
    position: absolute;
    right: 0;
    bottom: 0;
    height: 80vh;
    width: auto;
  }

  @media screen and (max-width: 1180px){
    img{
      height: 60vh;
    }
  }

  @media screen and (max-width: 890px){
    height: 100%;
    img{
      position: relative;
      right: 0;
      bottom: 1.5rem;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media screen and (max-width: 645px){
      img{
        width: 100%;

      }
    }

  }
`;

export const StyledButtons = styled.div`
    display: flex;
    padding: 2.5rem 0 0 0;

    div > a{
      text-decoration: none;
      background: none;
      outline: none;
      border: 2px solid ${({theme}) => theme.fontColor};
      padding: 1rem 2.2rem;
      margin: 0 1.5rem 1rem 0;
      border-radius: 2.2rem;
      color: ${({theme}) => theme.fontColor};
      transition: .15s ease-in-out;

      &:hover{
        background: #ffc14d;
        cursor: pointer;
        color: ${({theme}) => theme.background};
        transition: .15s ease-in-out;
      }
    }
  @media screen and (max-width: 890px){
      align-items: center;
      flex-direction: column;
      gap: 2.5rem;

      div > a{
        padding: .6rem 1.8rem;
        margin: .5rem 0;
      }

      @media screen and (max-width: 480px){
        padding: 1.5rem 0 0 0;
      }
  }
`;

export const ContactIcons = styled.div`
  display: flex;
  position: absolute;
  bottom: 2%;
  left: 6.5rem;
  
  a{
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.2rem;
    border: 1px solid ${({theme}) => theme.fontColor};
    border-radius: 50%;
    color: ${({theme}) => theme.fontColor};
    font-size: 1.2rem;
    transition: .15s ease-in-out;

    &:hover{
      background: #ffc14d;
      color: ${({theme}) => theme.background};
      cursor: pointer;
      transition: .15s ease-in-out;
    }
  }

  @media screen and (max-width: 890px){
    bottom: 1rem;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a:last-of-type{
      margin: 0;
    }
  }
`;