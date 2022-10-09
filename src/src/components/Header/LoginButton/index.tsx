import { Button } from "@mui/material"
import { isMetamaskInstalled } from "../../../utils/Metamask"
import { useState } from "react";

export interface LoginButtonProps {
  onLogin: (address: string, id: string) => void
}

const LoginButton = (props: LoginButtonProps) => {
  const [showButton, setShowButton] = useState<boolean>(true);

  const onLoginHandler = async () => {
    if (!window.ethereum) 
      throw new Error("Please, install MetaMask extension in your browser");

    await window.ethereum.request({ method: 'eth_requestAccounts' })
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    
    if (Array.isArray(accounts) && accounts[0] as string) {
      props.onLogin(accounts[0] as string, '');
      setShowButton(false);
    } else {
      throw new Error("Something went wrong during Metamask login, try again later on");
    }
  }

  return !isMetamaskInstalled()
    ? <Button color="inherit" disabled>Login</Button>
    : showButton ? <Button color="inherit" onClick={onLoginHandler}>Login</Button> : null
}

export default LoginButton;
