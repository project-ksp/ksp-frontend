"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LoginPage() {
  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    usernameError: "",
    passwordError: "",
    loginError: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      redirect("/dashboard");
    }
  });

  const validateForm = () => {
    if (auth.username === "" && auth.password === "") {
      setError({
        usernameError: "Username tidak boleh kosong",
        passwordError: "Password tidak boleh kosong",
      });
      return false;
    }
    if (auth.username === "") {
      setError({
        usernameError: "Username tidak boleh kosong",
      });
      return false;
    }
    if (auth.password === "") {
      setError({
        passwordError: "Password tidak boleh kosong",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const response = await signIn("credentials", {
      username: auth.username,
      password: auth.password,
      redirect: false,
    });

    if (!response.ok) {
      setError({
        loginError: "Username atau Password salah",
      });
    } else {
      router.push("/dashboard");
    }
    setLoading(false);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-mainBg">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="w-[515px] h-[468px] relative">
            <Image
              fill
              src="/images/logo_dekopin.png"
              alt="Sentosa Makmur"
              style={{ objectFit: "cover" }}
              sizes="100%"
              priority
            />
          </div>
          <h4 className="text-xl font-bold text-black mt-3">
            KOPERASI SIMPAN PINJAM
          </h4>
          <h2 className="text-black text-title-large font-bold">
            SENTOSA MAKMUR
          </h2>
          <h3 className="text-black text-2xl font-bold">JAWA TIMUR</h3>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center bg-primary">
        <form
          className="flex flex-col w-[450px]"
          onSubmit={handleSubmit}
          method="POST"
        >
          <h2 className="text-title-large text-white mb-[25px] font-bold">
            Masuk
          </h2>
          {error.loginError && (
            <div className="bg-red-status-1 px-3 py-2 w-full rounded-md">
              <p className="text-red-status-2 text-base font-bold">
                {error.loginError}
              </p>
            </div>
          )}
          <div className="mb-[27px]">
            <label
              htmlFor="username"
              className="block text-white mb-[15px] text-lg"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              onChange={(e) => setAuth({ ...auth, username: e.target.value })}
              className="p-3 w-full bg-transparent border border-filled-color rounded-md text-filled-color focus:text-mainBg focus:border-mainBg focus:outline-none"
            ></input>
            {error.usernameError && (
              <p className="text-red-status-2 text-base">
                {error.usernameError}
              </p>
            )}
          </div>
          <div className="mb-[15px] relative">
            <label
              htmlFor="password"
              className="block text-white mb-[15px] text-lg"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={(e) => setAuth({ ...auth, password: e.target.value })}
              className="p-3 pr-[50px] w-full bg-transparent border border-filled-color rounded-md text-filled-color focus:text-mainBg focus:border-mainBg focus:outline-none peer"
            ></input>
            {showPassword ? (
              <FaEye
                className="absolute right-5 top-[58px] text-filled-color cursor-pointer peer-focus:text-mainBg"
                size={25}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEyeSlash
                className="absolute right-5 top-[58px] text-filled-color cursor-pointer peer-focus:text-mainBg"
                size={25}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
            {error.passwordError && (
              <p className="text-red-status-2 text-base">
                {error.passwordError}
              </p>
            )}
          </div>
          <div className="flex items-center mb-[25px]">
            <input
              type="checkbox"
              className="mr-2 w-[25px] h-[25px] bg-filled-color text-white rounded accent-secondary"
            ></input>
            <label
              htmlFor="username"
              value=""
              className="text-white text-lg items-center"
            >
              Biarkan saya tetap masuk
            </label>
          </div>
          <button
            type="submit"
            className={`w-full bg-primary rounded-md py-2.5 text-mainBg text-lg font-reguler border border-white focus:outline-none focus:bg-mainBg focus:text-primary hover:bg-mainBg hover:text-primary
            }`}
          >
            {loading ? "Memuat..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}
