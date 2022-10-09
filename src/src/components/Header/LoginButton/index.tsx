import { Button } from "@mui/material"
import { isMetamaskInstalled } from "../../../utils/Metamask"

export const LoginButton = () => {
  return isMetamaskInstalled()
    ? <Button color="inherit">Login</Button>
    : <Button color="inherit" disabled>Login</Button>
}
