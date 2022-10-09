import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { HeaderProps } from "./HeaderProps";
import { LoginButton } from "./LoginButton";
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
              : <LoginButton />
          }
        </Toolbar>
      </AppBar>
    </Box>
  );

  return render;
}
