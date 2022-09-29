const ConnectMetamask = ({close, connect}) => {
    return (
      <div className="z-50 flex flex-col  font-Grotesk rounded-[10px] border border-white-1 w-auto bg-black-1 lg:px-[35px] px-[16px] lg:py-[50px] py-[40px] text-center">
        <span className="lg:text-[18px] lg:w-[400px] w-[310px] text-[16px] text-white-1">
          I acknowledge that I decide the validity and worthiness of a launchpad
          project by deciding to mint. There's a risk that, despite a creator's
          best efforts, their promises may not be fulfilled. I will do my own
          research to make the best informed decision.
        </span>
        <div className="mt-10 flex lg:flex-row flex-col">
          <button
            className="h-[52px] lg:w-[197px] w-[305px] rounded-[26px] border font-semibold border-pink-1 text-pink-1"
            onClick={connect}
          >
            I understand
          </button>
          <button
            onClick={close}
            className="lg:ml-4 lg:mt-0 mt-[10px] h-[52px] lg:w-[197px] w-[305px] rounded-[26px] border font-semibold border-white-1 text-white-1"
          >
            Take me back
          </button>
        </div>
      </div>
    );
  };
  
  export default ConnectMetamask;