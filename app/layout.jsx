import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Sentosa Makmur",
  description: "Koperasi Simpan Pinjam Sentosa Makmur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-mainBg`}>{children}</body>
    </html>
  );
}
