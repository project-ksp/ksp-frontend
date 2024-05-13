"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
import VerificationSelector from "@/components/VerificationSelector";
import toast from "react-hot-toast";

const StatusPengajuanAnggotaBaru = () => {
  const { data: session, status } = useSession();

  const [loans, setLoans] = useState([]);
  const [openItemId, setOpenItemId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (status === "loading") return;
    const getLoans = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}loans/pending`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setLoans(data.data);
      } else {
        toast.error(data.message);
      }
    };

    if (search === "") {
      getLoans();
      return;
    }
  }, [search, status, session]);

  const updateStatus = async (option, id) => {
    const newArr = loans.map((loan) => ({
      ...loan,
      status: loan.id === id ? option : loan.status,
    }));
    setLoans(newArr);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}loans/${id}/status`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${session.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: option }),
      }
    );

    const data = await res.json();
    if (!res.ok) {
      toast.error(data.message);
    }
  };

  const handleToggle = (id) => {
    if (openItemId === id) {
      setOpenItemId(null); // Close the dropdown if it's already open
    } else {
      setOpenItemId(id); // Open the dropdown for the clicked item
    }
  };

  const filteredLoans = loans.filter((loan) => {
    return (
      loan.deposit.member.id.toLowerCase().includes(search.toLowerCase()) ||
      loan.deposit.member.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (status === "loading") return <Loading />;
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-black">
        Status Pengajuan Pinjaman Anggota Lama
      </h2>
      <div className="w-full relative">
        <input
          type="text"
          name="search"
          placeholder="Cari Anggota"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white rounded-md p-[12px] focus:outline-none text-base font-regular"
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-0 bottom-0 m-auto mr-[12px]"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#525256"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.0004 21.0004L16.6504 16.6504"
            stroke="#525256"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="bg-white p-[20px] rounded-xl">
        <table className="table-fixed w-full text-left">
          <thead>
            <tr className="border-b border-[#DDE1E6]">
              <th className="w-[8%] font-semibold py-[13px] px-[10px]">
                ID Anggota
              </th>
              <th className="w-[10%] font-semibold px-[10px]">
                <div className="flex justify-between items-center">
                  <p>Nama Anggota</p>
                </div>
              </th>
              <th className="w-[13%] font-semibold px-[10px]">NIK</th>
              <th className="w-[7%] font-semibold px-[10px]">
                Jenis Kelamin (P/L)
              </th>
              <th className="w-[14%] font-semibold px-[10px]">
                Pinjaman yang diajukan
              </th>
              <th className="w-[11%] font-semibold px-[10px]">
                Status Pengajuan
              </th>
              <th className="w-[9%] font-semibold px-[10px]">Status</th>
              <th className="w-[10%] font-semibold px-[10px]">
                Detail Anggota
              </th>
              <th className="w-[10%] font-semibold px-[10px]">Verifikasi</th>
            </tr>
          </thead>
          <tbody>
            {filteredLoans.length > 0 ? (
              filteredLoans.map((item, index) => (
                <tr key={item.id} className=" border-b border-[#DDE1E6]">
                  <td className="break-words px-[10px]">
                    {item.deposit.member.id}
                  </td>
                  <td className="px-[10px]">{item.deposit.member.name}</td>
                  <td className="px-[10px]">{item.deposit.member.nik}</td>
                  <td className="px-[10px]">
                    {item.gender === "laki-laki" ? "L" : "P"}
                  </td>
                  <td className="px-[10px]">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(item.loan)}
                  </td>
                  <td className="px-[10px]">
                    <div className="flex justify-center items-center h-[48px]">
                      <div>
                        <button
                          type="button"
                          onClick={() => handleToggle(item.id)}
                          disabled={session.user.role !== "branch_head"}
                          className={`${
                            item.status === "disetujui" && "bg-green-status-2"
                          } ${
                            item.status === "belum disetujui" &&
                            "bg-yellow-status-2"
                          } ${item.status === "ditolak" && "bg-red-status-2"} ${
                            item.status === "diproses" && "bg-secondary"
                          } w-[116px] h-[24px] text-black rounded-lg mx-auto my-auto text-sm`}
                        >
                          {item.status.charAt(0).toUpperCase() +
                            item.status.slice(1)}
                        </button>
                        {openItemId === item.id && (
                          <div className="w-full relative">
                            <VerificationSelector
                              selected={(option) =>
                                updateStatus(option, item.id)
                              }
                              options={[
                                "diproses",
                                "disetujui",
                                "belum disetujui",
                                "ditolak",
                              ].filter((e) => e !== item.status)}
                              onClose={() => {
                                setOpenItemId(null);
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-[10px]">
                    <div className="flex justify-center items-center h-[48px]">
                      {item.isActive ? (
                        <button className="bg-green-status-1 w-[86px] h-[24px] text-white rounded-lg mx-auto my-auto">
                          Aktif
                        </button>
                      ) : (
                        <button className="bg-red-status-1 w-[86px] h-[24px] text-white rounded-lg mx-auto my-auto">
                          Tidak Aktif
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="px-[10px]">
                    <div className="flex justify-center items-center h-[48px]">
                      <Link
                        href={`/status-pengajuan/pinjaman-anggota-lama/detail/${item.deposit.member.id}`}
                        className="bg-primary w-[100px] h-[24px] text-white rounded-lg text-center"
                      >
                        Cek Detail
                      </Link>
                    </div>
                  </td>
                  <td className="px-[10px]">
                    <div className="flex justify-center items-center h-[48px]">
                      {item.verified ? (
                        <button className="bg-green-status-2 w-[100px] h-[24px] text-black rounded-lg mx-auto my-auto text-sm">
                          Terverifikasi
                        </button>
                      ) : (
                        <button className="bg-yellow-status-2 w-[100px] h-[24px] text-black rounded-lg mx-auto my-auto text-sm">
                          Menunggu
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8}>Belum ada Data...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatusPengajuanAnggotaBaru;
