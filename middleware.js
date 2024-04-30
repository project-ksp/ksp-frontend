export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/detail",
    "/edit",
    "/owner",
    "/account-block/:path*",
    "/daftar-anggota/:path*",
    "/daftar-ketua-kelompok/:path*",
    "/daftar-teller/:path*",
    "/dashboard/:path*",
    "/data-master",
    "/status-pengajuan/:path*",
    "/account-block",
  ],
};
