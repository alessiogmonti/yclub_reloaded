import { ethers } from "ethers";

const defaultProvider = new ethers.providers.InfuraProvider(
  import.meta.env.VITE_ETHERS_ChainName
);

export default defaultProvider;