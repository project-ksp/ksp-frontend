import React from "react";
import Link from "next/link";
import Image from "next/image";

const DetailTeller = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">Daftar Teller</h2>
        <div className="flex gap-4">
          <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center">
            <Link href={"/daftar-teller"}>Kembali</Link>
          </button>
          <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center">
            <Link href={"/daftar-teller/edit"}>Edit Data Diri</Link>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl p-[20px]">
        <p className="text-black font-bold text-lg mb-[10px]">
          Biodata Lengkap Teller
        </p>
        <div className="flex gap-5 w-full">
          <div className="w-[300px]">
            <Image
              src={"/images/dummy.jpg"}
              alt="Foto Teller"
              width={300}
              height={400}
              quality={100}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="flex-1">
              <label htmlFor="idTeller">ID Teller</label>
              <input
                type="text"
                id="idTeller"
                name="idTeller"
                placeholder="Isi ID Teller"
                value={"01281"}
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="namaTeller">Nama Teller</label>
              <input
                type="text"
                id="namaTeller"
                name="namaTeller"
                placeholder="Isi Nama Teller"
                value={"M. Syakur"}
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="nikTeller">NIK</label>
              <input
                type="text"
                id="nikTeller"
                name="nikTeller"
                placeholder="Isi Nik Teller"
                value={"358804128500004"}
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
            </div>
            <div className="flex gap-3">
              <div className="w-1/2">
                <label htmlFor="agamaTeller">Agama</label>
                <input
                  type="text"
                  id="agamaTeller"
                  name="agamaTeller"
                  placeholder="Isi Agama Teller"
                  value={"Islam"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="pendidikanTeller">Pendidikan Terakhir</label>
                <input
                  type="text"
                  id="pendidikanTeller"
                  name="pendidikanTeller"
                  placeholder="Isi Pendidikan Teller"
                  value={"Islam"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/4">
                <label htmlFor="tempatLahirTeller">Tempat Lahir</label>
                <input
                  type="text"
                  id="tempatLahirTeller"
                  name="tempatLahirTeller"
                  placeholder="Isi Tempat Lahir Teller"
                  value={"Malang"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="tanggalLahirTeller">Tanggal Lahir</label>
                <input
                  type="date"
                  id="tanggalLahirTeller"
                  name="tanggalLahirTeller"
                  placeholder="Isi Tanggal Lahir Teller"
                  value={"Kediri"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="umurTeller">Umur</label>
                <input
                  type="text"
                  id="umurTeller"
                  name="umurTeller"
                  placeholder="Isi Umur Teller"
                  value={"18"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="jenisKelaminTeller">Jenis Kelamin</label>
                <input
                  type="text"
                  id="jenisKelaminTeller"
                  name="jenisKelaminTeller"
                  placeholder="Isi Jenis Kelamin Teller"
                  value={"Laki Laki"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/2">
                <label htmlFor="alamatLengkapTeller">Alamat Lengkap</label>
                <input
                  type="text"
                  id="alamatLengkapTeller"
                  name="alamatLengkapTeller"
                  placeholder="Isi Alamat Lengkap Teller"
                  value={"Jalan Taman Indonesia Indah"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="noHpTeller">No. HP(WhatsApp)</label>
                <input
                  type="text"
                  id="noHpTeller"
                  name="noHpTeller"
                  placeholder="Isi NoHp Teller"
                  value={"087241698241"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/4">
                <label htmlFor="kelurahanTeller">Kelurahan/Desa</label>
                <input
                  type="text"
                  id="kelurahanTeller"
                  name="kelurahanTeller"
                  placeholder="Isi Kelurahan/Desa Teller"
                  value={"Sumbersari"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="kecamatanTeller">Kecamatan</label>
                <input
                  type="date"
                  id="kecamatanTeller"
                  name="kecamatanTeller"
                  placeholder="Isi Kecamatan Teller"
                  value={"Jatimulyo"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="kabupatenTeller">Kabupaten/Kota</label>
                <input
                  type="text"
                  id="kabupatenTeller"
                  name="kabupatenTeller"
                  placeholder="Isi Kabupaten Teller"
                  value={"Kediri"}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="kodePosTeller">Kode Pos</label>
                <input
                  type="text"
                  id="kodePosTeller"
                  name="kodePosTeller"
                  placeholder="Isi Jenis Kelamin Teller"
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
                placeholder="Isi Jenis Kelamin Teller"
                value={"5"}
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTeller;
