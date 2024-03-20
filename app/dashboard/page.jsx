import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex h-[48px] gap-[36px]">
        <div className="w-4/5 relative">
          <input
            type="text"
            name="search"
            placeholder="Cari cabang"
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
        <button className="w-1/5 bg-primary px-[15px] py-[8px] flex justify-center items-center text-white rounded-md">
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
          <p className="ml-5 text-base font-regular">Tambah Cabang</p>
        </button>
      </div>
      <div className="bg-white p-[20px] rounded-xl">
        <h3 className="text-black text-lg font-bold my-[12px]">
          Dashboard Overview
        </h3>
        <div className="flex w-full gap-[50px]">
          <div className="bg-gradient-to-r from-[#c0deff] to-white p-[16px] shadow-lg rounded-xl w-1/3 relative overflow-hidden">
            <h4 className="text-[#192839] text-lg font-bold">Jumlah Cabang</h4>
            <hr className="border border-[#192839] my-[12px] w-4/5" />
            <p className="text-[#192839] text-xl font-bold">20</p>
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
              Total Anggota Aktif
            </h4>
            <hr className="border border-green-status-1 my-[12px] w-4/5" />
            <p className="text-green-status-1 text-xl font-bold">20,0932</p>
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
              Total Anggota Tidak Aktif
            </h4>
            <hr className="border border-red-status-1 my-[12px] w-4/5" />
            <p className="text-red-status-1  text-xl font-bold">10,2314</p>
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
      <div className="bg-white p-[20px] rounded-xl">
        <table className="table-fixed w-full text-left">
          <thead>
            <tr className="border-b border-[#DDE1E6]">
              <th className="w-[7%] font-semibold py-[13px]">ID Cabang</th>
              <th className="w-[10%] font-semibold">Lokasi Cabang</th>
              <th className="w-[13%] font-semibold">Nama Ketua Cabang</th>
              <th className="w-[9%] font-semibold">Jumlah Anggota Aktif</th>
              <th className="w-[9%] font-semibold">
                Jumlah Anggota Tidak Aktif
              </th>
              <th className="w-[13%] font-semibold">Total Simpanan</th>
              <th className="w-[13%] font-semibold">Total Pinjaman</th>
              <th className="w-[8%] font-semibold">Total Publish</th>
              <th className="w-[9%] font-semibold">Setting Publish</th>
              <th className="w-[9%] font-semibold">Akses Cabang</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="py-[13px]">01</td>
              <td>Mojokerto</td>
              <td>M.Ikhsan M</td>
              <td>999,999</td>
              <td>99,999</td>
              <td>Rp. 99,999,999</td>
              <td>Rp. 99,999,999</td>
              <td>99</td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Atur
                </div>
              </td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Akses
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="py-[13px]">01</td>
              <td>Mojokerto</td>
              <td>M.Ikhsan M</td>
              <td>999,999</td>
              <td>99,999</td>
              <td>Rp. 99,999,999</td>
              <td>Rp. 99,999,999</td>
              <td>99</td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Atur
                </div>
              </td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Akses
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="py-[13px]">01</td>
              <td>Mojokerto</td>
              <td>M.Ikhsan M</td>
              <td>999,999</td>
              <td>99,999</td>
              <td>Rp. 99,999,999</td>
              <td>Rp. 99,999,999</td>
              <td>99</td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Atur
                </div>
              </td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Akses
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="py-[13px]">01</td>
              <td>Mojokerto</td>
              <td>M.Ikhsan M</td>
              <td>999,999</td>
              <td>99,999</td>
              <td>Rp. 99,999,999</td>
              <td>Rp. 99,999,999</td>
              <td>99</td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Atur
                </div>
              </td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Akses
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="py-[13px]">01</td>
              <td>Mojokerto</td>
              <td>M.Ikhsan M</td>
              <td>999,999</td>
              <td>99,999</td>
              <td>Rp. 99,999,999</td>
              <td>Rp. 99,999,999</td>
              <td>99</td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Atur
                </div>
              </td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Akses
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="py-[13px]">01</td>
              <td>Mojokerto</td>
              <td>M.Ikhsan M</td>
              <td>999,999</td>
              <td>99,999</td>
              <td>Rp. 99,999,999</td>
              <td>Rp. 99,999,999</td>
              <td>99</td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Atur
                </div>
              </td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Akses
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="py-[13px]">01</td>
              <td>Mojokerto</td>
              <td>M.Ikhsan M</td>
              <td>999,999</td>
              <td>99,999</td>
              <td>Rp. 99,999,999</td>
              <td>Rp. 99,999,999</td>
              <td>99</td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Atur
                </div>
              </td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Akses
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="py-[13px]">01</td>
              <td>Mojokerto</td>
              <td>M.Ikhsan M</td>
              <td>999,999</td>
              <td>99,999</td>
              <td>Rp. 99,999,999</td>
              <td>Rp. 99,999,999</td>
              <td>99</td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Atur
                </div>
              </td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Akses
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="py-[13px]">01</td>
              <td>Mojokerto</td>
              <td>M.Ikhsan M</td>
              <td>999,999</td>
              <td>99,999</td>
              <td>Rp. 99,999,999</td>
              <td>Rp. 99,999,999</td>
              <td>99</td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Atur
                </div>
              </td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Akses
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="py-[13px]">01</td>
              <td>Mojokerto</td>
              <td>M.Ikhsan M</td>
              <td>999,999</td>
              <td>99,999</td>
              <td>Rp. 99,999,999</td>
              <td>Rp. 99,999,999</td>
              <td>99</td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Atur
                </div>
              </td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Akses
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="py-[13px]">01</td>
              <td>Mojokerto</td>
              <td>M.Ikhsan M</td>
              <td>999,999</td>
              <td>99,999</td>
              <td>Rp. 99,999,999</td>
              <td>Rp. 99,999,999</td>
              <td>99</td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Atur
                </div>
              </td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Akses
                </div>
              </td>
            </tr>
            <tr className=" border-b border-[#DDE1E6]">
              <td className="py-[13px]">01</td>
              <td>Mojokerto</td>
              <td>M.Ikhsan M</td>
              <td>999,999</td>
              <td>99,999</td>
              <td>Rp. 99,999,999</td>
              <td>Rp. 99,999,999</td>
              <td>99</td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Atur
                </div>
              </td>
              <td>
                <div className="bg-filled-color mx-[10px] my-[3px] text-black rounded-lg text-center">
                  Akses
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
