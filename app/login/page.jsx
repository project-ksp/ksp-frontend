import Image from "next/image";
import { FaEye } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex bg-primary h-screen">
      <div className="w-1/2 relative">
        <Image
          fill
          src="/images/login_image.png"
          alt="Sentosa Makmur"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <form className="flex flex-col w-[450px]">
          <h2 className="text-title-large text-white mb-[25px] font-bold">
            Masuk
          </h2>
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
              className="p-3 w-full bg-transparent border border-filled-color rounded-md text-filled-color focus:text-mainBg focus:border-mainBg focus:outline-none"
            ></input>
          </div>
          <div className="mb-[15px] relative">
            <label
              htmlFor="password"
              className="block text-white mb-[15px] text-lg"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="p-3 w-full bg-transparent border border-filled-color rounded-md text-filled-color focus:text-mainBg focus:border-mainBg focus:outline-none"
            ></input>
            <FaEye
              className="absolute right-5 top-[58px] text-mainBg cursor-pointer"
              size={25}
            />
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
            className="w-full bg-primary rounded-md py-2.5 text-mainBg text-lg font-reguler border border-white focus:outline-none focus:bg-mainBg focus:text-primary hover:bg-mainBg hover:text-primary"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
