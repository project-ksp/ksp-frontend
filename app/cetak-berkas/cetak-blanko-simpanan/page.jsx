"use client";

import React, { useRef, useEffect } from "react";

import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";

const CetakBlankoSimpanan = () => {
  const { data: session, status } = useSession();
  const iframeRef = useRef(null);

  useEffect(() => {
    if (status === "loading") return;
    const handlePrint = () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}documents/blanko-simpanan`;

      fetch(url, {
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      })
        .then((response) => response.blob())
        .then((blob) => {
          // Create a URL for the blob
          const pdfUrl = window.URL.createObjectURL(blob);
          iframeRef.current.src = pdfUrl;

          // Wait for the iframe to load the PDF document
          iframeRef.current.onload = () => {
            setTimeout(() => {
              // Execute print
              iframeRef.current.contentWindow.print();
            }, 100);
          };
        })
        .catch((error) => {
          console.error("Failed to load PDF:", error);
        });
    };
    handlePrint();
  }, [session, status, iframeRef]);

  if (status === "loading") return <Loading />;

  return (
    <iframe
      ref={iframeRef}
      className="w-full h-[50rem]"
      title="PDF frame"
    ></iframe>
  );
};

export default CetakBlankoSimpanan;
