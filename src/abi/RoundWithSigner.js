import metamaskProvider from "./metamaskProvider";
import Round from "./Round";
let RoundWithSigner;

if (metamaskProvider) {
  RoundWithSigner = (address) => {
    const round = Round(address);
    const signer = metamaskProvider.getSigner();
    return round.connect(signer);
  };
}

export default RoundWithSigner;
