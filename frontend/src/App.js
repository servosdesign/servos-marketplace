import { useState, useEffect } from 'react';

import servos1 from 'assets/servos1.json';
import servos2 from 'assets/servos2.json';
import ServosNft from 'solidity/build/contracts/ServosNft.json';
import nftDetails from 'assets/nft_details.json';
import { Web3Auth } from "@web3auth/web3auth";
import Web3 from 'web3';
import { network, clientId } from '../src/config/config';
import NftDisplay from './components/nft-display/nft-display.component';
import LoginButton from './components/login-button/login-button.component';
import LoadingSpinner from './components/loading-spinner/loading-spinner.component';

import './App.css';

const allServos = [servos1, servos2];

function App() {

  const [web3Auth, setWeb3Auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");

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

  const buy = async (nft_id) => {
    console.log("buying nft", nft_id);
    const contract = new web3.eth.Contract(ServosNft.abi, nftDetails['contractAddress:']);
    const currentServos = allServos.find((servos) => servos.token_id === nft_id);
    const gasEstimate = await contract.methods
      .awardItem(account, currentServos.hosted_url)
      .estimateGas({ from: account, value: web3.utils.toWei("0.011", "ether") });
    console.log("gas estimate", gasEstimate);

    await contract.methods
      .awardItem(account, currentServos.hosted_url)
      .send({ from: account, maxPriorityFeePerGas: web3.utils.toWei("1", "gwei"), value: web3.utils.toWei("0.02", "ether") })
      .on("transactionHash", (hash) => console.log(hash));
    alert("successfully claimed");
  };

  const connect = async () => {
    if (!web3Auth) {
      alert("Please wait for Web3Auth to initialize before connecting.");
      return;
    }
    const provider = await web3Auth.connect();
    setProvider(provider);
    const web3 = new Web3(provider);
    setWeb3(web3);
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const balance = await web3.eth.getBalance(accounts[0]);
    setBalance(web3.utils.fromWei(balance, "ether"));
  };

  const logout = async () => {
    await web3Auth.logout();
    setAccount("");
    setBalance("");
  };

  return (
    <div className="App">
      {!!web3Auth ? 
        <>
          <LoginButton 
          connectWallet={connect} 
          balance={balance} 
          account={account}
          logoutButton={logout}
          />
         <NftDisplay isLoggedIn={provider} buyNft={buy} />
        </>
        : 
        <>
          <LoadingSpinner />
          <NftDisplay isLoggedIn={provider} buyNft={buy} />
        </>}
    </div>
  );
};

export default App;
