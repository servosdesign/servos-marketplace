import React from 'react';

export const BuyButton = props => {
  const buy = (nft_id) => {
    console.log('buying nft', nft_id);
  };

  return (
    //onClick={buy(props.token_id)}
    <button>Buy</button>
  );

};

export default BuyButton;