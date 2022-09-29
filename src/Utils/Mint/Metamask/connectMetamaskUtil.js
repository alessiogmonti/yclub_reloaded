const connectMetamask = async (setAlert) => {
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
    if (chainId !== process.env.targetChainId) {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: process.env.targetChainId }],
      });
    }
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAccount(accounts[0]);
  } catch (error) {
    console.error(error);
  }
};

export default connectMetamask;
