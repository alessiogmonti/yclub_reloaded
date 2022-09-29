const NoMetamask = ({ close }) => {
    return (
      <div className="z-50 flex w-auto  flex-col rounded-[10px] border border-white-1 bg-black-1 px-[16px] py-[40px] text-center font-Grotesk lg:px-[35px] lg:py-[50px]">
        <span className="w-[310px] text-[22px] text-white-1 lg:w-[400px] lg:text-[24px]">
          To use this app you should install{" "}
          <a
            className="text-pink-1"
            target="_blank"
            href="https://metamask.io/download/"
          >
            Metamask Extension
          </a>{" "}
          for browser, or{" "}
          <a className="text-pink-1" target="_blank" href="https://metamask.io/">
            Mobile Metamask App
          </a>
        </span>
        <div className="mt-10 flex ">
          <button
            className="m-auto h-[52px] w-[305px] rounded-[26px] border border-pink-1 font-semibold text-pink-1 lg:w-[197px]"
            onClick={close}
          >
            I understand
          </button>
        </div>
      </div>
    );
  };
  
  export default NoMetamask;
  