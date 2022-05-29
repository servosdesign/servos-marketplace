import { useState, useEffect } from 'react';

import { Web3Auth } from "@web3auth/web3auth";
import Web3 from 'web3';

import { network, clientId } from '../../config/config';
import { StyledDiv, StyledButton } from './login-button.styles';

export const LoginButton = props => {
  const [web3Auth, setWeb3Auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState("");

  useEffect(() => {
    async function init() {
      const web3AuthInstance = new Web3Auth({
      chainConfig: network,
      clientId,
      });
      await web3AuthInstance.initModal();
      setWeb3Auth(web3AuthInstance);
    }
    init();
  }, []);
  
  const connect = async () => {
    if (!web3Auth) {
      alert('Web3auth is not initialized!');
      return;
    }
    const provider = await web3Auth.connect();
    setProvider(provider);
    const web3 = new Web3(provider);
    setWeb3(web3);
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    setAccount(accounts[0]);
  };

  return (
    <>
    {!!account ? account : (<StyledDiv> 
      <StyledButton onClick={connect}>
      <span className='top-key'></span>
        <h3>Connect</h3>
        <span className='bottom-key-1'></span>
        <span className='bottom-key-2'></span>
      </StyledButton>
    </StyledDiv>)}
    </>
  );
};

export default LoginButton;