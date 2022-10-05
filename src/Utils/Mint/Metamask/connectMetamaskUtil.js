import detectEthereumProvider from "@metamask/detect-provider";

const connectMetamask = async (setAlert, setCurrentAccount) => {
  let { ethereum } = window;

    try {
      if (!ethereum) {
        console.log("No metamask!");
        setAlert(true);
        return;
      }
      try{
        if (!ethereum.isConnected()) {
        console.log("Metamask not connected!");
        setAlert(true)
        return;
        }
      } catch (error){
        console.error(error)
        try{
          // console.log('providers',window.ethereum.providers);
          // console.log('ethVar',ethereum)
          ethereum = await window.ethereum.providers.find(
          (provider) => provider.isMetaMask );
          // console.log('ethVarAfterFind', ethereum)
        } catch (error){
          console.error(error)
        }
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
      console.log('error:')
      console.error(error);
    }
};

export default connectMetamask;