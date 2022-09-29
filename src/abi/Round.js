import { ethers } from "ethers";
import defaultProvider from "./defaultProvider";
import abi from "./abi";

const Round = (address) => new ethers.Contract(address, abi, defaultProvider);

export default Round;
