import { Alert, Box, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { isMetamaskInstalled } from "../../utils/Metamask";

export const Announcements = () => {
  const [chainId, setChainId] = useState<number>(0);

  const onChainChangedHandler = (chainId: number) => {
    setChainId(chainId);
  }

  const onPolygonLinkClick = () => {
    window.ethereum?.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: "0x89" }]
    });
    setChainId(137);
  }

  useEffect(() => {
    async function fetchChainId() {
      if (window.ethereum) {
        const chainId = Number(await window.ethereum.request({ method: "eth_chainId" }));
        onChainChangedHandler(chainId);
      }
    };

    if (window.ethereum) {
      fetchChainId();
      
      window.ethereum.on("chainChanged", (chainId) => {
        return onChainChangedHandler(Number(chainId));
      });
    }
  }, []);

  return (
    <Box component="div" sx={{ p: 1 }}>
      { 
        !isMetamaskInstalled() 
          ? <Alert severity="warning">Please, install <Link href="https://metamask.io">MetaMask</Link> extension for your browser to login.</Alert> 
          : null 
      }
      { 
        isMetamaskInstalled() && chainId !== 137 
          ? <Alert severity="warning">Please, switch your wallet to <Link href="#" onClick={onPolygonLinkClick}>Polygon</Link>.</Alert> 
          : null 
      }
    </Box>
  );
}
