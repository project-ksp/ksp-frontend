import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  return (
    <div
      className="absolute inset-0 bg-[#022B94] bg-opacity-20 backdrop-blur-sm flex justify-center items-center -m-[30px] min-h-screen"
      onClick={() => onClose()}
    >
      <div
        className="w-[640px] flex flex-col bg-white px-[45px] py-[35px] rounded-2xl gap-2 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <p
          className="text-[40px] text-[#525256] rotate-45 absolute right-5 top-0 cursor-pointer"
          onClick={() => onClose()}
        >
          +
        </p>
        {children}
      </div>
    </div>
  );
};

export default Modal;
