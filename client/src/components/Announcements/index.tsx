import { Alert, Box, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { isMetamaskInstalled } from "../../utils/Metamask";

export const Announcements = () => {
  const [chainId, setChainId] = useState<number>(window.ethereum ? Number(window.ethereum.chainId) : 0);

  const onChainChangedHandler = (chainId: number) => {
    setChainId(chainId);
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", (chainId) => {
        return onChainChangedHandler(Number(chainId));
      });
    }
  });

  return (
    <Box component="div" sx={{ p: 1 }}>
      { 
        !isMetamaskInstalled() 
          ? <Alert severity="warning">Please, install <Link href="https://metamask.io">MetaMask</Link> extension for your browser to login.</Alert> 
          : null 
      }
      { 
        isMetamaskInstalled() && chainId !== 137 
          ? <Alert severity="warning">Please, switch your wallet to Polygon.</Alert> 
          : null 
      }
    </Box>
  );
}
