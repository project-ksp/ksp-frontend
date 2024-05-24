"use client";

import React, { useState, useEffect } from "react";
import Modal from "@/components/Modal";
import DropdownSelector from "@/components/DropdownSelector";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import toast from "react-hot-toast";

const Pinjaman = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [showProsesData, setProsesData] = useState(false);
  const [showBerhasil, setBerhasil] = useState(false);
  const [loading, setLoading] = useState(false);

  const [oneClick, setOneClick] = useState(true);

  const [simpanan, setSimpanan] = useState({
    principalDeposit: 0,
    mandatoryDeposit: 0,
    voluntaryDeposit: 0,
  });

  const [member, setMember] = useState({
    name: "",
    nik: "",
    gender: "Pilih Jenis Kelamin",
    isMarried: "Pilih Status",
    birthPlace: "",
    birthDate: "",
    religion: "Pilih Agama",
    occupation: "",
    address: "",
    kelurahan: "",
    kecamatan: "",
    city: "",
    postalCode: "",
    education: "Pilih Pendidikan Terakhir",
    phoneNumber: "",
    profilePictureUrl: "",
    idPictureUrl: "",
    leaderId: "",
    spouse: "",
    branchId: 0,
  });

  const [loan, setLoan] = useState(null);

  useEffect(() => {
    if (status === "loading") return;

    const storedName = localStorage.getItem("name") || "";
    const storedNik = localStorage.getItem("nik") || "";
    const storedGender =
      localStorage.getItem("gender") || "Pilih Jenis Kelamin";
    const storedIsMarried = localStorage.getItem("isMarried") || "Pilih Status";
    const storedBirthPlace = localStorage.getItem("birthPlace") || "";
    const storedBirthDate = localStorage.getItem("birthDate") || "";
    const storedReligion = localStorage.getItem("religion") || "Pilih Agama";
    const storedOccupation = localStorage.getItem("occupation") || "";
    const storedAddress = localStorage.getItem("address") || "";
    const storedKelurahan = localStorage.getItem("kelurahan") || "";
    const storedKecamatan = localStorage.getItem("kecamatan") || "";
    const storedCity = localStorage.getItem("city") || "";
    const storedPostalCode = localStorage.getItem("postalCode") || "";
    const storedEducation =
      localStorage.getItem("education") || "Pilih Pendidikan Terakhir";
    const storedPhoneNumber = localStorage.getItem("phoneNumber") || "";
    const storedProfilePictureUrl =
      localStorage.getItem("profilePictureUrl") || "";
    const storedIdPictureUrl = localStorage.getItem("idPictureUrl") || "";
    const storedLeaderId = localStorage.getItem("leaderId") || "";
    const storedSpouse = localStorage.getItem("spouse") || "";
    const storedBranchId = session.user.branchId;

    setMember({
      name: storedName,
      nik: storedNik,
      gender: storedGender,
      isMarried: storedIsMarried === "true",
      birthPlace: storedBirthPlace,
      birthDate: storedBirthDate,
      religion: storedReligion,
      occupation: storedOccupation,
      address: storedAddress,
      kelurahan: storedKelurahan,
      kecamatan: storedKecamatan,
      city: storedCity,
      postalCode: storedPostalCode,
      education: storedEducation,
      phoneNumber: storedPhoneNumber,
      profilePictureUrl: storedProfilePictureUrl,
      idPictureUrl: storedIdPictureUrl,
      leaderId: storedLeaderId,
      spouse: storedSpouse,
      branchId: storedBranchId,
    });
  }, [status, session]);

  const submitData = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      member.isMarried === "Pilih Status" ||
      member.gender === "Pilih Jenis Kelamin" ||
      member.religion === "Pilih Agama" ||
      member.education === "Pilih Pendidikan Terakhir" ||
      member.name === "" ||
      member.nik === "" ||
      member.birthPlace === "" ||
      member.birthDate === "" ||
      member.occupation === "" ||
      member.address === "" ||
      member.kelurahan === "" ||
      member.kecamatan === "" ||
      member.city === "" ||
      member.postalCode === "" ||
      member.phoneNumber === "" ||
      member.profilePictureUrl === "" ||
      member.idPictureUrl === "" ||
      member.branchId === 0
    ) {
      toast.error("Mohon lengkapi data anggota terlebih dahulu");
      setProsesData(false);
      setLoading(false);
      return;
    }

    if (
      member.leaderId === "" ||
      loan === null ||
      loan.loan === 0 ||
      loan.leaderId === ""
    ) {
      toast.error(
        "Mohon masukkan id ketua kelompok dan masukkan jumlah pinjaman"
      );
      setProsesData(false);
      setLoading(false);
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}members/loan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.token}`,
      },
      body: JSON.stringify({
        member,
        loan,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      setBerhasil(true);
      localStorage.clear();
    } else {
      toast.error(data.message);
    }
    setLoading(false);
    setProsesData(false);
  };

  if (status === "loading") return <Loading />;

  return (
    <>
      {loading && <div className="inset-0 fixed bg-black/20 z-50"></div>}
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
              value={simpanan.principalDeposit}
              disabled
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="simpananWajib">Simpanan Wajib</label>
            <div className="flex mt-2 gap-3">
              <div className="flex-grow">
                <input
                  type="number"
                  name="bulan1"
                  id="bulan1"
                  placeholder="Isikan simpanan wajib"
                  onChange={(e) =>
                    setSimpanan({
                      ...simpanan,
                      mandatoryDeposit: e.target.value,
                    })
                  }
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="simpananSukarela">Simpanan Sukarela</label>
            <input
              type="number"
              name="simpananSukarela"
              id="simpananSukarela"
              placeholder="Auto Generated"
              value={simpanan.voluntaryDeposit}
              disabled
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
            />
            <p className="text-filled-color text-sm mt-1">
              Diambil dari pinjaman
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        disabled={!oneClick}
        onClick={() => {
          setLoan({
            loan: 0,
            leaderId: "",
          });
          setOneClick(false);
        }}
        className="bg-primary text-white w-[224px] h-[48px] rounded-md text-center flex items-center justify-center disabled:bg-black/20 disabled:cursor-not-allowed"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.14286 6.85714V1.14286C9.14286 0.839753 9.02245 0.549062 8.80812 0.334735C8.5938 0.120408 8.30311 0 8 0C7.6969 0 7.40621 0.120408 7.19188 0.334735C6.97755 0.549062 6.85714 0.839753 6.85714 1.14286V6.85714H1.14286C0.839753 6.85714 0.549062 6.97755 0.334735 7.19188C0.120408 7.40621 0 7.6969 0 8C0 8.30311 0.120408 8.5938 0.334735 8.80812C0.549062 9.02245 0.839753 9.14286 1.14286 9.14286H6.85714V14.8571C6.85714 15.1602 6.97755 15.4509 7.19188 15.6653C7.40621 15.8796 7.6969 16 8 16C8.30311 16 8.5938 15.8796 8.80812 15.6653C9.02245 15.4509 9.14286 15.1602 9.14286 14.8571V9.14286H14.8571C15.1602 9.14286 15.4509 9.02245 15.6653 8.80812C15.8796 8.5938 16 8.30311 16 8C16 7.6969 15.8796 7.40621 15.6653 7.19188C15.4509 6.97755 15.1602 6.85714 14.8571 6.85714H9.14286Z"
            fill="white"
          />
        </svg>
        <p className="ml-5 text-base font-regular">Tambah Pinjaman</p>
      </button>
      {loan && (
        <>
          <div className="bg-white p-[20px] rounded-xl">
            <p className="text-black font-bold text-lg mb-[10px]">
              Detail Pinjaman
            </p>
            <div className="flex gap-3">
              <div className="w-1/5">
                <label htmlFor="cabang">ID Cabang</label>
                <input
                  type="text"
                  name="cabang"
                  id="cabang"
                  value={session.user.branchId}
                  disabled
                  className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-black bg-transparent focus:outline-none disabled:cursor-not-allowed`}
                />
              </div>
              <div className="w-1/5">
                <div>
                  <label htmlFor="jumlahPinjaman">Pinjaman Yang Diajukan</label>
                  <input
                    type="number"
                    name="jumlahPinjaman"
                    id="jumlahPinjaman"
                    placeholder="Isikan Jumlah Pinjaman"
                    onChange={(e) =>
                      setLoan({ ...loan, loan: parseInt(e.target.value) })
                    }
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="w-1/5">
                <div>
                  <label htmlFor="awalPinjaman">Awal Pinjaman</label>
                  <input
                    type="date"
                    name="awalPinjaman"
                    id="awalPinjaman"
                    placeholder="Isi ID Ketua Kelompok"
                    disabled
                    value={new Date().toJSON().slice(0, 10)}
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-1/5">
                <div>
                  <label htmlFor="akhirPinjaman">Akhir Pinjaman</label>
                  <input
                    type="date"
                    name="akhirPinjaman"
                    id="akhirPinjaman"
                    placeholder="Isi ID Ketua Kelompok"
                    disabled
                    defaultValue={(() => {
                      const date = new Date();
                      date.setMonth(date.getMonth() + 6);
                      return date.toJSON().slice(0, 10);
                    })()}
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-1/5">
                <div>
                  <label htmlFor="idKetuaKelompok">ID Ketua Kelompok</label>
                  <input
                    type="text"
                    name="idKetuaKelompok"
                    id="idKetuaKelompok"
                    placeholder="Isi ID Ketua Kelompok"
                    onChange={(e) =>
                      setLoan({ ...loan, leaderId: e.target.value })
                    }
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <p className="text-filled-color text-sm mt-2">Tempat Pinjam</p>
          </div>
          <div className="bg-white p-[20px] rounded-xl">
            <div className="flex flex-col gap-3">
              <div className="flex-1">
                <label htmlFor="tanggalMasuk">Tanggal Masuk Anggota</label>
                <input
                  type="text"
                  disabled
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
                  name="tanggalMasuk"
                  id="tanggalMasuk"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="tanggalPermohonan">Tanggal Permohonan</label>
                <input
                  type="text"
                  disabled
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
                  name="tanggalPermohonan"
                  id="tanggalPermohonan"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="tanggalMasuk">Tanggal Dropping Pinjaman</label>
                <input
                  type="date"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed"
                  name="tanggalMasuk"
                  id="tanggalMasuk"
                />
              </div>
            </div>
          </div>
        </>
      )}
      <div className="flex gap-5 place-self-end">
        <button
          type="button"
          onClick={() => setProsesData(true)}
          className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center"
        >
          Proses Pengajuan
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
            submitData(e);
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
            router.push("/status-pengajuan/anggota-baru");
          }}
        >
          OK
        </button>
      </Modal>
    </>
  );
};

export default Pinjaman;
