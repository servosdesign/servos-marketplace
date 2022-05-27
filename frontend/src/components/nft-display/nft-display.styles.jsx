import styled from 'styled-components';

export const StyledDisplay = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;

  & img {
    heigth: 500px;
    width: 500px;
  }

  & p {
    margin: 0 auto;
    font-family: 'Century Gothic';
    padding-top: 15px;
    padding-bottom: 30px;
  }

  & h2{
    padding-top: 90px;
    font-family: 'Serif';
    letter-spacing: 10px;
    font-weight: 500;
    text-transform: uppercase;
    text-transform: bold;
  }
`;