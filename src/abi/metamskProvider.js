import { ethers } from "ethers";

let metamskProvider;
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  metamskProvider = new ethers.providers.Web3Provider(window.ethereum, "any");
}

export default metamskProvider;