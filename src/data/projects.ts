export const SUBSIDY_PRICE = "Rp182 jutaan";
export interface PropertyProject {
  id: string;
  name: string;
  location: string;

  // Jumlah unit
  totalUnits: number;

  // Informasi penjualan
  price: string;

  blocks?: {
  name: string;
  landArea: string;
  units: number;
  sold?: boolean;
}[];

  // Media
  images: string[];

  // Detail project
  description?: string;

  specifications?: {
    label: string;
    value: string;
    icon: string;
  }[];

  facilities?: string[];
}

export const projects: PropertyProject[] = [
 {
  id: "permata-alam-lestari-2",
  name: "Permata Alam Lestari 2",
  location: "Pal 7, Gg. Lingkungan 2 (Batas Kota)",

  // JUMLAH UNIT
  totalUnits: 113,

  // INFORMASI PENJUALAN
  price: "Rp182 jutaan",

  // BLOK PROJECT
  blocks: [
    {
      name: "Blok AA",
      landArea: "8 × 16 m",
      units: 42,
    },
    {
      name: "Blok AB",
      landArea: "10 × 12 m",
      units: 71,
    },
  ],

  // MEDIA
  images: [
    "/images/projects/permata-alam-lestari-2/pal 2.webp",
    "/images/projects/permata-alam-lestari-2/pal2 f2.webp",
    "/images/projects/permata-alam-lestari-2/pal2 f3.webp",
    "/images/projects/permata-alam-lestari-2/pal2 f4.webp",
    "/images/projects/permata-alam-lestari-2/pal2 f5.webp",
  ],

  // DETAIL PROJECT
  description:
    "Project perumahan subsidi Borneo Real Properti di kawasan Pal 7, Gg. Lingkungan 2 (Batas Kota), dengan bangunan beton yang nyaman untuk keluarga.",

  // SPESIFIKASI
  specifications: [
    {
      label: "Kamar Tidur",
      value: "1 Kamar",
      icon: "bedroom",
    },
    {
      label: "Luas Tanah",
      value: "8 × 16 m – 10 × 12 m",
      icon: "land",
    },
    {
      label: "Listrik",
      value: "1300 / 2000 Watt",
      icon: "electricity",
    },
    {
      label: "Bangunan",
      value: "Beton",
      icon: "building",
    },
    {
      label: "Ruang Tamu",
      value: "1 Ruang",
      icon: "livingRoom",
    },
    {
      label: "Kamar Mandi",
      value: "1 Kamar",
      icon: "bathroom",
    },
  ],
},

{
  id: "permata-alam-lestari-2-cd",
  name: "Permata Alam Lestari 2 C-D",
  location: "Pal 7, Gg. Lingkungan 2 (Batas Kota)",

  // JUMLAH UNIT
  totalUnits: 67,

  // INFORMASI PENJUALAN
  price: SUBSIDY_PRICE,

  // MEDIA
  images: [
    "/images/projects/permata-alam-lestari-2-cd/pal2-1.jpeg",
    "/images/projects/permata-alam-lestari-2-cd/pal2-2.jpeg",
    "/images/projects/permata-alam-lestari-2-cd/pal2-3.jpeg",
    "/images/projects/permata-alam-lestari-2-cd/pal2-4.jpeg",
  ],

  // DETAIL PROJECT
  description:
    "Project perumahan subsidi Borneo Real Properti di kawasan Pal 7, Gg. Lingkungan 2 (Batas Kota), dengan bangunan beton yang nyaman untuk keluarga.",

  // SPESIFIKASI
  specifications: [
    {
      label: "Kamar Tidur",
      value: "1 Kamar",
      icon: "bedroom",
    },
    {
      label: "Luas Tanah",
      value: "10 × 13 m",
      icon: "land",
    },
    {
      label: "Listrik",
      value: "1300 / 2000 Watt",
      icon: "electricity",
    },
    {
      label: "Bangunan",
      value: "Beton",
      icon: "building",
    },
    {
      label: "Ruang Tamu",
      value: "1 Ruang",
      icon: "livingRoom",
    },
    {
      label: "Kamar Mandi",
      value: "1 Kamar",
      icon: "bathroom",
    },
  ],
},

  {
  id: "swadaya-indah-lestari-3",
  name: "Swadaya Indah Lestari 3",
  location: "Jalan Swadaya, Kota Baru",

  // JUMLAH UNIT
  totalUnits: 236,

  // INFORMASI PENJUALAN
  price: "Sold Out",

  // BLOK PROJECT
  blocks: [
    {
      name: "Blok ABCD",
      landArea: "8 × 15 m",
      units: 236,
      sold: true,
    },
  ],

  // MEDIA
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

  // DETAIL PROJECT
  description:
    "Project perumahan subsidi Borneo Real Properti di kawasan Kota Baru.",

  // SPESIFIKASI
  specifications: [
    {
      label: "Kamar Tidur",
      value: "1 Kamar",
      icon: "bedroom",
    },
    {
      label: "Luas Tanah",
      value: "8 × 15 m",
      icon: "land",
    },
    {
      label: "Listrik",
      value: "1300 / 2000 Watt",
      icon: "electricity",
    },
    {
      label: "Bangunan",
      value: "Beton",
      icon: "building",
    },
    {
      label: "Ruang Tamu",
      value: "1 Ruang",
      icon: "livingRoom",
    },
    {
      label: "Kamar Mandi",
      value: "1 Kamar",
      icon: "bathroom",
    },
  ],
},

  {
  id: "borneo-living-estate",
  name: "Borneo Living Estate",
  location: "Jln. Pemuda (Sungai Rengas)",

  // JUMLAH UNIT
  totalUnits: 75,

  // INFORMASI PENJUALAN
  price: SUBSIDY_PRICE,

  // BLOK PROJECT
  blocks: [
    {
      name: "Blok AB",
      landArea: "8 × 15 m",
      units: 75,
    },
  ],

  // MEDIA
  images: [
    "/images/projects/borneo-living-estate/brl1.webp",
    "/images/projects/borneo-living-estate/brl2.webp",
    "/images/projects/borneo-living-estate/brl3.webp",
  ],

  // DETAIL PROJECT
  description:
    "Project perumahan subsidi Borneo Real Properti di kawasan Jln. Pemuda, Sungai Rengas, dengan bangunan beton yang nyaman untuk keluarga.",

  // SPESIFIKASI
  specifications: [
    {
      label: "Kamar Tidur",
      value: "1 Kamar",
      icon: "bedroom",
    },
    {
      label: "Luas Tanah",
      value: "8 × 15 m",
      icon: "land",
    },
    {
      label: "Listrik",
      value: "1300 / 2000 Watt",
      icon: "electricity",
    },
    {
      label: "Bangunan",
      value: "Beton",
      icon: "building",
    },
    {
      label: "Ruang Tamu",
      value: "1 Ruang",
      icon: "livingRoom",
    },
    {
      label: "Kamar Mandi",
      value: "1 Kamar",
      icon: "bathroom",
    },
  ],
},

  {
    id: "permata-alam-lestari-3",
    name: "Permata Alam Lestari 3",
    location: "Pal 7, Gg. Mahar (Batas Kota)",

    // JUMLAH UNIT
    totalUnits: 80,

    // INFORMASI PENJUALAN
    price: SUBSIDY_PRICE,

    // MEDIA
   images: [
  "/images/projects/permata-alam-lestari-3/pal3.jpeg",
  "/images/projects/permata-alam-lestari-3/pal3-1.jpeg",
  "/images/projects/permata-alam-lestari-3/pal3-2.jpeg",
  "/images/projects/permata-alam-lestari-3/pal3-3.jpeg",
  "/images/projects/permata-alam-lestari-3/pal3-4.jpeg",
],

    // DETAIL PROJECT
    description:
      "Project perumahan subsidi Borneo Real Properti di kawasan Pal 7, Gg. Mahar (Batas Kota), dengan bangunan beton yang nyaman untuk keluarga.",

    // SPESIFIKASI
    specifications: [
      {
        label: "Kamar Tidur",
        value: "2 Kamar",
        icon: "bedroom",
      },
      {
        label: "Luas Tanah",
        value: "8 × 16 m",
        icon: "land",
      },
      {
        label: "Listrik",
        value: "1300 / 2000 Watt",
        icon: "electricity",
      },
      {
        label: "Bangunan",
        value: "Beton",
        icon: "building",
      },
      {
        label: "Ruang Tamu",
        value: "1 Ruang",
        icon: "livingRoom",
      },
      {
        label: "Kamar Mandi",
        value: "1 Kamar",
        icon: "bathroom",
      },
    ],
  },
];