import styled from 'styled-components';

export const SetMap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.fontColor};
  h2{
    padding: 1rem;
  }

  span {
    color: ${({now}) => now < 9 || now > 15 ? "grey" : "#fdc153"};
  }

  .map-container {
    height: 500px;
    width: 500px;
  }

  @media screen and (max-width: 690px){
    h2{
      padding: 2rem;
      text-align: center;
    }
    .map-container {
      height: 300px;
      width: 300px;
    }
  }
`;

export const Horaire = styled.div`
  display: flex;
  gap: 5rem;

  div {
    text-align: center;
  }
`;

export const Address = styled.div`
  margin: 2rem 0 1rem 0;
`;