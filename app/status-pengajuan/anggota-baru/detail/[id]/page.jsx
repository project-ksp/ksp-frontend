"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/Modal";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DetailAnggotaBaru = () => {
  const { data: session, status } = useSession();
  const { id } = useParams();

  const router = useRouter();

  const [showProsesData, setProsesData] = useState(false);
  const [showBerhasil, setBerhasil] = useState(false);

  const [loading, setLoading] = useState(false);

  const [member, setMember] = useState({
    id: "",
    name: "",
    nik: "",
    gender: "",
    isActive: "",
    branchId: "",
    leaderId: "",
    createdAt: "",
    updatedAt: "",
    isMarried: "",
    spouse: null,
    birthPlace: "",
    birthDate: "",
    religion: "",
    occupation: "",
    address: "",
    kelurahan: "",
    kecamatan: "",
    city: "",
    postalCode: "",
    education: "",
    phoneNumber: "",
    profilePictureUrl: "",
    idPictureUrl: "",
    userId: "",
    status: "",
    verified: "",
    leader: {
      id: "",
      name: "",
    },
    deposit: {
      id: "",
      principalDeposit: "",
      mandatoryDeposit: "",
      voluntaryDeposit: "",
      memberId: "",
      createdAt: "",
      updatedAt: "",
      loans: [],
    },
  });

  useEffect(() => {
    const getMember = async () => {
      if (status === "loading") return;
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}members/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setMember(data.data);
      } else {
        toast.error(data.message);
      }
      setLoading(false);
    };

    getMember();
  }, [status, session, id]);

  const countAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const verifyData = async () => {
    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}members/${id}/verify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify({
          status: member.status,
        }),
      }
    );

    const data = await res.json();
    if (res.ok) {
      setBerhasil(true);
    } else {
      toast.error(data.message);
    }
    setLoading(false);
    setProsesData(false);
  };

  if (status === "loading") return <Loading />;
  return (
    <div className="flex flex-col gap-2">
      {loading && <div className="inset-0 fixed bg-black/20 z-50"></div>}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">
          Detail Pengajuan Anggota Baru
        </h2>
        <div className="flex gap-4">
          <Link href={"/status-pengajuan/anggota-baru"}>
            <button className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center">
              Kembali
            </button>
          </Link>
          <button
            onClick={() => setProsesData(true)}
            disabled={member.status !== "disetujui"}
            className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center disabled:bg-black/20 disabled:cursor-not-allowed"
          >
            Verifikasi Data
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
              src={`${process.env.NEXT_PUBLIC_BASE_URL}public/${member.profilePictureUrl}`}
              width={90}
              height={120}
              alt="Foto Diri"
              className="mr-[25px] rounded-md object-cover"
            />
            <div className="flex flex-col gap-2">
              <p className="text-xl text-black">{member.name}</p>
              <p className="text-lg text-black">{member.id}</p>
              {member.isActive ? (
                <div className="bg-green-status-1 text-white text-center my-[8px] rounded-lg  w-[86px]">
                  Aktif
                </div>
              ) : (
                <div className="bg-red-status-1 text-white text-center my-[8px] rounded-lg  w-[86px]">
                  Tidak Aktif
                </div>
              )}
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
                <input
                  type="button"
                  name="idCabang"
                  id="idCabang"
                  className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-black bg-transparent focus:outline-none disabled:cursor-not-allowed`}
                  defaultValue={member.branchId}
                  disabled
                />
              </div>
            </div>
            <div className="w-1/3">
              <label htmlFor="namaKetuaKelompok">Nama Ketua Kelompok</label>
              <input
                type="text"
                id="namaKetuaKelompok"
                name="namaKetuaKelompok"
                placeholder="Isi Nama Ketua Kelompok"
                disabled
                defaultValue={member.leader ? member.leader.name : ""}
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="idKetuaKelompok">ID Ketua Kelompok</label>
              <input
                type="text"
                id="idKetuaKelompok"
                name="idKetuaKelompok"
                placeholder="Isi ID Ketua Kelompok"
                defaultValue={member.leaderId}
                disabled
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
              />
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="w-1/3">
              <label htmlFor="statusPernikahan">Status Pernikahan</label>
              <input
                type="text"
                name="statusPernikahan"
                id="statusPernikahan"
                defaultValue={
                  member.isMarried ? "Sudah Menikah" : "Belum Menikah"
                }
                disabled
                className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-black  bg-transparent focus:outline-none disabled:cursor-not-allowed`}
              />
            </div>
            <div className="w-2/3">
              <label htmlFor="namaSuamiIstri">Nama Suami/Istri</label>
              <input
                type="text"
                id="namaSuamiIstri"
                name="namaSuamiIstri"
                placeholder="*Jika Sudah Menikah"
                defaultValue={member.spouse === "" ? "-" : member.spouse}
                disabled
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
                disabled
                defaultValue={member.birthPlace}
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
              />
            </div>
            <div className="w-1/4">
              <label htmlFor="tanggalLahir">Tanggal Lahir</label>
              <input
                type="date"
                id="tanggalLahir"
                name="tanggalLahir"
                disabled
                defaultValue={member.birthDate}
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] text-black rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
              />
            </div>
            <div className="w-1/4">
              <label htmlFor="umur">Umur</label>
              <input
                type="text"
                id="umur"
                name="umur"
                placeholder="Auto generate"
                defaultValue={member.birthDate && countAge(member.birthDate)}
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
                disabled
              />
            </div>
            <div className="w-1/5">
              <label htmlFor="jenisKelamin">Jenis Kelamin</label>
              <input
                type="text"
                name="jenisKelamin"
                id="jenisKelamin"
                disabled
                defaultValue={member.gender}
                className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-black bg-transparent focus:outline-none disabled:cursor-not-allowed`}
              />
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
                defaultValue={member.nik}
                disabled
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
            </div>
            <div className="w-1/5">
              <label htmlFor="agama">Agama</label>
              <input
                type="text"
                name="agama"
                id="agama"
                disabled
                defaultValue={member.religion}
                className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-black bg-transparent focus:outline-none disabled:cursor-not-allowed`}
              />
            </div>
            <div className="w-2/5">
              <label htmlFor="pekerjaan">Pekerjaan</label>
              <input
                type="text"
                id="pekerjaan"
                name="pekerjaan"
                placeholder="Isi Sesuai KTP"
                defaultValue={member.occupation}
                disabled
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
                  disabled
                  defaultValue={member.address}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
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
                  defaultValue={member.kelurahan}
                  disabled
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="kecamatan">Kecamatan</label>
                <input
                  type="text"
                  id="kecamatan"
                  name="kecamatan"
                  placeholder="Isi Sesuai KTP"
                  defaultValue={member.kecamatan}
                  disabled
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="kota">Kabupaten/Kota</label>
                <input
                  type="text"
                  id="kota"
                  name="kota"
                  placeholder="Isi Sesuai KTP"
                  defaultValue={member.city}
                  disabled
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="kodePos">Kode Pos</label>
                <input
                  type="text"
                  id="kodePos"
                  name="kodePos"
                  placeholder="Isi Sesuai KTP"
                  disabled
                  defaultValue={member.postalCode}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="w-2/5">
              <label htmlFor="pendidikan">Pendidikan Terakhir</label>
              <input
                type="text"
                name="pendidikan"
                id="pendidikan"
                defaultValue={member.education}
                disabled
                className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-black bg-transparent focus:outline-none`}
              />
            </div>
            <div className="w-3/5">
              <label htmlFor="noHp">No. Hp (WhatsApp)</label>
              <input
                type="text"
                id="noHp"
                name="noHp"
                placeholder="Isi Nomor HP (WhatsApp)"
                defaultValue={member.phoneNumber}
                disabled
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
              type="number"
              name="simpananPokok"
              id="simpananPokok"
              placeholder="Auto Generated"
              value={member.deposit.principalDeposit}
              disabled
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
            />
            <p className="text-filled-color text-sm mt-1">
              *Minimal Rp.50.000,00/bulan
            </p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="simpananWajib">Simpanan Wajib</label>
            <div className="flex mt-2 gap-3">
              <div className="flex-grow">
                <label htmlFor="bulan1">Total Simpanan</label>
                <input
                  type="number"
                  name="bulan1"
                  id="bulan1"
                  placeholder="Auto Generated"
                  value={member.deposit.mandatoryDeposit}
                  disabled
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
                />
              </div>
            </div>
            <p className="text-filled-color text-sm mt-1">
              *Minimal Rp.50.000,00/bulan
            </p>
          </div>
          <div className="flex-1">
            <label htmlFor="simpananSukarela">Simpanan Sukarela</label>
            <input
              type="number"
              name="simpananSukarela"
              id="simpananSukarela"
              placeholder="Auto Generated"
              disabled
              value={member.deposit.voluntaryDeposit}
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
            />
            <p className="text-filled-color text-sm mt-1">
              Diambil dari pinjaman
            </p>
          </div>
        </div>
      </div>
      {member.deposit.loans.length > 0 &&
        member.deposit.loans.map((loan, index) => (
          <div key={index} className="bg-white p-[20px] rounded-xl">
            <p className="text-black font-bold text-lg mb-[10px]">
              Detail Pinjaman
            </p>
            <div className="flex gap-2">
              <div className="w-1/3">
                <label htmlFor="cabang">ID Cabang</label>
                <input
                  type="text"
                  name="cabang"
                  id="cabang"
                  value={member.branchId}
                  disabled
                  className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-black bg-transparent focus:outline-none disabled:cursor-not-allowed`}
                />
              </div>
              <div className="w-1/3">
                <label htmlFor="jumlahPinjaman">Jumlah Pinjaman</label>
                <input
                  type="number"
                  name="jumlahPinjaman"
                  id="jumlahPinjaman"
                  placeholder="Isikan Jumlah Pinjaman"
                  value={member.deposit.loans[index].loan}
                  disabled
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/3">
                <div>
                  <label htmlFor="awalPinjaman">Awal Pinjaman</label>
                  <input
                    type="date"
                    name="awalPinjaman"
                    id="awalPinjaman"
                    placeholder="Isi ID Ketua Kelompok"
                    disabled
                    value={member.deposit.loans[index].createdAt.slice(0, 10)}
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-1/3">
                <div>
                  <label htmlFor="akhirPinjaman">Akhir Pinjaman</label>
                  <input
                    type="date"
                    name="akhirPinjaman"
                    id="akhirPinjaman"
                    placeholder="Isi ID Ketua Kelompok"
                    disabled
                    defaultValue={(() => {
                      const date = new Date(
                        member.deposit.loans[index].createdAt
                      );
                      date.setMonth(date.getMonth() + 6);
                      return date.toJSON().slice(0, 10);
                    })()}
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-1/3">
                <div>
                  <label htmlFor="idKetuaKelompok">ID Ketua Kelompok</label>
                  <input
                    type="text"
                    name="idKetuaKelompok"
                    id="idKetuaKelompok"
                    placeholder="Isi ID Ketua Kelompok"
                    disabled
                    value={member.leader.id}
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      <div className="flex gap-3 justify-end">
        <button
          type="button"
          className="w-[200px] px-[20px] h-[48px] text-white bg-primary rounded-lg"
        >
          <Link
            href={`/status-pengajuan/anggota-baru/detail/${id}/cetak-formulir`}
          >
            Formulir
          </Link>
        </button>
        <button
          type="button"
          className="w-[200px] px-[20px] h-[48px] text-white bg-primary rounded-lg"
        >
          <Link
            href={`/status-pengajuan/anggota-baru/detail/${id}/cetak-kartu-anggota`}
          >
            Kartu Anggota
          </Link>
        </button>
        <button
          type="button"
          className="w-[200px] px-[20px] h-[48px] text-white bg-primary rounded-lg"
        >
          <Link
            href={`/status-pengajuan/anggota-baru/detail/${id}/cetak-buku-anggota`}
          >
            Buku Anggota
          </Link>
        </button>
        <button
          type="button"
          className="w-[200px] px-[20px] h-[48px] text-white bg-primary rounded-lg"
        >
          <Link
            href={`/status-pengajuan/anggota-baru/detail/${id}/cetak-blanko-simpanan`}
          >
            Blanko Simpanan
          </Link>
        </button>
        <button
          type="button"
          className="w-[200px] px-[20px] h-[48px] text-white bg-primary rounded-lg"
        >
          <Link
            href={`/status-pengajuan/anggota-baru/detail/${id}/cetak-blanko-pinjaman`}
          >
            Blanko Pinjaman
          </Link>
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
            verifyData();
          }}
        >
          Proses Data
        </button>
      </Modal>
      <Modal
        isVisible={showBerhasil}
        onClose={() => {
          setBerhasil(false);
          router.push("/status-pengajuan/anggota-baru");
        }}
      >
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
        <p className="text-black font-regular text-lg text-center mb-3 w-[420px]">
          Data Anggota Baru telah diproses dan telah tersimpan di data master
        </p>
        <button
          type="button"
          className="w-[450px] px-[20px] py-[12px] text-white bg-primary rounded-lg mx-auto"
          onClick={(e) => {
            setBerhasil(false);
            router.push("/status-pengajuan/anggota-baru");
          }}
        >
          OK
        </button>
      </Modal>
    </div>
  );
};

export default DetailAnggotaBaru;
