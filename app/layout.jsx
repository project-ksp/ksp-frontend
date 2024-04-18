import { Manrope } from "next/font/google";
import "./globals.css";

import AuthProvider from "@/components/providers/AuthProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Sentosa Makmur",
  description: "Koperasi Simpan Pinjam Sentosa Makmur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${manrope.className} bg-mainBg`}>{children}</body>
      </AuthProvider>
    </html>
  );
}
