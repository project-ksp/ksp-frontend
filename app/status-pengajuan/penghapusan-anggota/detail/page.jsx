"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DropdownSelector from "@/components/DropdownSelector";
import Modal from "@/components/Modal";

const DetailPenghapusanAnggota = () => {
  const [idCabang, setIdCabang] = useState("Pilih Cabang");
  const [statusPernikahan, setStatusPernikahan] = useState("Pilih Status");
  const [jenisKelamin, setJenisKelamin] = useState("Pilih Jenis Kelamin");
  const [agama, setAgama] = useState("Pilih Agama");
  const [pendidikan, setPendidikan] = useState("Pilih Pendidikan Terakhir");
  const [pendidikanOpen, setPendidikanOpen] = useState(false);
  const [agamaOpen, setAgamaOpen] = useState(false);
  const [jenisKelaminOpen, setJenisKelaminOpen] = useState(false);
  const [statusPernikahanOpen, setStatusPernikahanOpen] = useState(false);
  const [idCabangOpen, setIdCabangOpen] = useState(false);
  const [buktiPendukung, setBuktiPendukung] = useState(null);
  return (
    <>
      <div className="bg-white p-[20px] rounded-xl">
        <p className="text-black text-lg mb-[10px] font-bold">Data Diri</p>
        <div className="flex flex-col gap-2">
          <div className="flex w-full gap-2">
            <div className="w-1/3">
              <div>
                <label htmlFor="idCabang">ID Cabang</label>
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
            <div className="w-2/3">
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
            <div className="w-1/4">
              <label htmlFor="alamat">Alamat Lengkap</label>
              <input
                type="text"
                id="alamatCabang"
                name="alamatCabang"
                placeholder="Isi Alamat Lengkap Sesuai KTP"
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
            </div>
            <div className="w-1/4">
              <label htmlFor="kelurahan">Kelurahan/Desa</label>
              <input
                type="text"
                id="kelurahan"
                name="kelurahan"
                placeholder="Isi Sesuai KTP"
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
            </div>
            <div className="w-1/4">
              <label htmlFor="kecamatan">Kecamatan</label>
              <input
                type="text"
                id="kecamatan"
                name="kecamatan"
                placeholder="Isi Sesuai KTP"
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
            </div>
            <div className="w-1/4">
              <label htmlFor="kota">Kabupaten/Kota</label>
              <input
                type="text"
                id="kota"
                name="kota"
                placeholder="Isi Sesuai KTP"
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
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
        </div>
      </div>
      <div className="bg-white p-[20px] rounded-xl">
        <p className="text-black font-bold text-lg mb-[10px]">
          Alasan Penghapusan Anggota
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="w-full">
              <input
                type="text"
                name="alasan"
                id="alasan"
                placeholder="Auto Generated"
                value={"Pinjaman Selesai"}
                readOnly
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center place-self-end">
        <Link href={"/status-pengajuan/penghapusan-anggota/detail/alasan"}>
          Cetak Bukti Pendukung
        </Link>
      </button>
    </>
  );
};

export default DetailPenghapusanAnggota;
