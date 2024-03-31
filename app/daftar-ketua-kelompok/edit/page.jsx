"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/Modal";

const EditKetuaKelompok = () => {
  const [showProsesData, setProsesData] = useState(false);
  const [showBerhasil, setBerhasil] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">Daftar Ketua Kelompok</h2>
        <div className="flex gap-4">
          <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center">
            <Link href={"/daftar-ketua-kelompok"}>Kembali</Link>
          </button>
          <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center">
            <Link href={"/daftar-ketua-kelompok/edit"}>Edit Data Diri</Link>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl p-[20px]">
        <p className="text-black font-bold text-lg mb-[10px]">
          Biodata Lengkap Ketua Kelompok
        </p>
        <div className="flex gap-5 w-full">
          <div className="w-[300px]">
            <Image
              src={"/images/dummy.jpg"}
              alt="Foto Ketua Kelompok"
              width={300}
              height={400}
              quality={100}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="flex-1">
              <label htmlFor="idKetuaKelompok">ID Ketua Kelompok</label>
              <input
                type="text"
                id="idKetuaKelompok"
                name="idKetuaKelompok"
                placeholder="Isi ID Ketua Kelompok"
                value={"01281"}
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="namaKetuaKelompok">Nama Ketua Kelompok</label>
              <input
                type="text"
                id="namaKetuaKelompok"
                name="namaKetuaKelompok"
                placeholder="Isi Nama Ketua Kelompok"
                value={"M. Syakur"}
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="nikKetuaKelompok">NIK</label>
              <input
                type="text"
                id="nikKetuaKelompok"
                name="nikKetuaKelompok"
                placeholder="Isi Nik Ketua Kelompok"
                value={"358804128500004"}
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
            </div>
            <div className="flex gap-3">
              <div className="w-1/2">
                <label htmlFor="agamaKetuaKelompok">Agama</label>
                <input
                  type="text"
                  id="agamaKetuaKelompok"
                  name="agamaKetuaKelompok"
                  placeholder="Isi Agama Ketua Kelompok"
                  value={"Islam"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="pendidikanKetuaKelompok">
                  Pendidikan Terakhir
                </label>
                <input
                  type="text"
                  id="pendidikanKetuaKelompok"
                  name="pendidikanKetuaKelompok"
                  placeholder="Isi Pendidikan Ketua Kelompok"
                  value={"Islam"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/4">
                <label htmlFor="tempatLahirKetuaKelompok">Tempat Lahir</label>
                <input
                  type="text"
                  id="tempatLahirKetuaKelompok"
                  name="tempatLahirKetuaKelompok"
                  placeholder="Isi Tempat Lahir Ketua Kelompok"
                  value={"Malang"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="tanggalLahirKetuaKelompok">Tanggal Lahir</label>
                <input
                  type="date"
                  id="tanggalLahirKetuaKelompok"
                  name="tanggalLahirKetuaKelompok"
                  placeholder="Isi Tanggal Lahir Ketua Kelompok"
                  value={"Kediri"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="umurKetuaKelompok">Umur</label>
                <input
                  type="text"
                  id="umurKetuaKelompok"
                  name="umurKetuaKelompok"
                  placeholder="Isi Umur Ketua Kelompok"
                  value={"18"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="jenisKelaminKetuaKelompok">Jenis Kelamin</label>
                <input
                  type="text"
                  id="jenisKelaminKetuaKelompok"
                  name="jenisKelaminKetuaKelompok"
                  placeholder="Isi Jenis Kelamin Ketua Kelompok"
                  value={"Laki Laki"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/2">
                <label htmlFor="alamatLengkapKetuaKelompok">
                  Alamat Lengkap
                </label>
                <input
                  type="text"
                  id="alamatLengkapKetuaKelompok"
                  name="alamatLengkapKetuaKelompok"
                  placeholder="Isi Alamat Lengkap Ketua Kelompok"
                  value={"Jalan Taman Indonesia Indah"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="noHpKetuaKelompok">No. HP(WhatsApp)</label>
                <input
                  type="text"
                  id="noHpKetuaKelompok"
                  name="noHpKetuaKelompok"
                  placeholder="Isi NoHp Ketua Kelompok"
                  value={"087241698241"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/4">
                <label htmlFor="kelurahanKetuaKelompok">Kelurahan/Desa</label>
                <input
                  type="text"
                  id="kelurahanKetuaKelompok"
                  name="kelurahanKetuaKelompok"
                  placeholder="Isi Kelurahan/Desa Ketua Kelompok"
                  value={"Sumbersari"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="kecamatanKetuaKelompok">Kecamatan</label>
                <input
                  type="date"
                  id="kecamatanKetuaKelompok"
                  name="kecamatanKetuaKelompok"
                  placeholder="Isi Kecamatan Ketua Kelompok"
                  value={"Jatimulyo"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="kabupatenKetuaKelompok">Kabupaten/Kota</label>
                <input
                  type="text"
                  id="kabupatenKetuaKelompok"
                  name="kabupatenKetuaKelompok"
                  placeholder="Isi Kabupaten Ketua Kelompok"
                  value={"Kediri"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="kodePosKetuaKelompok">Kode Pos</label>
                <input
                  type="text"
                  id="kodePosKetuaKelompok"
                  name="kodePosKetuaKelompok"
                  placeholder="Isi Jenis Kelamin Ketua Kelompok"
                  value={"65182"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="jumlahAnggota">Jumlah Anggota</label>
              <input
                type="text"
                id="jumlahAnggota"
                name="jumlahAnggota"
                placeholder="Isi Jenis Kelamin Ketua Kelompok"
                value={"5"}
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 place-self-end">
        <button
          type="button"
          onClick={() => setProsesData(true)}
          className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center"
        >
          Proses Data
        </button>
      </div>
      <Modal isVisible={showProsesData} onClose={() => setProsesData(false)}>
        <h3 className="text-xl text-center font-bold text-black">
          Proses Data?
        </h3>
        <p className="text-base text-black font-regular text-center mb-4">
          Anda yakin telah mengisikan data dengan benar dan sesuai?
        </p>
        <button
          type="submit"
          className="w-[450px] px-[20px] py-[12px] text-white bg-primary rounded-lg mx-auto"
          onClick={(e) => {
            setProsesData(false);
            setBerhasil(true);
          }}
        >
          Proses Data
        </button>
      </Modal>
      <Modal isVisible={showBerhasil} onClose={() => setBerhasil(false)}>
        <div className="w-[98px] h-[98px] rounded-full bg-primary place-self-center relative">
          <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 right-0 left-0 m-auto"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.9622 8.30487C22.0269 5.93076 14.8128 7.27682 10.608 11.9082C8.54111 14.1835 7.24452 17.0533 6.90334 20.1082C6.56216 23.1632 7.1935 26.2479 8.70746 28.9232C10.2214 31.5984 12.5408 33.7279 15.3354 35.0082C18.13 36.2886 21.2573 36.6547 24.2721 36.0543C30.3567 34.8443 34.8592 29.357 36.0597 23.3543C36.2402 22.4519 37.118 21.8667 38.0204 22.0472C38.9228 22.2277 39.508 23.1055 39.3276 24.0079C37.9245 31.0233 32.6109 37.7938 24.9225 39.3228C21.2201 40.06 17.3794 39.6104 13.9473 38.038C10.5151 36.4655 7.66647 33.8502 5.80708 30.5645C3.94769 27.2789 3.1723 23.4903 3.59132 19.7384C4.01033 15.9865 5.60231 12.4625 8.14058 9.66804M8.14058 9.66804C13.3816 3.89568 22.1173 2.37758 29.1999 5.21062C30.0543 5.5524 30.4699 6.52214 30.1281 7.37659C29.7864 8.23105 28.8166 8.64665 27.9622 8.30487"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40.8946 7.60151C41.5645 8.23243 41.5962 9.287 40.9652 9.95696L23.2868 28.7289C22.9779 29.0569 22.5493 29.2459 22.0987 29.2526C21.6482 29.2594 21.2141 29.0834 20.8955 28.7648L14.3865 22.2558C13.7358 21.605 13.7358 20.55 14.3865 19.8993C15.0372 19.2485 16.0923 19.2485 16.743 19.8993L22.0379 25.1941L38.5391 7.67217C39.17 7.00222 40.2246 6.97058 40.8946 7.60151Z"
              fill="white"
            />
          </svg>
        </div>
        <h4 className="text-black text-xl font-bold text-center">
          Data Berhasil Disimpan
        </h4>
        <p className="text-black font-regular text-base text-center mb-3">
          Silahkan Cek Data Anda
        </p>
        <button
          type="button"
          className="w-[450px] px-[20px] py-[12px] text-white bg-primary rounded-lg mx-auto"
          onClick={(e) => {
            setBerhasil(false);
          }}
        >
          OK
        </button>
      </Modal>
    </div>
  );
};

export default EditKetuaKelompok;
