import { Alert, Box, Link } from "@mui/material";
import { isMetamaskInstalled } from "../../utils/Metamask";

export const Announcements = () => {
  return !isMetamaskInstalled() 
    ? 
      <Box component="div" sx={{ p: 1 }}>
        <Alert severity="warning">Please, install <Link href="https://metamask.io">MetaMask</Link> extension for your browser to login.</Alert>
      </Box>
    : null;
}
