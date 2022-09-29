const connectMetamask = async (setAlert, setCurrentAccount) => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("No metamask!");
      setAlert(true);
      return;
    }
    if (!ethereum.isConnected()) {
      console.log("Metamask not connected!");
      return;
    }
    const chainId = await ethereum.request({ method: "eth_chainId" });
    if (chainId !== import.meta.env.VITE_ETHERS_ChainId) {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: import.meta.env.VITE_ETHERS_ChainId }],
      });
    }
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAccount(accounts[0]);
    console.log(accounts[0])
  } catch (error) {
    console.error(error);
  }
};

export default connectMetamask;
