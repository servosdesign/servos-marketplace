import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  padding-top: 40px;
`;

export const StyledButton = styled.button`
  height: 30px;
  width: 80px;
  -webkit-appearance: button;
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin 0 auto;
  align-items: center;
  font-weight: 700;
  letter-spacing: .05em;
  padding-top 100px;
  outline: none;
  position: relative;
  overflow: visible;
  padding: 1.25em 2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: all .3s ease-in-out;
  user-select: none;

  &: before {
    content: " ";
    width: 1.0rem;
    height: 2px;
    background: black;
    top: 50%;
    left: 1.5em;
    position: absolute;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transition: background 0.3s linear, width 0.3s linear;
    transition: background 0.3s linear, width 0.3s linear;
  }


  & h3 {
    font-size: 1.0em;
    line-height: 1.33333em;
    padding-left: 2em;
    display: block;
    text-align: left;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
  }
  & .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: white;
    -webkit-transition: width 0.5s ease-out, left 0.3s ease-out;
    transition: width 0.5s ease-out, left 0.3s ease-out;
  }

  & .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: white;
    -webkit-transition: width 0.5s ease-out, right 0.3s ease-out;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  &.bottom-key-2 {
    height: 30px;
    width: 80px;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: white;
    -webkit-transition: width 0.5s ease-out, right 0.3s ease-out;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  &:hover {
    color: white;
    background: black;
    
  &:before {
    
    width: 0.9375rem;
    background: white;
  }
  & h3 {
    color: white;
    padding-left: 1.5em;
   }

   & .top-key {
    left: -2px;
    width: 0px;
}

& .bottom-key-1 ,
& .bottom-key-2 {
  right: 0;
  width: 0;
  }
`;