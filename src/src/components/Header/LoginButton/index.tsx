import { Button } from "@mui/material"
import { isMetamaskInstalled } from "../../../utils/Metamask"
import { TooltipBottom } from "../../TooltipBottom"

export const LoginButton = () => {
  return isMetamaskInstalled()
    ?
      <Button color="inherit">Login</Button> 
    : 
      <TooltipBottom title="Please, install Metamask extension">
        <Button variant="contained" color="error">Login</Button>
      </TooltipBottom>
}
