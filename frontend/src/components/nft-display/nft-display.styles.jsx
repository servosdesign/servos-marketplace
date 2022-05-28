import styled from 'styled-components';

export const StyledDisplay = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;

  & img {
    heigth: 500px;
    width: 500px;
  }
    
  & img:hover{
    box-shadow:  0px 3px 4px -3px #000000;
    transition: .5s ease;
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