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
    role: ["owner", "teller", "branch_head"],
  },
  {
    title: "Data Master",
    path: "/data-master",
    icon: <Shop />,
    role: ["owner"],
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
        title: "Pengajuan Hapus Anggota",
        path: "/daftar-anggota/pengajuan-hapus-anggota",
      },
      {
        title: "Rekap Anggota",
        path: "/daftar-anggota/rekap-anggota",
      },
    ],
    role: ["branch_head", "teller"],
  },
  {
    title: "Daftar Ketua Kelompok",
    path: "/daftar-ketua-kelompok",
    icon: <PersonMedal />,
    role: ["branch_head", "teller"],
  },
  {
    title: "Daftar Teller",
    path: "/daftar-teller",
    icon: <PersonBag />,
    role: ["branch_head"],
  },
  {
    title: "Status Pengajuan",
    path: "/status-pengajuan",
    icon: <TwoPaper />,
    submenu: true,
    subMenuItems: [
      {
        title: "Anggota Baru",
        path: "/status-pengajuan/anggota-baru",
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
    role: ["branch_head", "teller"],
  },
  {
    title: "Cetak Berkas",
    path: "/cetak-berkas",
    icon: <TwoPaper />,
    role: ["branch_head", "teller"],
  },

  {
    title: "Account Block",
    path: "/account-block",
    icon: <PersonPencil />,
    role: ["owner", "branch_head"],
  },
];

export const SIDENAV_ITEMS_KEPCAB = [];
