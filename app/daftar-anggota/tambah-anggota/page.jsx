"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DropdownSelector from "@/components/DropdownSelector";

const TambahAnggota = () => {
  const [idCabang, setIdCabang] = useState("Pilih Cabang");
  const [statusPernikahan, setStatusPernikahan] = useState("Pilih Status");
  const [jenisKelamin, setJenisKelamin] = useState("Pilih Jenis Kelamin");
  const [agama, setAgama] = useState("Pilih Agama");
  const [pendidikan, setPendidikan] = useState("Pilih Pendidikan Terakhir");
  const [fotoDiri, setFotoDiri] = useState(null);
  const [fotoKtp, setFotoKtp] = useState(null);
  const [pendidikanOpen, setPendidikanOpen] = useState(false);
  const [agamaOpen, setAgamaOpen] = useState(false);
  const [jenisKelaminOpen, setJenisKelaminOpen] = useState(false);
  const [statusPernikahanOpen, setStatusPernikahanOpen] = useState(false);
  const [idCabangOpen, setIdCabangOpen] = useState(false);

  return (
    <form action="">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-black">Tambah Anggota</h2>
        <div className="flex gap-5">
          <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center">
            Anggota Baru
          </button>
          <button className="bg-white text-primary w-[228px] h-[48px] rounded-md text-center">
            Anggota Lama
          </button>
        </div>
        <div className="bg-white p-[20px] rounded-xl">
          <p className="text-black font-regular text-lg mb-[10px]">
            Silahkan lengkapi form berikut dengan benar.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex w-full gap-2">
              <div className="w-1/3">
                <div>
                  <label htmlFor="idCabang">Cabang</label>
                  <button
                    type="button"
                    name="idCabang"
                    id="idCabang"
                    className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-[#d9d9d9] bg-transparent focus:outline-none ${
                      idCabang === "Pilih Cabang"
                        ? "text-[#d9d9d9]"
                        : "text-primary"
                    }`}
                    onClick={() => setIdCabangOpen(!idCabangOpen)}
                  >
                    {idCabang}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.2902 9.31002C17.1977 9.21732 17.0878 9.14377 16.9668 9.09359C16.8459 9.04341 16.7162 9.01758 16.5852 9.01758C16.4543 9.01758 16.3246 9.04341 16.2036 9.09359C16.0826 9.14377 15.9727 9.21732 15.8802 9.31002L12.0002 13.19L8.12022 9.31002C7.93324 9.12304 7.67965 9.018 7.41522 9.018C7.1508 9.018 6.8972 9.12304 6.71022 9.31002C6.52324 9.497 6.4182 9.7506 6.4182 10.015C6.4182 10.2794 6.52324 10.533 6.71022 10.72L11.3002 15.31C11.3927 15.4027 11.5026 15.4763 11.6236 15.5265C11.7446 15.5766 11.8743 15.6025 12.0052 15.6025C12.1362 15.6025 12.2659 15.5766 12.3868 15.5265C12.5078 15.4763 12.6177 15.4027 12.7102 15.31L17.3002 10.72C17.6802 10.34 17.6802 9.70002 17.2902 9.31002Z"
                        fill="black"
                      />
                    </svg>
                  </button>

                  {idCabangOpen && (
                    <div className="w-full relative">
                      <DropdownSelector
                        selected={(option) => setIdCabang(option)}
                        options={["Cabang 01", "Cabang 02", "Cabang 03"]}
                        onClose={() => setIdCabangOpen(false)}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-1/3">
                <label htmlFor="namaKetuaKelompok">Nama Ketua Kelompok</label>
                <input
                  type="text"
                  id="namaKetuaKelompok"
                  name="namaKetuaKelompok"
                  placeholder="Isi Nama Ketua Kelompok"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/3">
                <label htmlFor="idKetuaKelompok">ID Ketua Kelompok</label>
                <input
                  type="text"
                  id="idKetuaKelompok"
                  name="idKetuaKelompok"
                  placeholder="Isi ID Ketua Kelompok"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex w-full gap-2">
              <div className="w-1/3">
                <label htmlFor="namaLengkap">Nama Lengkap</label>
                <input
                  type="text"
                  id="namaLengkap"
                  name="namaLengkap"
                  placeholder="Isi"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/3">
                <label htmlFor="statusPernikahan">Status Pernikahan</label>
                <button
                  type="button"
                  name="statusPernikahan"
                  id="statusPernikahan"
                  className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-[#d9d9d9] bg-transparent focus:outline-none ${
                    statusPernikahan === "Pilih Status"
                      ? "text-[#d9d9d9]"
                      : "text-primary"
                  }`}
                  onClick={() => setStatusPernikahanOpen(!statusPernikahanOpen)}
                >
                  {statusPernikahan}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.2902 9.31002C17.1977 9.21732 17.0878 9.14377 16.9668 9.09359C16.8459 9.04341 16.7162 9.01758 16.5852 9.01758C16.4543 9.01758 16.3246 9.04341 16.2036 9.09359C16.0826 9.14377 15.9727 9.21732 15.8802 9.31002L12.0002 13.19L8.12022 9.31002C7.93324 9.12304 7.67965 9.018 7.41522 9.018C7.1508 9.018 6.8972 9.12304 6.71022 9.31002C6.52324 9.497 6.4182 9.7506 6.4182 10.015C6.4182 10.2794 6.52324 10.533 6.71022 10.72L11.3002 15.31C11.3927 15.4027 11.5026 15.4763 11.6236 15.5265C11.7446 15.5766 11.8743 15.6025 12.0052 15.6025C12.1362 15.6025 12.2659 15.5766 12.3868 15.5265C12.5078 15.4763 12.6177 15.4027 12.7102 15.31L17.3002 10.72C17.6802 10.34 17.6802 9.70002 17.2902 9.31002Z"
                      fill="black"
                    />
                  </svg>
                </button>

                {statusPernikahanOpen && (
                  <div className="w-full relative">
                    <DropdownSelector
                      selected={(option) => setStatusPernikahan(option)}
                      options={["Sudah Menikah", "Belum Menikah"]}
                      onClose={() => setStatusPernikahanOpen(false)}
                    />
                  </div>
                )}
              </div>
              <div className="w-1/3">
                <label htmlFor="namaSuamiIstri">Nama Suami/Istri</label>
                <input
                  type="text"
                  id="namaSuamiIstri"
                  name="namaSuamiIstri"
                  placeholder="*Jika Sudah Menikah"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex w-full gap-2">
              <div className="w-1/4">
                <label htmlFor="tempatLahir">Isi Tempat Lahir Sesuai KTP</label>
                <input
                  type="text"
                  id="tempatLahir"
                  name="tempatLahir"
                  placeholder="Isi Tempat Lahir Sesuai KTP"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="tanggalLahir">Tanggal Lahir</label>
                <input
                  type="date"
                  id="tanggalLahir"
                  name="tanggalLahir"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] text-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="umur">Umur</label>
                <input
                  type="text"
                  id="umur"
                  name="umur"
                  placeholder="Auto generate"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                  disabled
                />
              </div>
              <div className="w-1/5">
                <label htmlFor="jenisKelamin">Jenis Kelamin</label>
                <button
                  type="button"
                  name="jenisKelamin"
                  id="jenisKelamin"
                  className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-[#d9d9d9] bg-transparent focus:outline-none ${
                    jenisKelamin === "Pilih Jenis Kelamin"
                      ? "text-[#d9d9d9]"
                      : "text-primary"
                  }`}
                  onClick={() => setJenisKelaminOpen(!jenisKelaminOpen)}
                >
                  {jenisKelamin}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.2902 9.31002C17.1977 9.21732 17.0878 9.14377 16.9668 9.09359C16.8459 9.04341 16.7162 9.01758 16.5852 9.01758C16.4543 9.01758 16.3246 9.04341 16.2036 9.09359C16.0826 9.14377 15.9727 9.21732 15.8802 9.31002L12.0002 13.19L8.12022 9.31002C7.93324 9.12304 7.67965 9.018 7.41522 9.018C7.1508 9.018 6.8972 9.12304 6.71022 9.31002C6.52324 9.497 6.4182 9.7506 6.4182 10.015C6.4182 10.2794 6.52324 10.533 6.71022 10.72L11.3002 15.31C11.3927 15.4027 11.5026 15.4763 11.6236 15.5265C11.7446 15.5766 11.8743 15.6025 12.0052 15.6025C12.1362 15.6025 12.2659 15.5766 12.3868 15.5265C12.5078 15.4763 12.6177 15.4027 12.7102 15.31L17.3002 10.72C17.6802 10.34 17.6802 9.70002 17.2902 9.31002Z"
                      fill="black"
                    />
                  </svg>
                </button>

                {jenisKelaminOpen && (
                  <div className="w-full relative">
                    <DropdownSelector
                      selected={(option) => setJenisKelamin(option)}
                      options={["Laki - Laki", "Perempuan"]}
                      onClose={() => setJenisKelaminOpen(false)}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full gap-2">
              <div className="w-2/5">
                <label htmlFor="nik">NIK</label>
                <input
                  type="text"
                  id="nik"
                  name="nik"
                  placeholder="NIK Harus Sesuai KTP dan Terdaftar di Dukcapil"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/5">
                <label htmlFor="agama">Agama</label>
                <button
                  type="button"
                  name="agama"
                  id="agama"
                  className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-[#d9d9d9] bg-transparent focus:outline-none ${
                    agama === "Pilih Agama" ? "text-[#d9d9d9]" : "text-primary"
                  }`}
                  onClick={() => setAgamaOpen(!agamaOpen)}
                >
                  {agama}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.2902 9.31002C17.1977 9.21732 17.0878 9.14377 16.9668 9.09359C16.8459 9.04341 16.7162 9.01758 16.5852 9.01758C16.4543 9.01758 16.3246 9.04341 16.2036 9.09359C16.0826 9.14377 15.9727 9.21732 15.8802 9.31002L12.0002 13.19L8.12022 9.31002C7.93324 9.12304 7.67965 9.018 7.41522 9.018C7.1508 9.018 6.8972 9.12304 6.71022 9.31002C6.52324 9.497 6.4182 9.7506 6.4182 10.015C6.4182 10.2794 6.52324 10.533 6.71022 10.72L11.3002 15.31C11.3927 15.4027 11.5026 15.4763 11.6236 15.5265C11.7446 15.5766 11.8743 15.6025 12.0052 15.6025C12.1362 15.6025 12.2659 15.5766 12.3868 15.5265C12.5078 15.4763 12.6177 15.4027 12.7102 15.31L17.3002 10.72C17.6802 10.34 17.6802 9.70002 17.2902 9.31002Z"
                      fill="black"
                    />
                  </svg>
                </button>

                {agamaOpen && (
                  <div className="w-full relative">
                    <DropdownSelector
                      selected={(option) => setAgama(option)}
                      options={[
                        "Islam",
                        "Kristen",
                        "Katolik",
                        "Hindu",
                        "Budha",
                        "Konghucu",
                      ]}
                      onClose={() => setAgamaOpen(false)}
                    />
                  </div>
                )}
              </div>
              <div className="w-2/5">
                <label htmlFor="pekerjaan">Pekerjaan</label>
                <input
                  type="text"
                  id="pekerjaan"
                  name="pekerjaan"
                  placeholder="Isi Sesuai KTP"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex w-full gap-2">
              <div className="w-2/5">
                <div>
                  <label htmlFor="alamat">Alamat Lengkap</label>
                  <input
                    type="text"
                    id="alamatCabang"
                    name="alamatCabang"
                    placeholder="Isi Alamat Lengkap Sesuai KTP"
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex w-3/5 gap-3">
                <div>
                  <label htmlFor="kelurahan">Kelurahan/Desa</label>
                  <input
                    type="text"
                    id="kelurahan"
                    name="kelurahan"
                    placeholder="Isi Sesuai KTP"
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="kecamatan">Kecamatan</label>
                  <input
                    type="text"
                    id="kecamatan"
                    name="kecamatan"
                    placeholder="Isi Sesuai KTP"
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="kota">Kabupaten/Kota</label>
                  <input
                    type="text"
                    id="kota"
                    name="kota"
                    placeholder="Isi Sesuai KTP"
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="kodePos">Kode Pos</label>
                  <input
                    type="text"
                    id="kodePos"
                    name="kodePos"
                    placeholder="Isi Sesuai KTP"
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2">
              <div className="w-2/5">
                <label htmlFor="pendidikan">Pendidikan Terakhir</label>
                <button
                  type="button"
                  name="pendidikan"
                  id="pendidikan"
                  className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-[#d9d9d9] bg-transparent focus:outline-none ${
                    pendidikan === "Pilih Pendidikan Terakhir"
                      ? "text-[#d9d9d9]"
                      : "text-primary"
                  }`}
                  onClick={() => setPendidikanOpen(!pendidikanOpen)}
                >
                  {pendidikan}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.2902 9.31002C17.1977 9.21732 17.0878 9.14377 16.9668 9.09359C16.8459 9.04341 16.7162 9.01758 16.5852 9.01758C16.4543 9.01758 16.3246 9.04341 16.2036 9.09359C16.0826 9.14377 15.9727 9.21732 15.8802 9.31002L12.0002 13.19L8.12022 9.31002C7.93324 9.12304 7.67965 9.018 7.41522 9.018C7.1508 9.018 6.8972 9.12304 6.71022 9.31002C6.52324 9.497 6.4182 9.7506 6.4182 10.015C6.4182 10.2794 6.52324 10.533 6.71022 10.72L11.3002 15.31C11.3927 15.4027 11.5026 15.4763 11.6236 15.5265C11.7446 15.5766 11.8743 15.6025 12.0052 15.6025C12.1362 15.6025 12.2659 15.5766 12.3868 15.5265C12.5078 15.4763 12.6177 15.4027 12.7102 15.31L17.3002 10.72C17.6802 10.34 17.6802 9.70002 17.2902 9.31002Z"
                      fill="black"
                    />
                  </svg>
                </button>

                {pendidikanOpen && (
                  <div className="w-full relative">
                    <DropdownSelector
                      selected={(option) => setPendidikan(option)}
                      options={["S1", "SMA"]}
                      onClose={() => setPendidikanOpen(false)}
                    />
                  </div>
                )}
              </div>
              <div className="w-3/5">
                <label htmlFor="noHp">No. Hp (WhatsApp)</label>
                <input
                  type="text"
                  id="noHp"
                  name="noHp"
                  placeholder="Isi Nomor HP (WhatsApp)"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex w-full gap-2">
              <label htmlFor="fotoDiri" className="flex w-2/5">
                {fotoDiri === null ? (
                  <div className="flex-grow">
                    <Image
                      src={"/images/image_none.jpg"}
                      alt="Image_none"
                      width={80}
                      height={80}
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="flex-grow">
                    <Image
                      src={URL.createObjectURL(fotoDiri)}
                      alt="Image_none"
                      width={80}
                      height={80}
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                )}
                <div className="flex flex-col ml-2 flex-grow">
                  <p>Upload Foto Diri</p>
                  <div className="border border-[#d9d9d9] rounded-lg px-[10px] py-[2px] flex mt-1 items-center">
                    <div className="w-[131px] border border-secondary rounded-lg text-primary flex items-center">
                      <p>Tambah Foto</p>
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-3"
                      >
                        <path
                          d="M3.25 14C2.78587 14 2.34075 13.8156 2.01256 13.4874C1.68437 13.1592 1.5 12.7141 1.5 12.25V9.75C1.5 9.55109 1.57902 9.36032 1.71967 9.21967C1.86032 9.07902 2.05109 9 2.25 9C2.44891 9 2.63968 9.07902 2.78033 9.21967C2.92098 9.36032 3 9.55109 3 9.75V12.25C3 12.388 3.112 12.5 3.25 12.5H13.75C13.8163 12.5 13.8799 12.4737 13.9268 12.4268C13.9737 12.3799 14 12.3163 14 12.25V9.75C14 9.55109 14.079 9.36032 14.2197 9.21967C14.3603 9.07902 14.5511 9 14.75 9C14.9489 9 15.1397 9.07902 15.2803 9.21967C15.421 9.36032 15.5 9.55109 15.5 9.75V12.25C15.5 12.7141 15.3156 13.1592 14.9874 13.4874C14.6592 13.8156 14.2141 14 13.75 14H3.25Z"
                          fill="#004080"
                        />
                        <path
                          d="M12.2795 4.72C12.3491 4.7896 12.4043 4.87223 12.442 4.96316C12.4797 5.0541 12.4991 5.15157 12.4991 5.25C12.4991 5.34843 12.4797 5.44589 12.442 5.53683C12.4043 5.62777 12.3491 5.7104 12.2795 5.78C12.2099 5.8496 12.1273 5.90481 12.0364 5.94248C11.9454 5.98014 11.848 5.99953 11.7495 5.99953C11.6511 5.99953 11.5536 5.98014 11.4627 5.94248C11.3718 5.90481 11.2891 5.8496 11.2195 5.78L9.24953 3.811V9.5C9.24953 9.69891 9.17052 9.88968 9.02986 10.0303C8.88921 10.171 8.69845 10.25 8.49953 10.25C8.30062 10.25 8.10986 10.171 7.9692 10.0303C7.82855 9.88968 7.74953 9.69891 7.74953 9.5V3.811L5.77953 5.78C5.70993 5.8496 5.6273 5.90481 5.53637 5.94248C5.44543 5.98014 5.34796 5.99953 5.24953 5.99953C5.1511 5.99953 5.05364 5.98014 4.9627 5.94248C4.87176 5.90481 4.78913 5.8496 4.71953 5.78C4.64993 5.7104 4.59472 5.62777 4.55705 5.53683C4.51939 5.44589 4.5 5.34843 4.5 5.25C4.5 5.15157 4.51939 5.0541 4.55705 4.96316C4.59472 4.87223 4.64993 4.7896 4.71953 4.72L7.96953 1.47C8.0391 1.40033 8.12171 1.34507 8.21266 1.30736C8.3036 1.26965 8.40108 1.25024 8.49953 1.25024C8.59798 1.25024 8.69547 1.26965 8.78641 1.30736C8.87735 1.34507 8.95997 1.40033 9.02953 1.47L12.2795 4.72Z"
                          fill="#004080"
                        />
                      </svg>
                    </div>
                    <p className="text-[#3c3c3c] ml-[30px]">
                      {fotoDiri === null
                        ? "Tidak ada file terpilih"
                        : fotoDiri.name}
                    </p>
                  </div>
                  <input
                    type="file"
                    name="fotoDiri"
                    id="fotoDiri"
                    hidden
                    onChange={(e) => setFotoDiri(e.target.files[0])}
                  />
                </div>
              </label>
              <label htmlFor="fotoKtp" className="flex w-2/5">
                {fotoKtp === null ? (
                  <div className="flex-grow">
                    <Image
                      src={"/images/image_none.jpg"}
                      alt="Image_none"
                      width={80}
                      height={80}
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="flex-grow">
                    <Image
                      src={URL.createObjectURL(fotoDiri)}
                      alt="Image_none"
                      width={80}
                      height={80}
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                )}
                <div className="flex flex-col ml-2 flex-grow">
                  <p>Upload Foto KTP</p>
                  <div className="border border-[#d9d9d9] rounded-lg px-[10px] py-[2px] flex mt-1 items-center">
                    <div className="py-[2px] w-[131px] border border-secondary rounded-lg text-primary flex items-center justify-around">
                      <p>Tambah Foto</p>
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-3"
                      >
                        <path
                          d="M3.25 14C2.78587 14 2.34075 13.8156 2.01256 13.4874C1.68437 13.1592 1.5 12.7141 1.5 12.25V9.75C1.5 9.55109 1.57902 9.36032 1.71967 9.21967C1.86032 9.07902 2.05109 9 2.25 9C2.44891 9 2.63968 9.07902 2.78033 9.21967C2.92098 9.36032 3 9.55109 3 9.75V12.25C3 12.388 3.112 12.5 3.25 12.5H13.75C13.8163 12.5 13.8799 12.4737 13.9268 12.4268C13.9737 12.3799 14 12.3163 14 12.25V9.75C14 9.55109 14.079 9.36032 14.2197 9.21967C14.3603 9.07902 14.5511 9 14.75 9C14.9489 9 15.1397 9.07902 15.2803 9.21967C15.421 9.36032 15.5 9.55109 15.5 9.75V12.25C15.5 12.7141 15.3156 13.1592 14.9874 13.4874C14.6592 13.8156 14.2141 14 13.75 14H3.25Z"
                          fill="#004080"
                        />
                        <path
                          d="M12.2795 4.72C12.3491 4.7896 12.4043 4.87223 12.442 4.96316C12.4797 5.0541 12.4991 5.15157 12.4991 5.25C12.4991 5.34843 12.4797 5.44589 12.442 5.53683C12.4043 5.62777 12.3491 5.7104 12.2795 5.78C12.2099 5.8496 12.1273 5.90481 12.0364 5.94248C11.9454 5.98014 11.848 5.99953 11.7495 5.99953C11.6511 5.99953 11.5536 5.98014 11.4627 5.94248C11.3718 5.90481 11.2891 5.8496 11.2195 5.78L9.24953 3.811V9.5C9.24953 9.69891 9.17052 9.88968 9.02986 10.0303C8.88921 10.171 8.69845 10.25 8.49953 10.25C8.30062 10.25 8.10986 10.171 7.9692 10.0303C7.82855 9.88968 7.74953 9.69891 7.74953 9.5V3.811L5.77953 5.78C5.70993 5.8496 5.6273 5.90481 5.53637 5.94248C5.44543 5.98014 5.34796 5.99953 5.24953 5.99953C5.1511 5.99953 5.05364 5.98014 4.9627 5.94248C4.87176 5.90481 4.78913 5.8496 4.71953 5.78C4.64993 5.7104 4.59472 5.62777 4.55705 5.53683C4.51939 5.44589 4.5 5.34843 4.5 5.25C4.5 5.15157 4.51939 5.0541 4.55705 4.96316C4.59472 4.87223 4.64993 4.7896 4.71953 4.72L7.96953 1.47C8.0391 1.40033 8.12171 1.34507 8.21266 1.30736C8.3036 1.26965 8.40108 1.25024 8.49953 1.25024C8.59798 1.25024 8.69547 1.26965 8.78641 1.30736C8.87735 1.34507 8.95997 1.40033 9.02953 1.47L12.2795 4.72Z"
                          fill="#004080"
                        />
                      </svg>
                    </div>
                    <p className="text-[#3c3c3c] ml-[30px]">
                      {fotoKtp === null
                        ? "Tidak ada file terpilih"
                        : fotoKtp.name}
                    </p>
                  </div>
                  <input
                    type="file"
                    name="fotoKtp"
                    id="fotoKtp"
                    hidden
                    onChange={(e) => setFotoKtp(e.target.files[0])}
                  />
                </div>
              </label>
              <div className="w-1/5">
                <label htmlFor="namaTeller">Nama Petugas/Teller</label>
                <input
                  type="text"
                  id="namaTeller"
                  name="namaTeller"
                  placeholder="Isi Nama Petugas/Teller"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 place-self-end">
          <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center">
            <Link href={"/daftar-anggota/tambah-anggota/simpanan"}>
              Tambah Simpanan
            </Link>
          </button>
          <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center">
            Tambah Pinjaman
          </button>
        </div>
      </div>
    </form>
  );
};

export default TambahAnggota;
