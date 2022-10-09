import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Component } from "react";
import MenuIcon from '@mui/icons-material/Menu';

class Header extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Crypto Payment Demo
            </Typography>
            <Button color="inherit">Authorize</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Header;
