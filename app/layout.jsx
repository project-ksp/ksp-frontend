import { Manrope } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Sentosa Makmur",
  description: "Koperasi Simpan Pinjam Sentosa Makmur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-mainBg`}>
        <main className="flex h-full">
          <Sidebar />
          <div className="m-[30px] flex flex-col gap-[20px] w-full ml-[310px]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
