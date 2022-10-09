import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
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
              : <Button color="inherit">Login</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );

  return render;
}
