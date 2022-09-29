import { ethers } from "ethers";

const defaultProvider = new ethers.providers.InfuraProvider(
  import.meta.env.VITE_env.targetChainName
);

export default defaultProvider;
