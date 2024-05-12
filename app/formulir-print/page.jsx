import React from "react";
import Image from "next/image";
import { PDFViewer } from "@react-pdf/renderer";

const FormulirPrint = () => {
  return (
    <>
      <iframe
        src="/images/formulir_pendaftaran.pdf"
        frameborder="0"
        height="500px"
        width="100%"
      ></iframe>
    </>
  );
};

export default FormulirPrint;
