const ModalWindowsWrapper = ({ children, closeWindow }) => {
    return (
      <div
        style={{ background: "rgba(0, 0, 0, 0.7)" }}
        className="fixed top-0 left-0  w-full h-screen flex justify-center items-center"
      >
        {children}
        <div
          onClick={closeWindow}
          className="z-10 absolute w-full h-screen"
        ></div>
      </div>
    );
  };
  
  export default ModalWindowsWrapper;