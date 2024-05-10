import React from "react";

const VerificationSelector = ({ selected, options, onClose }) => {
  return (
    <>
      <div className="absolute text-black w-full z-10">
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className={`${option === "disetujui" && "bg-green-status-2"} ${
                option === "belum disetujui" && "bg-yellow-status-2"
              } ${option === "ditolak" && "bg-red-status-2"} ${
                option === "diproses" && "bg-secondary"
              } h-[24px]  rounded-lg text-center text-sm`}
              onClick={() => {
                selected(option);
                onClose();
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default VerificationSelector;
