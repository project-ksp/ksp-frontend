import Grid from "@/components/icons/Grid";
import Shop from "@/components/icons/Shop";
import PersonPencil from "@/components/icons/PersonPencil";
import PersonBag from "@/components/icons/PersonBag";
import PersonMedal from "@/components/icons/PersonMedal";
import TwoPerson from "@/components/icons/TwoPerson";
import TwoPaper from "@/components/icons/TwoPaper";

export const SIDENAV_ITEMS = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Grid />,
  },
  {
    title: "Data Master",
    path: "/data-master",
    icon: <Shop />,
  },
  {
    title: "Account Block",
    path: "/account-block",
    icon: <PersonPencil />,
  },
];

export const SIDENAV_ITEMS_KEPCAB = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Grid />,
  },
  {
    title: "Daftar Anggota",
    path: "/daftar-anggota",
    icon: <TwoPerson />,
    submenu: true,
    subMenuItems: [
      {
        title: "Form Simpanan/ Pinjaman",
        path: "/daftar-anggota/form-simpanan-pinjaman",
      },
      {
        title: "Form Pendaftaran Anggota",
        path: "/daftar-anggota/tambah-anggota",
      },
      {
        title: "Pengajuan Hapus Anggota",
        path: "/daftar-anggota/hapus-anggota",
      },
      {
        title: "Rekap Anggota",
        path: "daftar-anggota/rekap-anggota",
      },
    ],
  },
  {
    title: "Daftar Ketua Kelompok",
    path: "/daftar-ketua-kelompok",
    icon: <PersonMedal />,
  },
  {
    title: "Daftar Teller",
    path: "/daftar-teller",
    icon: <PersonBag />,
  },
  {
    title: "Status Pengajuan",
    path: "/status-pengajuan",
    icon: <TwoPaper />,
    submenu: true,
    subMenuItems: [
      {
        title: "Pengajuan Simpanan",
        path: "/status-pengajuan/pengajuan-simpanan",
      },
      {
        title: "Pinjaman Anggota Lama",
        path: "/status-pengajuan/pinjaman-anggota-lama",
      },
      {
        title: "Penghapusan Anggota",
        path: "/status-pengajuan/penghapusan-anggota",
      },
    ],
  },
  {
    title: "Account Block",
    path: "/account-block",
    icon: <PersonPencil />,
  },
];
