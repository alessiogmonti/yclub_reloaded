import { ethers } from "ethers";

let metamaskProvider;
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  metamaskProvider = new ethers.providers.Web3Provider(window.ethereum, "any");
  console.log(metamaskProvider)
}

export default metamaskProvider;