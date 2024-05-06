import React from "react";
import Link from "next/link";
import Image from "next/image";

const CetakBlankoSimpanan = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center">
        <Image
          src={"/images/blanko_simpanan.jpg"}
          alt="Blanko Simpanan"
          width={1116}
          height={1578}
        />
      </div>
      <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center mt-2 ml-auto">
        Print
      </button>
    </div>
  );
};

export default CetakBlankoSimpanan;