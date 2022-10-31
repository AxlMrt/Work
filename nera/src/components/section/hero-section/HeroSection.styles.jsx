import styled from 'styled-components';
import {motion} from 'framer-motion'

export const StyledHeroSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100% - 4.4rem);

  @media screen and (max-width: 890px){
    text-align: center;
  }
`;

export const HeroContent = styled.div`
  padding-top: 4.5rem;
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

export const Sandwichs = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  width: 40%;
  
  img{
    width: 100%;
  }

  @media screen and (max-width: 890px){
    display: none;
  }
`

export const ImageContainer = styled.div`
  right: 0;
  width: 60%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 890px){
    width: 100%;
    img{
      width: 100%;
      margin-top: 4rem;
    }
  }
`;


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