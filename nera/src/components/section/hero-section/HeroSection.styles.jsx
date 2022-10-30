import styled from 'styled-components';
import {motion} from 'framer-motion'

export const StyledHeroSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100% - 70px);

  @media screen and (max-width: 890px){
    text-align: center;
  }
`;

export const HeroContent = styled.div`
  align-self: flex-start;
  margin-top: 90px;
  flex: 1;

    h2{
      position: relative;
      font-size: 70px;
      font-weight: 500;
      line-height: 90px;
      span{
        color: #ffc14d;
        font-weight: 700;
        display: block;
      }

    p{
      margin: 5px 0 5px 0;
    }


  @media screen and (max-width: 890px){
    margin-top: -50px;
    font-size: 70px;
    line-height: 80px;
  }

  @media screen and (max-width: 650px){
    font-size: 50px;
    line-height: 60px;
  }
}
`;

export const Sandwichs = styled.div`
  img{
    width: 500px;
    margin: 60px -40px 0 0;
  }

  @media screen and (max-width: 1150px){
    img{
      width: 400px;
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 890px){
    display: none;
  }
`

export const ImageContainer = styled.div`
  right: 0;
  position: absolute;
  flex: 1;

  img{
    width: 950px;
  }

  @media screen and (max-width: 1025px){
    img{
      width: 800px;
    }
  }

  @media screen and (max-width: 890px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 700px;
      margin-top: 60px;
    }
  }

  @media screen and (max-width: 650px){
    img{
      width: 100%;
    }
  }

  }
`;


export const ContactIcons = styled.div`
  display: flex;
  position: absolute;
  bottom: 60px;
  left: 100px;

  a{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    border: 1px solid #dadada;
    color: ${({theme}) => theme.fontColor};
    font-size: 20px;

    &:hover{
      background: #ffc14d;
      color: ${({theme}) => theme.background};
      cursor: pointer;
    }
  }

  @media screen and (max-width: 890px){
    bottom: 50px;
    left: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;