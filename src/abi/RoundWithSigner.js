import metamskProvider from "./metamskProvider";
import Round from "./Round";
let RoundWithSigner;

if (metamskProvider) {
  RoundWithSigner = (address) => {
    const round = Round(address);
    const signer = metamskProvider.getSigner();
    return round.connect(signer);
  };
}

export default RoundWithSigner;
