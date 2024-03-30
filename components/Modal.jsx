"use client";
import React from "react";
import { useEffect, useRef } from "react";

const Modal = ({ isVisible, onClose, children }) => {
  useEffect(() => {
    if (isVisible) {
      // Prevent scrolling when the modal is open
      document.body.style.overflowY = "hidden";
    } else {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto"; // Re-enable scrolling when component unmounts
    };
  }, [isVisible]);

  return isVisible ? (
    <div
      className="fixed inset-0 ml-[280px] bg-[#022B94] bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white px-[45px] py-[35px] rounded-2xl relative"
        style={{ maxWidth: "90%", maxHeight: "90%", overflow: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <p
          className="text-[40px] text-[#525256] rotate-45 absolute top-0 right-5 cursor-pointer"
          onClick={onClose}
        >
          +
        </p>
        <div className="flex flex-col items-center gap-2">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
