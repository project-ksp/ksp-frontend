"use client";

import React from "react";
import { signOut } from "next-auth/react";

const Error = ({ error, reset }) => {
  return (
    <main className="flex flex-col gap-1 justify-center items-center w-full min-h-screen bg-mainBg">
      <p className="text-red-status-1 font-medium text-xl">
        Terdapat Kesalahan
      </p>
      <h3 className="font-bold text-title-large text-black">{error.message}</h3>
      <p className="text-filled-color font-medium text-lg w-1/2 text-center">
        <b className="font-bold">Periksa koneksi anda</b> dan Coba lagi atau
        anda dapat melakukan login ulang. Hubungi kontak support jika kesalahan
        masih terjadi
      </p>
      <div className="flex gap-10 mt-8">
        <button
          type="button"
          className="py-2 px-3 border border-black rounded-lg hover:border-primary hover:text-primary hover:scale-105 transition duration-300"
          onClick={() => reset()}
        >
          Coba lagi
        </button>
        <button
          type="button"
          className="py-2 px-3 border border-black rounded-lg hover:border-primary hover:text-primary hover:scale-105 transition duration-300"
          onClick={() => signOut()}
        >
          Login ulang
        </button>
      </div>
    </main>
  );
};

export default Error;
