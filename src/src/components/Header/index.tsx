import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { isMetamaskInstalled } from "../../utils/Metamask";
import { HeaderProps } from "./HeaderProps";
import { Selector } from "./Selector";

export const Header = (props: HeaderProps) => {
  const render = (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crypto Market
          </Typography>
          { 
            props.auth
              ? <Selector id={props.auth.id} evmAddress={props.auth.evmAddress} /> 
              : isMetamaskInstalled() ? <Button color="inherit">Login</Button> : <p>Please, install Metamask</p>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );

  return render;
}
