import { StyledDiv, StyledButton, StyledHeader, StyledLogout } from './login-button.styles';

export const LoginButton = props => {
  return (
    <>
      {!!props.account ? 
        <StyledHeader>
          <div className='container'>
            <div>Address:<p>{props.account}</p>
            <br></br>
            Balance:<p>{props.balance}Ξ</p></div>
          </div>
          <div className='logout-container'>
           <StyledLogout onClick={props.logoutButton}>
             <span className='top-key'></span>
             <h3>Disconnect</h3>
             <span className='bottom-key-1'></span>
             <span className='bottom-key-2'></span>
             </StyledLogout>
           </div>
          </StyledHeader>
        : 
        <StyledDiv> 
          <StyledButton onClick={props.connectWallet}>
          <span className='top-key'></span>
            <h3>Connect</h3>
            <span className='bottom-key-1'></span>
            <span className='bottom-key-2'></span>
          </StyledButton>
        </StyledDiv>}
    </>
  );
};

export default LoginButton;