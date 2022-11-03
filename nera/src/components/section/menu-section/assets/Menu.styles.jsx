import styled from 'styled-components';

export const MenuDiv = styled.div`
  text-align: center;
  padding: 1.5rem 0 0 0;
  
  @media screen and (max-width: 890px){
    h2{
      margin: 2rem 0;
    }
  }

  @media screen and (max-width: 338px){
    h2{
      margin: 0 0 1rem 0;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  gap: 5rem;

  div{
    max-width: 400px;
  }

  img{
    max-width: 400px;
    transition: .2s ease-in-out
  }

  .card:hover{
    transform: scale(1.2);
    transition: .2s ease-in-out;
  }

  @media screen and (max-width: 890px){
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 0;
    img{
      width: 100%;
      margin-top: 2rem;
      transition: .2s ease-out;
    }

    div{
      width: 300px;
    }

    .card:hover{
        transform: scale(1.1);
        transition: .2s ease-in;
    }
  }
`;
