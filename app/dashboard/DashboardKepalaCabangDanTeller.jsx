"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/Modal";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";

const DashboardKepalaCabangDanTeller = () => {
  const { data: session, status } = useSession();

  const [search, setSearch] = useState("");
  const [dataMember, setDataMember] = useState([]);

  const [dataBranch, setDataBranch] = useState({});

  const [showAturPublish, setAturPublish] = useState(false);
  const [showProsesData, setProsesData] = useState(false);
  const [showBerhasil, setBerhasil] = useState(false);

  useEffect(() => {
    if (status === "loading") return null;

    if (search === "") {
      setDataMember([]);
      return;
    }
    const getData = setTimeout(() => {
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}members/search?query=${search}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setDataMember(data.data);
        });
    }, 1000);

    return () => clearTimeout(getData);
  }, [search, status, session]);

  useEffect(() => {
    if (status === "loading") return null;

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataBranch(data.data);
      });
  }, [status, session]);

  if (status === "loading") return <Loading />;
  return (
    <div className="flex flex-col gap-[13px]">
      <div className="bg-gradient-to-r from-[#134cb0] from-0% via-[#007daa] via-35% to-[#00358f] h-[215px] py-[74px] px-[77px] text-white relative rounded-2xl overflow-hidden">
        <h2 className="font-bold text-2xl">Hi, {session.user.name}</h2>
        <p className="text-lg">Selamat Pagi, Selamat Beraktivitas!</p>
        <div className="absolute w-[180px] h-[180px] rounded-full bg-gradient-to-r from-[#007daa] to-[#00358f] right-[500px] -top-16 -rotate-[20deg]"></div>
        <div className="absolute w-[92px] h-[92px] rounded-full bg-gradient-to-r from-[#007daa] to-[#00358f] right-[250px] -top-16"></div>
        <div className="absolute w-[92px] h-[92px] rounded-full bg-gradient-to-r from-[#007daa] to-[#00358f] right-[380px] -bottom-10 -rotate-[20deg]"></div>
        <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-r from-[#007daa] to-[#00358f] -right-[20px] -bottom-12 -rotate-[20deg]"></div>
      </div>
      <div className="flex h-[48px] gap-[36px]">
        <div className="flex-grow relative">
          <input
            type="text"
            name="search"
            placeholder="Cari anggota"
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
      </div>
      <div className="bg-white p-[20px] rounded-xl">
        <h3 className="text-black text-lg font-bold my-[12px]">
          Dashboard Overview
        </h3>
        <div className="flex w-full gap-[50px]">
          <div className="bg-gradient-to-r from-[#c0deff] to-white p-[16px] shadow-lg rounded-xl w-1/3 relative overflow-hidden">
            <h4 className="text-[#192839] text-lg font-bold">Alamat Cabang</h4>
            <hr className="border border-[#192839] my-[12px] w-4/5" />
            <p className="text-[#192839] text-xl font-bold">
              {session.branch.address}
            </p>
            <svg
              width="71"
              height="61"
              viewBox="0 0 71 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -right-[5px] -bottom-[5px] -rotate-[20deg]"
            >
              <path
                d="M8.76819 7.80786L62.0089 7.80786C64.1005 7.80786 65.789 6.11525 65.7611 4.04651C65.7331 1.97777 63.9989 0.285156 61.9073 0.285156L8.66658 0.285156C6.57498 0.285156 4.88653 1.97777 4.91447 4.04651C4.94241 6.11525 6.67658 7.80786 8.76819 7.80786ZM66.5118 14.5783C66.1461 12.8481 64.5697 11.5692 62.7443 11.5692L8.13446 11.5692C6.30907 11.5692 4.76714 12.8481 4.44825 14.5783L0.899343 33.3851C0.47449 35.7171 2.29132 37.8987 4.68716 37.8987H5.37168L5.62569 56.7055C5.65363 58.7742 7.3878 60.4668 9.4794 60.4668H39.9027C41.9943 60.4668 43.6827 58.7742 43.6548 56.7055L43.4008 37.8987H58.6124L58.8664 56.7055C58.8944 58.7742 60.6286 60.4668 62.7202 60.4668C64.8118 60.4668 66.5002 58.7742 66.4723 56.7055L66.2183 37.8987H66.9028C69.2986 37.8987 71.0565 35.7171 70.5687 33.3851L66.5118 14.5783ZM35.9982 52.9441H13.1807L12.9775 37.8987H35.795L35.9982 52.9441Z"
                fill="url(#paint0_linear_306_18143)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_306_18143"
                  x1="35.287"
                  y1="0.285156"
                  x2="52.0671"
                  y2="80.2764"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#B3D6FF" />
                  <stop offset="0.729" stopColor="#c0deff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="bg-gradient-to-r from-[#baffc1] to-white p-[16px] shadow-lg rounded-xl w-1/3 relative overflow-hidden">
            <h4 className="text-green-status-1 text-lg font-bold">
              Total Ketua Kelompok
            </h4>
            <hr className="border border-green-status-1 my-[12px] w-4/5" />
            <p className="text-green-status-1 text-xl font-bold">
              {session.branch.leaderCount}
            </p>
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -right-[5px] -bottom-[15px] -rotate-[15deg]"
            >
              <g clipPath="url(#clip0_309_18574)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M55.9863 40.666C60.2507 43.5716 63.2358 47.5082 63.2273 52.757L63.2122 62.1298H72.5606C74.2744 62.1298 75.679 60.7239 75.6818 59.0055L75.6919 52.757C75.7029 45.946 64.5848 41.9157 55.9863 40.666Z"
                  fill="url(#paint0_linear_309_18574)"
                />
                <path
                  d="M32.0911 37.1368C38.975 37.1368 44.5647 31.5416 44.5758 24.6397C44.587 17.7377 39.0155 12.1426 32.1315 12.1426C25.2476 12.1426 19.6579 17.7377 19.6468 24.6397C19.6356 31.5416 25.2071 37.1368 32.0911 37.1368Z"
                  fill="url(#paint1_linear_309_18574)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50.7885 37.1348C57.6752 37.1348 63.2621 31.5424 63.2733 24.6377C63.2845 17.7331 57.7157 12.1406 50.829 12.1406C49.3644 12.1406 47.9928 12.4531 46.6833 12.8905C49.3595 16.2154 50.8156 20.3619 50.8087 24.6377C50.8018 28.9136 49.3322 33.0601 46.6453 36.385C47.9534 36.8224 49.324 37.1348 50.7885 37.1348ZM32.0867 40.2591C23.7666 40.2591 7.15081 44.4457 7.13735 52.7562L7.12723 59.0048C7.12445 60.7231 8.52443 62.1291 10.2383 62.1291H53.8642C55.5781 62.1291 56.9826 60.7231 56.9854 59.0048L56.9955 52.7562C57.009 44.4457 40.4068 40.2591 32.0867 40.2591Z"
                  fill="url(#paint2_linear_309_18574)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_309_18574"
                  x1="39.7129"
                  y1="2.83509"
                  x2="68.2172"
                  y2="135.918"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#baffc1" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_309_18574"
                  x1="31.6703"
                  y1="12.1426"
                  x2="54.0572"
                  y2="83.0802"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#baffc1" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_309_18574"
                  x1="29.0898"
                  y1="1.97749"
                  x2="54.5581"
                  y2="93.6656"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#baffc1" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_309_18574">
                  <rect
                    width="74.7872"
                    height="74.9827"
                    fill="white"
                    transform="matrix(1 0 -0.00161944 0.999999 0.866211 0.849609)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="bg-gradient-to-r from-[#ffdede] to-white p-[16px] shadow-lg rounded-xl w-1/3 relative overflow-hidden">
            <h4 className="text-red-status-1 text-lg font-bold">
              Total Pengurus Cabang
            </h4>
            <hr className="border border-red-status-1 my-[12px] w-4/5" />
            <p className="text-red-status-1  text-xl font-bold">
              {session.branch.accountCount}
            </p>
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -right-[5px] -bottom-[15px] -rotate-[15deg]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.7461 41.8718C57.0105 44.7774 59.9956 48.7139 59.9871 53.9627L59.9719 63.3356H69.3203C71.0342 63.3356 72.4387 61.9296 72.4415 60.2113L72.4516 53.9627C72.4627 47.1518 61.3446 43.1215 52.7461 41.8718Z"
                fill="url(#paint0_linear_309_19038)"
              />
              <path
                d="M28.8518 38.3424C35.7358 38.3424 41.3254 32.7472 41.3366 25.8453C41.3478 18.9433 35.7763 13.3482 28.8923 13.3482C22.0083 13.3482 16.4187 18.9433 16.4075 25.8453C16.3963 32.7472 21.9678 38.3424 28.8518 38.3424Z"
                fill="url(#paint1_linear_309_19038)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.5483 38.3406C54.435 38.3406 60.0219 32.7481 60.0331 25.8434C60.0443 18.9388 54.4754 13.3463 47.5888 13.3463C46.1242 13.3463 44.7526 13.6588 43.4431 14.0962C46.1192 17.4211 47.5754 21.5676 47.5684 25.8434C47.5615 30.1193 46.0919 34.2658 43.4051 37.5907C44.7131 38.0281 46.0837 38.3406 47.5483 38.3406ZM28.8464 41.4648C20.5264 41.4648 3.91057 45.6514 3.89712 53.9619L3.887 60.2105C3.88421 61.9288 5.2842 63.3348 6.99807 63.3348H50.624C52.3378 63.3348 53.7424 61.9288 53.7452 60.2105L53.7553 53.9619C53.7687 45.6514 37.1665 41.4648 28.8464 41.4648Z"
                fill="url(#paint2_linear_309_19038)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_309_19038"
                  x1="36.4727"
                  y1="4.04085"
                  x2="62.7528"
                  y2="63.2561"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF9691" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_309_19038"
                  x1="28.431"
                  y1="13.3482"
                  x2="32.7251"
                  y2="57.0088"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8982" />
                  <stop offset="1" stopColor="#FFFEFE" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_309_19038"
                  x1="25.8496"
                  y1="3.1832"
                  x2="47.4535"
                  y2="68.114"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FC554A" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      {dataMember.length > 0 && (
        <div className="bg-white p-[20px] rounded-xl">
          <table className="table-fixed w-full text-left">
            <thead>
              <tr className="border-b border-[#DDE1E6]">
                <th className="w-[8%] font-semibold py-[13px] px-[10px]">
                  ID Anggota
                </th>
                <th className="w-[11%] font-semibold px-[10px]">
                  <div className="flex justify-between items-center">
                    <p>Nama Anggota</p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-[20px]"
                    >
                      <path
                        d="M10 10C10 10.2486 9.90123 10.4871 9.72541 10.6629C9.5496 10.8387 9.31114 10.9375 9.0625 10.9375H3.75C3.50136 10.9375 3.2629 10.8387 3.08709 10.6629C2.91127 10.4871 2.8125 10.2486 2.8125 10C2.8125 9.75136 2.91127 9.5129 3.08709 9.33709C3.2629 9.16127 3.50136 9.0625 3.75 9.0625H9.0625C9.31114 9.0625 9.5496 9.16127 9.72541 9.33709C9.90123 9.5129 10 9.75136 10 10ZM3.75 5.9375H14.0625C14.3111 5.9375 14.5496 5.83873 14.7254 5.66291C14.9012 5.4871 15 5.24864 15 5C15 4.75136 14.9012 4.5129 14.7254 4.33709C14.5496 4.16127 14.3111 4.0625 14.0625 4.0625H3.75C3.50136 4.0625 3.2629 4.16127 3.08709 4.33709C2.91127 4.5129 2.8125 4.75136 2.8125 5C2.8125 5.24864 2.91127 5.4871 3.08709 5.66291C3.2629 5.83873 3.50136 5.9375 3.75 5.9375ZM7.8125 14.0625H3.75C3.50136 14.0625 3.2629 14.1613 3.08709 14.3371C2.91127 14.5129 2.8125 14.7514 2.8125 15C2.8125 15.2486 2.91127 15.4871 3.08709 15.6629C3.2629 15.8387 3.50136 15.9375 3.75 15.9375H7.8125C8.06114 15.9375 8.2996 15.8387 8.47541 15.6629C8.65123 15.4871 8.75 15.2486 8.75 15C8.75 14.7514 8.65123 14.5129 8.47541 14.3371C8.2996 14.1613 8.06114 14.0625 7.8125 14.0625ZM18.1633 12.4617C18.0762 12.3743 17.9727 12.305 17.8587 12.2577C17.7448 12.2103 17.6226 12.186 17.4992 12.186C17.3758 12.186 17.2537 12.2103 17.1397 12.2577C17.0257 12.305 16.9223 12.3743 16.8352 12.4617L15.3125 13.9844V8.75C15.3125 8.50136 15.2137 8.2629 15.0379 8.08709C14.8621 7.91127 14.6236 7.8125 14.375 7.8125C14.1264 7.8125 13.8879 7.91127 13.7121 8.08709C13.5363 8.2629 13.4375 8.50136 13.4375 8.75V13.9844L11.9133 12.4594C11.7372 12.2833 11.4983 12.1843 11.2492 12.1843C11.0001 12.1843 10.7613 12.2833 10.5852 12.4594C10.409 12.6355 10.3101 12.8744 10.3101 13.1234C10.3101 13.3725 10.409 13.6114 10.5852 13.7875L13.7102 16.9125C13.7973 16.9999 13.9007 17.0692 14.0147 17.1166C14.1287 17.1639 14.2508 17.1882 14.3742 17.1882C14.4976 17.1882 14.6198 17.1639 14.7337 17.1166C14.8477 17.0692 14.9512 16.9999 15.0383 16.9125L18.1633 13.7875C18.3391 13.6117 18.4378 13.3732 18.4378 13.1246C18.4378 12.876 18.3391 12.6375 18.1633 12.4617Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </th>
                <th className="w-[13%] font-semibold px-[10px]">NIK</th>
                <th className="w-[7%] font-semibold px-[10px]">
                  Jenis Kelamin (P/L)
                </th>
                <th className="w-[12%] font-semibold px-[10px]">
                  <div className="flex justify-between items-center">
                    <p>Simpanan Pokok</p>
                  </div>
                </th>
                <th className="w-[12%] font-semibold px-[10px]">
                  <div className="flex justify-between items-center">
                    <p>Simpanan Wajib</p>
                  </div>
                </th>
                <th className="w-[12%] font-semibold px-[10px]">
                  <div className="flex justify-between items-center">
                    <p>Simpanan Sukarela</p>
                  </div>
                </th>
                <th className="w-[12%] font-semibold px-[10px]">
                  <div className="flex justify-between items-center">
                    <p>Total Pinjaman</p>
                  </div>
                </th>
                <th className="w-[8%] font-semibold px-[10px]">
                  Ketua Kelompok
                </th>
                <th className="w-[9%] font-semibold px-[10px]">Status</th>
                <th className="w-[9%] font-semibold px-[10px]">
                  Detail Anggota
                </th>
              </tr>
            </thead>
            <tbody>
              {dataMember.map((item, index) => (
                <tr key={item.id} className=" border-b border-[#DDE1E6]">
                  <td className="break-words px-[10px]">{item.id}</td>
                  <td className="px-[10px]">{item.name}</td>
                  <td className="px-[10px]">{item.nik}</td>
                  <td className="px-[10px]">
                    {item.gender === "laki-laki" ? "L" : "P"}
                  </td>
                  <td className="px-[10px]">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(item.deposit.principalDeposit)}
                  </td>
                  <td className="px-[10px]">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(item.deposit.mandatoryDeposit)}
                  </td>
                  <td className="px-[10px]">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(item.deposit.voluntaryDeposit)}
                  </td>
                  <td className="px-[10px]">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(item.totalLoan)}
                  </td>
                  <td className="px-[10px]">{item.leader.name}</td>
                  <td className="px-[10px]">
                    <div className="flex justify-center items-center h-[64px]">
                      {item.isActive ? (
                        <button className="bg-green-status-1 w-[86px] py-[1px] text-white rounded-lg mx-auto my-auto">
                          Aktif
                        </button>
                      ) : (
                        <button className="bg-red-status-1 w-[86px] py-[1px] text-white rounded-lg mx-auto my-auto">
                          Tidak Aktif
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="px-[10px]">
                    <div className="flex justify-center items-center h-[64px]">
                      <Link
                        href={`/daftar-anggota/detail/${item.id}`}
                        className="bg-primary w-[98px] py-[1px] text-white rounded-lg text-center"
                      >
                        Cek Detail
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Modal
        isVisible={showAturPublish}
        onClose={() => {
          setAturPublish(false);
        }}
      >
        <h3 className="text-black font-bold text-xl">Atur Publish</h3>
        <div className="flex gap-3">
          <div className="flex-col w-1/2">
            <label htmlFor="cabang">Cabang</label>
            <input
              id="cabang"
              type="text"
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-xl mt-[5px] bg-white focus:outline-none italic"
              placeholder="Auto Generated"
              disabled
            />
          </div>
          <div className="flex-col w-1/2">
            <label htmlFor="jumlahAnggota">Jumlah Anggota</label>
            <input
              id="jumlahAnggota"
              type="text"
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-xl mt-[5px] bg-white focus:outline-none italic"
              placeholder="Auto Generated"
              disabled
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex-col w-1/2">
            <label htmlFor="jumlahAnggotaAktif">Jumlah Anggota Aktif</label>
            <input
              id="jumlahAnggotaAktif"
              type="text"
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-xl mt-[5px] bg-white focus:outline-none italic"
              placeholder="Auto Generated"
              disabled
            />
          </div>
          <div className="flex-col w-1/2">
            <label htmlFor="jumlahAnggotaTidakAktif">
              Jumlah Anggota Tidak Aktif
            </label>
            <input
              id="jumlahAnggotaTidakAktif"
              type="text"
              className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-xl mt-[5px] bg-white focus:outline-none italic"
              placeholder="Auto Generated"
              disabled
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="aturJumlahPublish">Atur Jumlah Publish</label>
          <input
            id="aturJumlahPublish"
            type="text"
            className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-xl mt-[5px] bg-white focus:outline-none"
            placeholder="Masukkan Jumlah yang Sesuai"
          />
          <p className="text-sm text-[#525256]">
            Maksimal sesuai jumlah anggota aktif
          </p>
        </div>
        <button
          type="button"
          className="w-[148px] px-[20px] py-[12px] text-white bg-primary rounded-lg ml-auto"
          onClick={(e) => {
            setAturPublish(false);
            setProsesData(true);
          }}
        >
          Simpan
        </button>
      </Modal>
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

export default DashboardKepalaCabangDanTeller;
