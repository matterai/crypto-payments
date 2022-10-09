import { Alert, Button } from "@mui/material"
import { isMetamaskInstalled } from "../../../utils/Metamask"

export const LoginButton = () => {
  return isMetamaskInstalled()
    ? <Button color="inherit">Login</Button> 
    : <Alert severity="warning">Please, install Metamask</Alert>
}
