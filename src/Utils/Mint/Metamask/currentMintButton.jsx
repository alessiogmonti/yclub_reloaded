import { useState, useEffect } from "react";
import secondsToTime from "../secondsToTime.js";
import contractsData from "../../../Data/contractsData";
import Round from "../../../abi/Round";
import RoundWithSigner from "../../../abi/RoundWithSigner"
import { ethers } from "ethers";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

const CurrentMintButton = ({ currentAccont, contractInfo, currentDate }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const [numberOfRoundUserCanMint, setNumberOfRoundUserCanMint] = useState(-1);
  const [numberNftAvaliableToMint, setNumberNftAvaliableToMint] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (currentAccont === "card") {
        setNumberNftAvaliableToMint(10);
        setNumberOfRoundUserCanMint(0);
        setLoading(false);
        return;
      }
      for (let i = 0; i < contractsData.length; i++) {
        try {
          const round = Round(contractsData[i].address);
          if (contractInfo?.address === contractsData[i].address) {
            const alreadyBought = await round.userPurchasedNum(currentAccont);
            console.log("already bought: ", alreadyBought.toNumber());
            const availableToMint =
              contractsData[i].max - alreadyBought.toNumber();
            console.log("can buy: ", availableToMint);
            setNumberNftAvaliableToMint(availableToMint);
            if (availableToMint > 0) {
              setNumberOfRoundUserCanMint(i);
              setLoading(false);
              return;
            }
          }
          if (contractsData[i].start > currentDate) {
            setNumberOfRoundUserCanMint(i);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    })();
  }, [contractInfo]);

  if (isLoading) {
    return (
      <div className="lg:w-[660px]">
        <img className="m-auto mt-6" src="/images/loading.gif" />
      </div>
    );
  }

  if (numberOfRoundUserCanMint === -1) {
    return null;
  }

  if (!contractInfo || numberNftAvaliableToMint === 0) {
    return (
      <div className="mx-[16px] flex lg:mx-[0px]">
        <button
          className={`mt-[30px] h-[52px] w-[660px] rounded-[26px] bg-pink-1 text-base font-semibold text-white-1`}
          disabled
        >
          {`You can mint in ${secondsToTime(
            contractsData[numberOfRoundUserCanMint].start - currentDate
          )} `}
        </button>
      </div>
    );
  }

  const handleMintClick = async () => {
    setLoading(true);
    try {
      const roundWithSigner = RoundWithSigner(contractInfo.address);
      const price = await roundWithSigner.mintPrice();
      console.log("price: ", ethers.utils.formatEther(price));
      const tx = await roundWithSigner.paidMint(mintAmount, {
        value: price.mul(mintAmount),
      });
      console.log("tx: ", tx);
      const responce = await tx.wait();
      console.log("responce: ", responce);
      router.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-[30px] flex w-[660px] justify-between">
      <div className=" flex h-[52px] w-[40%] items-center justify-between rounded-[26px] border border-white-1 border-opacity-40 text-base font-semibold text-white-1">
        <button
          className="ml-10"
          disabled={mintAmount <= 1}
          onClick={() => setMintAmount(mintAmount - 1)}
        >
          -
        </button>
        <span>{mintAmount}</span>
        <button
          className="mr-10"
          disabled={mintAmount >= numberNftAvaliableToMint}
          onClick={() => setMintAmount(mintAmount + 1)}
        >
          +
        </button>
      </div>
      {currentAccont === "card" ? (
        <CrossmintPayButton
          collectionTitle="YCLUB Lana Super Yacht"
          collectionDescription={`Gain access to a world of extravagance through the premier YCLUB collection. The first digital collection of the breath taking Benetti Super Yacht “Lana” will be the dNFT that unlocks the unending benefits for holders, from rewards, metaverse experiences, and a complete DeFi suite, to once in a lifetime IRL experiences. 
                              Having access to the YCLUB metaverse experience means enjoying a world rich with opportunity and entertainment hosted on our one of a kind Super Yacht. This virtual social club for the community also acts as a non-expiring revenue stream; supporting an eCommerce marketplace and events platform where users can spend, invest, trade, and be rewarded in Bitcoin, Ethereum, USDC, or our native coin SYC.
                              The metaverse Super Yacht that holders of the “Lana” dNFT will have access to will have an entertainment suite to match the real Super Yacht’s extravagance. Holders will have access to, and gain revenue from the concerts, fashion shows, hosted meetings, casinos, karaoke, and gallery experiences for artists to showcase their NFTs in ways for guests to purchase live. Your charter into a one of a kind metaverse experience begins here, with YCLUB.`}
          collectionPhoto="https://www.yclub.io/images/HeroSection/yachts_animation.gif"
          clientId="e3269178-b657-46f8-a517-5f38fb613c75"
          mintConfig={{
            type: "erc-721",
            totalPrice: (mintAmount * 0.12).toString(),
            _count: mintAmount,
            _round: 1,
            _name: "rare",
          }}
        />
      ) : (
        <button
          className={`h-[52px] w-[55%] rounded-[26px] text-base font-semibold text-white-1 ${
            numberNftAvaliableToMint > 0 ? "bg-pink-1" : "bg-gray-1"
          }`}
          disabled={numberNftAvaliableToMint === 0}
          onClick={handleMintClick}
        >
          Mint
        </button>
      )}
    </div>
  );
};

export default CurrentMintButton;
