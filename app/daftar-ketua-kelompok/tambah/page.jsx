"use client";
import React, { useState, useRef } from "react";
import Modal from "@/components/Modal";
import DropdownSelector from "@/components/DropdownSelector";
import Image from "next/image";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const TambahKetuaKelompok = () => {
  const { data: session, status } = useSession();
  const formRef = useRef();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [showProsesData, setProsesData] = useState(false);
  const [showBerhasil, setBerhasil] = useState(false);
  const [agamaOpen, setAgamaOpen] = useState(false);
  const [pendidikanOpen, setPendidikanOpen] = useState(false);
  const [jenisKelaminOpen, setJenisKelaminOpen] = useState(false);
  const [fotoKtp, setFotoKtp] = useState(undefined);

  const [leaderData, setLeaderData] = useState({
    name: "",
    birthPlace: "",
    birthDate: "",
    gender: "Pilih Jenis Kelamin",
    nik: "",
    age: 0,
    religion: "Pilih Agama",
    address: "",
    kelurahan: "",
    kecamatan: "",
    city: "",
    phoneNumber: "",
    education: "Pilih Pendidikan Terakhir",
    idPictureUrl: "",
  });

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

  const uploadFotoKtp = async (e) => {
    if (!e.target.files[0]) {
      setLeaderData({ ...leaderData, idPictureUrl: "" });
      setFotoKtp(undefined);
      return;
    }
    setFotoKtp(e.target.files[0]);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}uploads/temp/image`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
        body: formData,
      }
    );
    const data = await res.json();
    if (res.ok) {
      setLeaderData({ ...leaderData, idPictureUrl: data.data });
    } else {
      setFotoKtp(undefined);
      toast.error(data.message);
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      leaderData.gender === "Pilih Jenis Kelamin" ||
      leaderData.religion === "Pilih Agama" ||
      leaderData.education === "Pilih Pendidikan Terakhir"
    ) {
      toast.error("Mohon lengkapi data ketua kelompok");
      setProsesData(false);
      setLoading(false);
      return;
    }

    if (leaderData.idPictureUrl === "") {
      toast.error("Mohon tambahkan foto KTP");
      setProsesData(false);
      setLoading(false);
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}leaders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.token}`,
      },
      body: JSON.stringify(leaderData),
    });

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
    <form onSubmit={(e) => submitData(e)} ref={formRef}>
      {loading && <div className="inset-0 fixed bg-black/20 z-50"></div>}
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-2xl font-bold text-black">Tambah Ketua Kelompok</h2>
        <div className="bg-white p-[20px] rounded-xl">
          <p className="text-black font-regular text-lg mb-[10px]">
            Silahkan lengkapi form berikut dengan benar.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <div className="w-1/2">
                <label htmlFor="cabang">Cabang</label>
                <input
                  type="text"
                  id="cabang"
                  name="cabang"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic disabled:bg-black/5 disabled:cursor-not-allowed"
                  disabled
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="idKetuaKelompok">ID Ketua Kelompok</label>
                <input
                  type="text"
                  id="idKetuaKelompok"
                  name="idKetuaKelompok"
                  placeholder="Auto Generated"
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none italic disabled:bg-black/5 disabled:cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="namaLengkap">Nama Lengkap</label>
              <input
                type="text"
                id="namaLengkap"
                name="namaLengkap"
                placeholder="Isi Nama Sesuai KTP"
                onChange={(e) =>
                  setLeaderData({ ...leaderData, name: e.target.value })
                }
                required
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
              />
            </div>
            <div className="flex gap-3">
              <div className="w-1/4">
                <label htmlFor="tempatLahir">Tempat Lahir</label>
                <input
                  type="text"
                  id="tempatLahir"
                  name="tempatLahir"
                  placeholder="Isi Tempat Lahir Sesuai KTP"
                  onChange={(e) =>
                    setLeaderData({ ...leaderData, birthPlace: e.target.value })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="tanggalLahir">Tanggal Lahir</label>
                <input
                  type="date"
                  id="tanggalLahir"
                  name="tanggalLahir"
                  onChange={(e) =>
                    new Date(e.target.value) < Date.now()
                      ? setLeaderData({
                          ...leaderData,
                          birthDate: e.target.value,
                        })
                      : setLeaderData({ ...leaderData, birthDate: Date.now() })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] text-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="umur">Umur</label>
                <input
                  type="text"
                  id="umur"
                  name="umur"
                  value={
                    (leaderData.birthDate && countAge(leaderData.birthDate)) ||
                    leaderData.age
                  }
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                  disabled
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="jenisKelamin">Jenis Kelamin</label>
                <button
                  type="button"
                  name="jenisKelamin"
                  id="jenisKelamin"
                  className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-[#d9d9d9] bg-transparent focus:outline-none ${
                    leaderData.gender === "Pilih Jenis Kelamin"
                      ? "text-[#d9d9d9]"
                      : "text-primary"
                  }`}
                  onClick={() => setJenisKelaminOpen(!jenisKelaminOpen)}
                >
                  {leaderData.gender.charAt(0).toUpperCase() +
                    leaderData.gender.slice(1)}
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
                      selected={(option) =>
                        setLeaderData({
                          ...leaderData,
                          gender: option.toLowerCase(),
                        })
                      }
                      options={["Laki-Laki", "Perempuan"]}
                      onClose={() => setJenisKelaminOpen(false)}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-3/4">
                <label htmlFor="nik">NIK</label>
                <input
                  type="text"
                  id="nik"
                  name="nik"
                  placeholder="NIK Harus Sesuai KTP dan Terdaftar di Dukcapil"
                  onChange={(e) =>
                    setLeaderData({ ...leaderData, nik: e.target.value })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="agama">Agama</label>
                <button
                  type="button"
                  name="agama"
                  id="agama"
                  className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-[#d9d9d9] bg-transparent focus:outline-none ${
                    leaderData.religion === "Pilih Agama"
                      ? "text-[#d9d9d9]"
                      : "text-primary"
                  }`}
                  onClick={() => setAgamaOpen(!agamaOpen)}
                >
                  {leaderData.religion.charAt(0).toUpperCase() +
                    leaderData.religion.slice(1)}
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
                      selected={(option) =>
                        setLeaderData({
                          ...leaderData,
                          religion: option.toLowerCase(),
                        })
                      }
                      options={[
                        "Islam",
                        "Kristen",
                        "Katolik",
                        "Hindu",
                        "Buddha",
                        "Konghucu",
                      ]}
                      onClose={() => setAgamaOpen(false)}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/4">
                <label htmlFor="alamat">Alamat Lengkap</label>
                <input
                  type="text"
                  id="alamatCabang"
                  name="alamatCabang"
                  placeholder="Isi Alamat Lengkap Sesuai KTP"
                  onChange={(e) =>
                    setLeaderData({ ...leaderData, address: e.target.value })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="kelurahan">Kelurahan/Desa</label>
                <input
                  type="text"
                  id="kelurahan"
                  name="kelurahan"
                  placeholder="Isi Sesuai KTP"
                  onChange={(e) =>
                    setLeaderData({
                      ...leaderData,
                      kelurahan: e.target.value,
                    })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="kecamatan">Kecamatan</label>
                <input
                  type="text"
                  id="kecamatan"
                  name="kecamatan"
                  placeholder="Isi"
                  onChange={(e) =>
                    setLeaderData({
                      ...leaderData,
                      kecamatan: e.target.value,
                    })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="kota">Kabupaten/Kota</label>
                <input
                  type="text"
                  id="kota"
                  name="kota"
                  placeholder="Isi"
                  onChange={(e) =>
                    setLeaderData({ ...leaderData, city: e.target.value })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2/5">
                <label htmlFor="pendidikan">Pendidikan Terakhir</label>
                <button
                  type="button"
                  name="pendidikan"
                  id="pendidikan"
                  className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-[#d9d9d9] bg-transparent focus:outline-none ${
                    leaderData.education === "Pilih Pendidikan Terakhir"
                      ? "text-[#d9d9d9]"
                      : "text-primary"
                  }`}
                  onClick={() => setPendidikanOpen(!pendidikanOpen)}
                >
                  {leaderData.education.toUpperCase()}
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
                      selected={(option) =>
                        setLeaderData({
                          ...leaderData,
                          education: option.toLowerCase(),
                        })
                      }
                      options={["SD", "SMP", "SMA", "S1", "S2"]}
                      onClose={() => setPendidikanOpen(false)}
                    />
                  </div>
                )}
              </div>
              <div className="w-3/5">
                <label htmlFor="noHp">No. HP(WhatsApp)</label>
                <input
                  type="text"
                  id="noHp"
                  name="noHp"
                  placeholder="Isi Nomor HP (WhatsApp)"
                  onChange={(e) =>
                    setLeaderData({
                      ...leaderData,
                      phoneNumber: e.target.value,
                    })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <label htmlFor="fotoKtp" className="flex flex-1">
                {fotoKtp === undefined ? (
                  <div className="relative h-[80px] w-[80px]">
                    <Image
                      src={"/images/image_none.jpg"}
                      alt="Image_none"
                      fill
                      className="absolute rounded-md object-cover top-0"
                    />
                  </div>
                ) : (
                  <div className="relative h-[80px] w-[80px]">
                    <Image
                      src={URL.createObjectURL(fotoKtp)}
                      alt="Image_none"
                      fill
                      className="absolute rounded-md object-cover top-0"
                    />
                  </div>
                )}
                <div className="flex flex-col ml-2 flex-grow">
                  <p>Upload Foto KTP</p>
                  <div className="border border-[#d9d9d9] rounded-lg p-[10px] flex mt-1 items-center">
                    <div className="px-[25px] py-[2px] w-1/2 border border-secondary rounded-lg text-primary flex items-center">
                      <p>Tambah Foto</p>
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-3"
                      >
                        <path
                          d="M3.25 14C2.78587 14 2.34075 13.8156 2.01256 13.4874C1.68437 13.1592 1.5 12.7141 1.5 12.25V9.75C1.5 9.55109 1.57902 9.36032 1.71967 9.21967C1.86032 9.07902 2.05109 9 2.25 9C2.44891 9 2.63968 9.07902 2.78033 9.21967C2.92098 9.36032 3 9.55109 3 9.75V12.25C3 12.388 3.112 12.5 3.25 12.5H13.75C13.8163 12.5 13.8799 12.4737 13.9268 12.4268C13.9737 12.3799 14 12.3163 14 12.25V9.75C14 9.55109 14.079 9.36032 14.2197 9.21967C14.3603 9.07902 14.5511 9 14.75 9C14.9489 9 15.1397 9.07902 15.2803 9.21967C15.421 9.36032 15.5 9.55109 15.5 9.75V12.25C15.5 12.7141 15.3156 13.1592 14.9874 13.4874C14.6592 13.8156 14.2141 14 13.75 14H3.25Z"
                          fill="#004080"
                        />
                        <path
                          d="M12.2795 4.72C12.3491 4.7896 12.4043 4.87223 12.442 4.96316C12.4797 5.0541 12.4991 5.15157 12.4991 5.25C12.4991 5.34843 12.4797 5.44589 12.442 5.53683C12.4043 5.62777 12.3491 5.7104 12.2795 5.78C12.2099 5.8496 12.1273 5.90481 12.0364 5.94248C11.9454 5.98014 11.848 5.99953 11.7495 5.99953C11.6511 5.99953 11.5536 5.98014 11.4627 5.94248C11.3718 5.90481 11.2891 5.8496 11.2195 5.78L9.24953 3.811V9.5C9.24953 9.69891 9.17052 9.88968 9.02986 10.0303C8.88921 10.171 8.69845 10.25 8.49953 10.25C8.30062 10.25 8.10986 10.171 7.9692 10.0303C7.82855 9.88968 7.74953 9.69891 7.74953 9.5V3.811L5.77953 5.78C5.70993 5.8496 5.6273 5.90481 5.53637 5.94248C5.44543 5.98014 5.34796 5.99953 5.24953 5.99953C5.1511 5.99953 5.05364 5.98014 4.9627 5.94248C4.87176 5.90481 4.78913 5.8496 4.71953 5.78C4.64993 5.7104 4.59472 5.62777 4.55705 5.53683C4.51939 5.44589 4.5 5.34843 4.5 5.25C4.5 5.15157 4.51939 5.0541 4.55705 4.96316C4.59472 4.87223 4.64993 4.7896 4.71953 4.72L7.96953 1.47C8.0391 1.40033 8.12171 1.34507 8.21266 1.30736C8.3036 1.26965 8.40108 1.25024 8.49953 1.25024C8.59798 1.25024 8.69547 1.26965 8.78641 1.30736C8.87735 1.34507 8.95997 1.40033 9.02953 1.47L12.2795 4.72Z"
                          fill="#004080"
                        />
                      </svg>
                    </div>
                    <p className="text-[#3c3c3c] ml-[30px]">
                      {fotoKtp === undefined
                        ? "Tidak ada file terpilih"
                        : fotoKtp.name}
                    </p>
                  </div>
                  <input
                    type="file"
                    name="fotoKtp"
                    id="fotoKtp"
                    hidden
                    onChange={(e) => {
                      uploadFotoKtp(e);
                    }}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="w-[224px] px-[20px] py-[12px] text-white bg-primary rounded-lg ml-auto"
          onClick={(e) => {
            if (formRef.current.checkValidity()) {
              setProsesData(true);
            } else {
              formRef.current.reportValidity();
            }
          }}
        >
          Proses Data
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
        >
          Proses Data
        </button>
      </Modal>
      <Modal
        isVisible={showBerhasil}
        onClose={() => {
          setBerhasil(false);
          router.push("/daftar-ketua-kelompok");
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
            router.push("/daftar-ketua-kelompok");
          }}
        >
          OK
        </button>
      </Modal>
    </form>
  );
};

export default TambahKetuaKelompok;
