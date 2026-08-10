export type ProjectStatus =
  | "AVAILABLE"
  | "SOLD_OUT"
  | "COMING_SOON";

export interface PropertyProject {
  id: string;
  name: string;
  location: string;

  // Data unit
  totalUnits: number;
  soldUnits: number;

  // Informasi penjualan
  price: string;
  installment: string;

  // Status project
  status: ProjectStatus;

  // Media
  images: string[];

  // Detail project
  description?: string;
  specifications?: string[];
  facilities?: string[];
}

export const projects: PropertyProject[] = [
  {
    id: "permata-alam-lestari-2",
    name: "Permata Alam Lestari 2",
    location: "Pal 7, Gg. Lingkungan 2 (Batas Kota)",

    // DATA CONTOH - akan diganti dengan data asli
    totalUnits: 100,
    soldUnits: 72,

    price: "Rp182 jutaan",
    installment: "Mulai Rp1 jutaan / bulan",

    status: "AVAILABLE",

    images: [
      "/images/projects/permata-alam-lestari-2/pal 2.webp",
      "/images/projects/permata-alam-lestari-2/pal2 f2.webp",
      "/images/projects/permata-alam-lestari-2/pal2 f3.webp",
      "/images/projects/permata-alam-lestari-2/pal2 f4.webp",
      "/images/projects/permata-alam-lestari-2/pal2 f5.webp",
    ],

    description:
      "Project perumahan subsidi Borneo Real Properti di kawasan Pal 7, Batas Kota.",
  },

  {
    id: "swadaya-indah-lestari-3",
    name: "Swadaya Indah Lestari 3",
    location: "Jalan Swadaya, Kota Baru",

    // DATA CONTOH - akan diganti dengan data asli
    totalUnits: 120,
    soldUnits: 85,

    price: "Rp182 jutaan",
    installment: "Mulai Rp1 jutaan / bulan",

    status: "AVAILABLE",

    images: [
      "/images/projects/swadaya-indah-lestari-3/foto1.webp",
      "/images/projects/swadaya-indah-lestari-3/foto2.webp",
      "/images/projects/swadaya-indah-lestari-3/foto3.webp",
      "/images/projects/swadaya-indah-lestari-3/foto4.webp",
      "/images/projects/swadaya-indah-lestari-3/foto5.webp",
      "/images/projects/swadaya-indah-lestari-3/foto6.webp",
      "/images/projects/swadaya-indah-lestari-3/foto7.webp",
      "/images/projects/swadaya-indah-lestari-3/foto8.webp",
    ],

    description:
      "Project perumahan subsidi Borneo Real Properti di kawasan Kota Baru.",
  },

  {
    id: "borneo-living-estate",
    name: "Borneo Living Estate",
    location: "Jalan Pemuda, Sungai Rengas",

    // DATA CONTOH - akan diganti dengan data asli
    totalUnits: 150,
    soldUnits: 96,

    price: "Rp182 jutaan",
    installment: "Mulai Rp1 jutaan / bulan",

    status: "AVAILABLE",

    images: [
      "/images/projects/borneo-living-estate/brl1.webp",
      "/images/projects/borneo-living-estate/brl2.webp",
      "/images/projects/borneo-living-estate/brl3.webp",
    ],

    description:
      "Project perumahan subsidi Borneo Real Properti di kawasan Sungai Rengas.",
  },
];

export const getAvailableUnits = (
  project: PropertyProject
): number => {
  return Math.max(
    project.totalUnits - project.soldUnits,
    0
  );
};

export const getProjectStatus = (
  project: PropertyProject
): ProjectStatus => {
  if (project.status === "COMING_SOON") {
    return "COMING_SOON";
  }

  if (project.soldUnits >= project.totalUnits) {
    return "SOLD_OUT";
  }

  return "AVAILABLE";
};