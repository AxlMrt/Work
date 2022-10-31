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
  align-self: flex-start;
  margin-top: 5.6rem;
  flex: 1;

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

  @media screen and (max-width: 650px){
    font-size: 3rem;
    line-height: 3.75rem;
  }
}
`;

export const Sandwichs = styled.div`

  img{
    width: 40%;
    margin: 3.75rem -2.5rem 0 0;
  }

  @media screen and (max-width: 890px){
    display: none;
  }
`

export const ImageContainer = styled.div`
  right: 10%;
  position: absolute;
  overflow: hidden;
  img{
    width: 140%;
  }

  @media screen and (max-width: 890px){
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      margin-top: 3.75rem;
    }
  }

  @media screen and (max-width: 890px){
    img{
      width: 100%;
    }
  }

  }
`;


export const ContactIcons = styled.div`
  display: flex;
  position: absolute;
  bottom: 3rem;
  left: 6.5rem;

  a{
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.2rem;
    border: 1px solid #dadada;
    color: ${({theme}) => theme.fontColor};
    font-size: 1.2rem;

    &:hover{
      background: #ffc14d;
      color: ${({theme}) => theme.background};
      cursor: pointer;
    }
  }

  @media screen and (max-width: 890px){
    bottom: 6rem;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;