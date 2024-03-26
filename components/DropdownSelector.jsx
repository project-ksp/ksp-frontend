import React from "react";

const DropdownSelector = ({ selected, options, onClose }) => {
  return (
    <>
      <div className="absolute text-black w-full">
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md hover:bg-secondary bg-white cursor-pointer"
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

export default DropdownSelector;
