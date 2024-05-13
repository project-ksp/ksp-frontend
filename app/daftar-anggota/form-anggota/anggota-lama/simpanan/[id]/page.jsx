"use client";

import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import Link from "next/link";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Simpanan = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = useParams();

  const [showProsesData, setProsesData] = useState(false);
  const [showBerhasil, setBerhasil] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cabangOpen, setCabangOpen] = useState(false);
  const [branches, setBranches] = useState([]);

  const [oneClick, setOneClick] = useState(true);

  const [simpanan, setSimpanan] = useState({
    principalDeposit: 0,
    mandatoryDeposit: 0,
    voluntaryDeposit: 0,
  });

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

  const [deposit, setDeposit] = useState({
    mandatoryDeposit: 0,
    voluntaryDeposit: 0,
  });

  const submitData = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (deposit.mandatoryDeposit === 0 || deposit.voluntaryDeposit === 0) {
      toast.error("Mohon masukkan simpanan wajib dan simpanan sukarela");
      setProsesData(false);
      setLoading(false);
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}members/${member.id}/deposit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify({
          ...deposit,
        }),
      }
    );

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

  useEffect(() => {
    if (status === "loading") return;
    const getMember = async () => {
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
              placeholder="Isikan Jumlah"
              disabled
              value="50000"
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:cursor-not-allowed disabled:bg-black/5"
            />
          </div>
          <div className="flex flex-col">
            <p>Simpanan Wajib</p>
            <div className="flex mt-2 gap-3">
              <div className="w-1/2">
                <label htmlFor="totalSimpanan">Total Simpanan</label>
                <input
                  type="number"
                  name="totalSimpanan"
                  id="totalSimpanan"
                  placeholder="Isikan Jumlah"
                  disabled
                  value={member.deposit.mandatoryDeposit}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="tambahSimpanan">Tambah Simpanan</label>
                <input
                  type="number"
                  name="tambahSimpanan"
                  id="tambahSimpanan"
                  placeholder="Isikan Jumlah"
                  onChange={(e) =>
                    setDeposit({
                      ...deposit,
                      mandatoryDeposit: parseInt(e.target.value),
                    })
                  }
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p>Simpanan Sukarela</p>
            <div className="flex mt-2 gap-3">
              <div className="w-1/2">
                <label htmlFor="simpananSukarela">Total Simpanan</label>
                <input
                  type="number"
                  name="simpananSukarela"
                  id="simpananSukarela"
                  placeholder="Isikan Jumlah"
                  disabled
                  value={member.deposit.voluntaryDeposit}
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="tambahSimpanan">Tambah Simpanan</label>
                <input
                  type="number"
                  name="tambahSimpanan"
                  id="tambahSimpanan"
                  placeholder="Isikan Jumlah"
                  onChange={(e) =>
                    setDeposit({
                      ...deposit,
                      voluntaryDeposit: parseInt(e.target.value),
                    })
                  }
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
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
          router.push("/dashboard");
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
            router.push("/dashboard");
          }}
        >
          OK
        </button>
      </Modal>
    </>
  );
};

export default Simpanan;
