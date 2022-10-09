import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

type HeaderProps = {
  user: UserProps | null;
}

type UserProps = {
  id: string;
  evmAddress: string;
}

export const Header = (props: HeaderProps) => {
  const render = (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crypto Market
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );

  return render;
}
