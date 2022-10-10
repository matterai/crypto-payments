import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { HeaderProps } from "./HeaderProps";
import LoginButton from "./LoginButton";
import Profile from "./Profile";

export const Header = () => {
  const [props, setProps] = useState<HeaderProps>({ auth: null });

  const onLogin = (address: string, id: string = '') => {
    setProps({ 
      auth: { 
        evmAddress: address, 
        id: id
      }
    });
  }

  const render = (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crypto Market
          </Typography>
          { 
            props.auth
              ? <Profile id={props.auth.id} evmAddress={props.auth.evmAddress} /> 
              : <LoginButton onLogin={onLogin} />
          }
        </Toolbar>
      </AppBar>
    </Box>
  );

  return render;
}
