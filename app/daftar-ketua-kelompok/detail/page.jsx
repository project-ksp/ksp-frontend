import React from "react";
import Link from "next/link";
import Image from "next/image";

const DetailKetuaKelompok = () => {
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
    </div>
  );
};

export default DetailKetuaKelompok;
