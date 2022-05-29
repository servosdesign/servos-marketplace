import { useState } from 'react';

import NftDisplay from './components/nft-display/nft-display.component';
import LoginButton from './components/login-button/login-button.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <LoginButton />
      <NftDisplay />
    </div>
  );
}

export default App;
