"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DropdownSelector from "@/components/DropdownSelector";
import Modal from "@/components/Modal";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DetailPenghapusanAnggota = () => {
  const { data: session, status } = useSession();
  const { id } = useParams();
  const formRef = useRef();

  const router = useRouter();

  const [agamaOpen, setAgamaOpen] = useState();
  const [pendidikanOpen, setPendidikanOpen] = useState();
  const [statusPernikahanOpen, setStatusPernikahanOpen] = useState();
  const [jenisKelaminOpen, setJenisKelaminOpen] = useState();
  const [showProsesData, setProsesData] = useState();
  const [showBerhasil, setBerhasil] = useState();
  const [buktiPendukung, setBuktiPendukung] = useState(null);

  const [loading, setLoading] = useState(false);

  const [member, setMember] = useState({
    id: "",
    name: "",
    nik: "",
    gender: "",
    isActive: false,
    branchId: 0,
    leaderId: "",
    createdAt: "",
    updatedAt: "",
    isMarried: false,
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
    userId: 0,
    status: "",
    verified: false,
    leader: {
      id: "",
      name: "",
    },
    deposit: {
      id: 1,
      principalDeposit: 0,
      mandatoryDeposit: 0,
      voluntaryDeposit: 0,
      memberId: "",
      createdAt: "",
      updatedAt: "",
      loans: [
        {
          id: 0,
          loan: 0,
          depositId: 0,
          leaderId: "",
          branchId: 0,
          status: "",
          verified: 0,
          createdAt: "",
          updatedAt: "",
        },
      ],
    },
  });

  const [deleteReq, setDeleteReq] = useState({
    id: "",
    memberId: "",
    reason: "",
    proofUrl: "",
    status: "",
    createdAt: "",
    updatedAt: "",
  });

  const deleteMember = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}delete-requests/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
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

  useEffect(() => {
    const getMember = async () => {
      if (status === "loading") return;
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}delete-requests/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setMember(data.data.member);
        setDeleteReq(data.data);
      } else {
        toast.error(data.message);
      }
      setLoading(false);
    };

    getMember();
  }, [status, session, id]);

  if (status === "loading") return <Loading />;
  return (
    <div className="flex flex-col gap-2">
      {loading && <div className="inset-0 fixed bg-black/20 z-50"></div>}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-black">
          Detail Pengajuan Penghapusan Anggota
        </h2>
        <div className="flex gap-4">
          <Link href={`/status-pengajuan/penghapusan-anggota/detail/${id}`}>
            <button
              type="button"
              className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center"
            >
              Kembali
            </button>
          </Link>
          <button
            onClick={() => setProsesData(true)}
            disabled={deleteReq.status !== "disetujui"}
            className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center disabled:bg-black/20 disabled:cursor-not-allowed"
          >
            Hapus Anggota
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl p-[20px]">
        <p className="text-black font-bold text-lg mb-[10px]">
          Biodata Lengkap Anggota
        </p>
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

      <div className="bg-white p-[20px] rounded-xl">
        <p className="text-black font-bold text-lg mb-[10px]">
          Alasan Penghapusan Anggota
        </p>
        <div className="flex w-full gap-2">
          <div className="flex-grow">
            <input
              type="text"
              name="idKetuaKelompok"
              id="idKetuaKelompok"
              value={deleteReq.reason}
              disabled
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
            />
          </div>
        </div>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}public/${deleteReq.proofUrl}`}
          alt="Foto pendukung"
          width={500}
          height={1000}
          className="object-cover rounded-md mt-[20px]"
        />
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
            deleteMember(e);
          }}
        >
          Proses Data
        </button>
      </Modal>
      <Modal
        isVisible={showBerhasil}
        onClose={() => {
          setBerhasil(false);
          router.push("/status-pengajuan/penghapusan-anggota");
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
            router.push("/status-pengajuan/penghapusan-anggota");
          }}
        >
          OK
        </button>
      </Modal>
    </div>
  );
};

export default DetailPenghapusanAnggota;
