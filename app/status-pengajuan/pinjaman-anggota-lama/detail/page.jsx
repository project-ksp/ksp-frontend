"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DropdownSelector from "@/components/DropdownSelector";
import Modal from "@/components/Modal";

const DetailPinjamanAnggotaBaru = () => {
  const [showProsesData, setProsesData] = useState(false);
  const [showBerhasil, setBerhasil] = useState(false);
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
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">
          Detail Pengajuan Pinjaman
        </h2>
        <div className="flex gap-4">
          <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center">
            <Link href={"/status-pengajuan/pinjaman-anggota-lama"}>
              Kembali
            </Link>
          </button>
          <button
            onClick={() => setProsesData(true)}
            className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center"
          >
            Submit Data
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl p-[20px]">
        <p className="text-black font-bold text-lg mb-[10px]">
          Biodata Lengkap Anggota
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <Image
              src={"/images/dummy.jpg"}
              width={90}
              height={120}
              alt="Foto Diri"
              className="mr-[25px] rounded-md"
            />
            <div className="flex flex-col gap-2">
              <p className="text-xl text-black">Ifadatul K</p>
              <p className="text-lg text-black">01-2024-12345</p>
              <div className="bg-green-status-1 text-white text-center my-[8px] rounded-lg  w-[86px]">
                Aktif
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <label htmlFor="tempatLahir">Tempat Lahir</label>
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
        </div>
      </div>
      <div className="bg-white p-[20px] rounded-xl">
        <p className="text-black font-bold text-lg mb-[10px]">
          Detail Simpanan
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex-1">
            <label htmlFor="simpananPokok">Simpanan Pokok</label>
            <input
              type="text"
              name="simpananPokok"
              id="simpananPokok"
              placeholder="Auto Generate"
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
              disabled
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="simpananWajib">Simpanan Wajib</label>
            <div className="flex mt-2 gap-3">
              <div className="flex-grow">
                <label htmlFor="bulan1">Bulan Ke-</label>
                <input
                  type="text"
                  name="bulan1"
                  id="bulan1"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
              <div className="flex-grow">
                <label htmlFor="bulan1">Bulan Ke-</label>
                <input
                  type="text"
                  name="bulan1"
                  id="bulan1"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
              <div className="flex-grow">
                <label htmlFor="bulan1">Bulan Ke-</label>
                <input
                  type="text"
                  name="bulan1"
                  id="bulan1"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
              <div className="flex-grow">
                <label htmlFor="bulan1">Bulan Ke-</label>
                <input
                  type="text"
                  name="bulan1"
                  id="bulan1"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
              <div className="flex-grow">
                <label htmlFor="bulan1">Bulan Ke-</label>
                <input
                  type="text"
                  name="bulan1"
                  id="bulan1"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="simpananSukarela">Simpanan Sukarela</label>
            <input
              type="text"
              name="simpananSukarela"
              id="simpananSukarela"
              placeholder="Auto Generated"
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-[20px] rounded-xl">
        <p className="text-black font-bold text-lg mb-[10px]">
          Detail Pinjaman Sebelumnya
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="min-w-[175px]">
              <div>
                <label htmlFor="idCabang">ID Cabang</label>
                <input
                  type="text"
                  name="idCabang"
                  id="idCabang"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
            </div>
            <div className="min-w-[290px]">
              <div>
                <label htmlFor="jumlahPinjaman">Jumlah Pinjaman</label>
                <input
                  type="text"
                  name="jumlahPinjaman"
                  id="jumlahPinjaman"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <label htmlFor="namaKetuaKelompok">Nama Ketua Kelompok</label>
                <input
                  type="text"
                  name="namaKetuaKelompok"
                  id="namaKetuaKelompok"
                  placeholder="Isi Nama Ketua Kelompok"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <label htmlFor="idKetuaKelompok">ID Ketua Kelompok</label>
                <input
                  type="text"
                  name="idKetuaKelompok"
                  id="idKetuaKelompok"
                  placeholder="Isi ID Ketua Kelompok"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="min-w-[175px]">
              <div>
                <label htmlFor="idCabang">ID Cabang</label>
                <input
                  type="text"
                  name="idCabang"
                  id="idCabang"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
            </div>
            <div className="min-w-[290px]">
              <div>
                <label htmlFor="jumlahPinjaman">Jumlah Pinjaman</label>
                <input
                  type="text"
                  name="jumlahPinjaman"
                  id="jumlahPinjaman"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <label htmlFor="namaKetuaKelompok">Nama Ketua Kelompok</label>
                <input
                  type="text"
                  name="namaKetuaKelompok"
                  id="namaKetuaKelompok"
                  placeholder="Isi Nama Ketua Kelompok"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <label htmlFor="idKetuaKelompok">ID Ketua Kelompok</label>
                <input
                  type="text"
                  name="idKetuaKelompok"
                  id="idKetuaKelompok"
                  placeholder="Isi ID Ketua Kelompok"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-[20px] rounded-xl">
        <p className="text-black font-bold text-lg mb-[10px]">
          Detail Pinjaman yang Diajukan
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="min-w-[175px]">
              <div>
                <label htmlFor="idCabang">ID Cabang</label>
                <input
                  type="text"
                  name="idCabang"
                  id="idCabang"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
            </div>
            <div className="min-w-[290px]">
              <div>
                <label htmlFor="jumlahPinjaman">Jumlah Pinjaman</label>
                <input
                  type="text"
                  name="jumlahPinjaman"
                  id="jumlahPinjaman"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic"
                  disabled
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <label htmlFor="namaKetuaKelompok">Nama Ketua Kelompok</label>
                <input
                  type="text"
                  name="namaKetuaKelompok"
                  id="namaKetuaKelompok"
                  placeholder="Isi Nama Ketua Kelompok"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <label htmlFor="idKetuaKelompok">ID Ketua Kelompok</label>
                <input
                  type="text"
                  name="idKetuaKelompok"
                  id="idKetuaKelompok"
                  placeholder="Isi ID Ketua Kelompok"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
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

export default DetailPinjamanAnggotaBaru;
