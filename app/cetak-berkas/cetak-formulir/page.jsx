import React from "react";
import Link from "next/link";
import Image from "next/image";

const CetakFormulir = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center">
        <Image
          src={"/images/formulir.png"}
          alt="Formulir"
          width={1116}
          height={1578}
        />
      </div>
      <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center ml-auto mt-2">
        Print
      </button>
    </div>
  );
};

export default CetakFormulir;