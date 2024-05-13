import React from "react";
import Link from "next/link";
import Image from "next/image";

const CetakBlankoPinjaman = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center">
        <Image
          src={"/images/blanko_pinjaman.jpg"}
          alt="Blanko Pinjaman"
          width={1116}
          height={1578}
        />
      </div>
      <Link href={"/documents/blanko_pinjaman.pdf"} className="ml-auto ">
        <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center mt-2">
          Print
        </button>
      </Link>
    </div>
  );
};

export default CetakBlankoPinjaman;
