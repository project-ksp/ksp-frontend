"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";
import DropdownSelector from "@/components/DropdownSelector";
import Modal from "@/components/Modal";

const DetailTeller = () => {
  const { data: session, status } = useSession();
  const { id } = useParams();
  const formRef = useRef();

  const [agamaOpen, setAgamaOpen] = useState();
  const [pendidikanOpen, setPendidikanOpen] = useState();
  const [jenisKelaminOpen, setJenisKelaminOpen] = useState();
  const [loading, setLoading] = useState();
  const [showProsesData, setProsesData] = useState();
  const [showBerhasil, setBerhasil] = useState();

  const [teller, setTeller] = useState({
    id: "",
    name: "",
    birthPlace: "",
    birthDate: "",
    gender: "",
    nik: "",
    age: 0,
    religion: "",
    occupation: "",
    address: "",
    kelurahan: "",
    kecamatan: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    education: "",
  });
  const [allowEdit, setAllowEdit] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (!id) return;
    const getTeller = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}tellers/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setTeller(data.data);
      } else {
        toast.error(data.message);
      }
    };

    getTeller();
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

  const submitData = async (e) => {
    e.preventDefault();
    if (
      teller.gender === "Pilih Jenis Kelamin" ||
      teller.religion === "Pilih Agama" ||
      teller.education === "Pilih Pendidikan Terakhir"
    ) {
      toast.error("Mohon lengkapi data teller");
      setProsesData(false);
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}tellers/${teller.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify({ ...teller }),
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

  if (status === "loading") return <p>Loading...</p>;

  return (
    <form
      onSubmit={(e) => {
        submitData(e);
      }}
      ref={formRef}
    >
      {loading && <div className="inset-0 fixed bg-black/20 z-50"></div>}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-black">Daftar Teller</h2>
        <div className="flex gap-4">
          <Link href={"/daftar-teller"}>
            <button
              type="button"
              className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center"
            >
              Kembali
            </button>
          </Link>

          <button
            type="button"
            onClick={() => setAllowEdit(!allowEdit)}
            className="bg-primary text-white w-[228px] h-[48px] rounded-md text-center"
          >
            {allowEdit ? "Batal" : "Edit Data Diri"}
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
              src={`${process.env.NEXT_PUBLIC_BASE_URL}public/${teller.profilePictureUrl}`}
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
                defaultValue={teller.id}
                disabled
                onChange={(e) => setTeller({ ...teller, id: e.target.value })}
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="namaTeller">Nama Teller</label>
              <input
                type="text"
                id="namaTeller"
                name="namaTeller"
                placeholder="Isi Nama Teller"
                defaultValue={teller.name}
                onChange={(e) => setTeller({ ...teller, name: e.target.value })}
                disabled={!allowEdit}
                required
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="nikTeller">NIK</label>
              <input
                type="text"
                id="nikTeller"
                name="nikTeller"
                placeholder="Isi Nik Teller"
                defaultValue={teller.nik}
                onChange={(e) => setTeller({ ...teller, nik: e.target.value })}
                disabled={!allowEdit}
                required
                className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
              />
            </div>
            <div className="flex gap-3">
              {allowEdit ? (
                <div className="w-1/2">
                  <label htmlFor="agama">Agama</label>
                  <button
                    type="button"
                    name="agamaTeller"
                    id="agamaTeller"
                    className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-[#d9d9d9] bg-transparent focus:outline-none ${
                      teller.religion === "Pilih Agama"
                        ? "text-[#d9d9d9]"
                        : "text-primary"
                    }`}
                    onClick={() => setAgamaOpen(!agamaOpen)}
                  >
                    {teller.religion.charAt(0).toUpperCase() +
                      teller.religion.slice(1)}
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
                          setTeller({
                            ...teller,
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
              ) : (
                <div className="w-1/2">
                  <label htmlFor="agamaTeller">Agama</label>
                  <input
                    type="text"
                    id="agamaTeller"
                    name="agamaTeller"
                    placeholder="Isi Agama Teller"
                    defaultValue={teller.religion}
                    disabled={!allowEdit}
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                  />
                </div>
              )}
              {allowEdit ? (
                <div className="w-1/2">
                  <label htmlFor="pendidikan">Pendidikan Terakhir</label>
                  <button
                    type="button"
                    name="pendidikan"
                    id="pendidikan"
                    className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-[#d9d9d9] bg-transparent focus:outline-none ${
                      teller.education === "Pilih Pendidikan Terakhir"
                        ? "text-[#d9d9d9]"
                        : "text-primary"
                    }`}
                    onClick={() => setPendidikanOpen(!pendidikanOpen)}
                  >
                    {teller.education.toUpperCase()}
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
                          setTeller({
                            ...teller,
                            education: option.toLowerCase(),
                          })
                        }
                        options={["SD", "SMP", "SMA", "S1", "S2"]}
                        onClose={() => setPendidikanOpen(false)}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-1/2">
                  <label htmlFor="pendidikanTeller">Pendidikan Terakhir</label>
                  <input
                    type="text"
                    id="pendidikanTeller"
                    name="pendidikanTeller"
                    placeholder="Isi Pendidikan Teller"
                    defaultValue={teller.education}
                    disabled={!allowEdit}
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                  />
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <div className="w-1/4">
                <label htmlFor="tempatLahirTeller">Tempat Lahir</label>
                <input
                  type="text"
                  id="tempatLahirTeller"
                  name="tempatLahirTeller"
                  placeholder="Isi Tempat Lahir Teller"
                  defaultValue={teller.birthPlace}
                  disabled={!allowEdit}
                  onChange={(e) =>
                    setTeller({ ...teller, birthPlace: e.target.value })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="tanggalLahirTeller">Tanggal Lahir</label>
                <input
                  type="date"
                  id="tanggalLahirTeller"
                  name="tanggalLahirTeller"
                  placeholder="Isi Tanggal Lahir Teller"
                  value={teller.birthDate}
                  disabled={!allowEdit}
                  onChange={(e) =>
                    new Date(e.target.value) < Date.now() &&
                    setTeller({ ...teller, birthDate: e.target.value })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="umurTeller">Umur</label>
                <input
                  type="text"
                  id="umurTeller"
                  name="umurTeller"
                  placeholder="Isi Umur Teller"
                  value={countAge(teller.birthDate).toString()}
                  disabled
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                />
              </div>
              {allowEdit ? (
                <div className="w-1/4">
                  <label htmlFor="jenisKelamin">Jenis Kelamin</label>
                  <button
                    type="button"
                    name="jenisKelamin"
                    id="jenisKelamin"
                    className={`w-full flex justify-between py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] text-start text-[#d9d9d9] bg-transparent focus:outline-none ${
                      teller.gender === "Pilih Jenis Kelamin"
                        ? "text-[#d9d9d9]"
                        : "text-primary"
                    }`}
                    onClick={() => setJenisKelaminOpen(!jenisKelaminOpen)}
                  >
                    {teller.gender.charAt(0).toUpperCase() +
                      teller.gender.slice(1)}
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
                          setTeller({
                            ...teller,
                            gender: option.toLowerCase(),
                          })
                        }
                        options={["Laki-Laki", "Perempuan"]}
                        onClose={() => setJenisKelaminOpen(false)}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-1/4">
                  <label htmlFor="jenisKelaminTeller">Jenis Kelamin</label>
                  <input
                    type="text"
                    id="jenisKelaminTeller"
                    name="jenisKelaminTeller"
                    placeholder="Isi Jenis Kelamin Teller"
                    defaultValue={teller.gender}
                    disabled={!allowEdit}
                    className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                  />
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <div className="w-1/2">
                <label htmlFor="alamatLengkapTeller">Alamat Lengkap</label>
                <input
                  type="text"
                  id="alamatLengkapTeller"
                  name="alamatLengkapTeller"
                  placeholder="Isi Alamat Lengkap Teller"
                  defaultValue={teller.address}
                  onChange={(e) =>
                    setTeller({ ...teller, address: e.target.value })
                  }
                  disabled={!allowEdit}
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="noHpTeller">No. HP(WhatsApp)</label>
                <input
                  type="text"
                  id="noHpTeller"
                  name="noHpTeller"
                  placeholder="Isi NoHp Teller"
                  defaultValue={teller.phoneNumber}
                  onChange={(e) =>
                    setTeller({ ...teller, phoneNumber: e.target.value })
                  }
                  disabled={!allowEdit}
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
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
                  defaultValue={teller.kelurahan}
                  disabled={!allowEdit}
                  onChange={(e) =>
                    setTeller({ ...teller, kelurahan: e.target.value })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="kecamatanTeller">Kecamatan</label>
                <input
                  type="text"
                  id="kecamatanTeller"
                  name="kecamatanTeller"
                  placeholder="Isi Kecamatan Teller"
                  defaultValue={teller.kecamatan}
                  disabled={!allowEdit}
                  onChange={(e) =>
                    setTeller({ ...teller, kecamatan: e.target.value })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="kabupatenTeller">Kabupaten/Kota</label>
                <input
                  type="text"
                  id="kabupatenTeller"
                  name="kabupatenTeller"
                  placeholder="Isi Kabupaten Teller"
                  defaultValue={teller.city}
                  disabled={!allowEdit}
                  onChange={(e) =>
                    setTeller({ ...teller, city: e.target.value })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                />
              </div>
              <div className="w-1/4">
                <label htmlFor="kodePosTeller">Kode Pos</label>
                <input
                  type="text"
                  id="kodePosTeller"
                  name="kodePosTeller"
                  placeholder="Isi Jenis Kelamin Teller"
                  defaultValue={teller.postalCode}
                  disabled={!allowEdit}
                  onChange={(e) =>
                    setTeller({ ...teller, postalCode: e.target.value })
                  }
                  required
                  className="w-full py-[10px] px-[20px] border border-[#d9d9d9] rounded-md mt-[8px] bg-white focus:outline-none disabled:bg-black/5 disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-2">
        <button
          type="button"
          className="w-[228px] px-[20px] py-[12px] text-white bg-primary rounded-lg ml-auto disabled:bg-primary/50"
          disabled={!allowEdit}
          onClick={(e) => {
            if (formRef.current.checkValidity()) {
              setProsesData(true);
            } else {
              formRef.current.reportValidity();
            }
          }}
        >
          Simpan
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
          onClick={() => {
            setLoading(true);
          }}
        >
          {!loading ? "Proses Data" : "Menyimpan data..."}
        </button>
      </Modal>
      <Modal
        isVisible={showBerhasil}
        onClose={() => {
          setBerhasil(false);
          setAllowEdit(false);
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
            setAllowEdit(false);
          }}
        >
          OK
        </button>
      </Modal>
    </form>
  );
};

export default DetailTeller;
