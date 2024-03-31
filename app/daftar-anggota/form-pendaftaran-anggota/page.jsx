import React from "react";
import Image from "next/image";

const FormSimpananPinjaman = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-title-medium font-bold text-black">
        Cetak Formulir Pendaftaran Anggota
      </h2>
      <button
        type="button"
        className="w-[224px] h-[48px] text-white bg-primary rounded-md"
      >
        Cetak Formulir
      </button>

      <div className="flex justify-center">
        <Image
          src={"/images/formulir.png"}
          width={1116}
          height={1578}
          alt="Formulir Pendaftaran Anggota"
          priority
        />
      </div>
    </div>
  );
};

export default FormSimpananPinjaman;
