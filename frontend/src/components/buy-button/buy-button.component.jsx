import React from 'react';

import { StyledButton, StyledDiv } from './buy-button.styles';

export const BuyButton = props => {
  return (
    <StyledDiv>
      <StyledButton onClick={() => props.buyNft(props.nft_Id)}>
        <span className='top-key'></span>
        <h3>Buy</h3>
        <span className='bottom-key-1'></span>
        <span className='bottom-key-2'></span>
      </StyledButton>
    </StyledDiv>
  );
};

export default BuyButton;