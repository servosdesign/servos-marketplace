import React from 'react';

import servos1 from 'assets/servos1.json';
import servos2 from 'assets/servos2.json';
import nftDetails from 'assets/nft_details.json';

import BuyButton from '../buy-button/buy-button.component';

import { StyledDisplay } from './nft-display.styles';

const allServos = [servos1, servos2];

const NftDisplay = props => {

  return (
    <StyledDisplay>
      {allServos.map((x) => {
          return (
            <div key={x.token_id}>
              <h2>{x.name}</h2>
              <img src={x.image} alt="servos" />
              <p>{x.description}</p>
              <BuyButton/>
            </div>
          );
        })}
    </StyledDisplay>
  );
};

export default NftDisplay;