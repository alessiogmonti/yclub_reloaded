import { useState } from "react";
import contractsData from "../../data/contractsData";
import connectMetamask from "../../utils/connectMetamask";
import ConnectMetamask from "./alerts/ConnectMetamask";
import ModalWindowsWrapper from "./alerts/ModalWindowsWrapper";
import NoMetamask from "./alerts/NoMetamask";
import CurrentMintButton from "./CurrentMintButton";
import CurrentMintProgressBar from "./CurrentMintProgressBar";

const CurentMintMainInfo = ({ currentMintContractIndex, currentDate }) => {
  const [currentAccont, setCurrentAccount] = useState();
  const [isAvailableToMint, setAvailableToMint] = useState(true);
  const [isAlert, setAlert] = useState(false);
  const [isMetamaskAlert, setMetamaskAlert] = useState(false);
  const contractInfo = contractsData[currentMintContractIndex];

  if (!isAvailableToMint) {
    return (
      <div>
        <img
          src="./images/HeroSection/yachts_animation.gif"
          className="mt-[100px] border-[15px] lg:mt-0 lg:max-h-[750px] lg:max-w-[660px] lg:border-none"
        />
        <CurrentMintProgressBar
          contractInfo={contractInfo}
          setAvailableToMint={setAvailableToMint}
        />
      </div>
    );
  }

  return (
    <div>
      <img
        src="./images/HeroSection/yachts_animation.gif"
        className="mt-[100px] border-[15px] lg:mt-0 lg:max-h-[750px] lg:max-w-[660px] lg:border-none"
      />
      <CurrentMintProgressBar
        contractInfo={contractInfo}
        setAvailableToMint={setAvailableToMint}
      />
      {currentAccont ? (
        <CurrentMintButton
          currentAccont={currentAccont}
          contractInfo={contractInfo}
          currentDate={currentDate}
        />
      ) : (
        currentMintContractIndex >= 0 && (
          <div className="mt-[30px] flex flex-col px-4 lg:w-[660px] lg:p-0">
            <button
              className={`mx-auto h-[52px] w-full rounded-[26px]  bg-pink-1  font-Grotesk text-base font-semibold text-white-1 lg:w-[660px] `}
              onClick={() => setAlert(true)}
            >
              Connect your wallet
            </button>
            <button
              className={`mt-[30px] mx-auto h-[72px] w-[304px] rounded-[36px]  bg-blue-3  font-Grotesk text-base font-semibold text-white-1 `}
              onClick={() => setCurrentAccount("card")}
            >
              <span className={"text-2xl"}>Pay with Credit Card</span>
              <br/>
              <span>No Wallet Needed</span>
            </button>
          </div>
        )
      )}
      {isAlert && (
        <ModalWindowsWrapper closeWindow={() => setAlert(false)}>
          <ConnectMetamask
            close={() => setAlert(false)}
            connect={() => {
              connectMetamask(setCurrentAccount, setMetamaskAlert);
              setAlert(false);
            }}
          />
        </ModalWindowsWrapper>
      )}
      {isMetamaskAlert && (
        <ModalWindowsWrapper closeWindow={() => setMetamaskAlert(false)}>
          <NoMetamask close={() => setMetamaskAlert(false)} />
        </ModalWindowsWrapper>
      )}
    </div>
  );
};

export default CurentMintMainInfo;
