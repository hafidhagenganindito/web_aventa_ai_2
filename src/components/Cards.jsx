import React from "react";

export const Cards = () => {
  const fiturData = [
    {
      iconSrc: "/src/images/card-1.png",
      title: "Analisis Data dan Prediksi Perilaku Pelanggan",
      description:
        "Menganalisis tren pasar dan perilaku pelanggan secara real-time untuk membantu bisnis membuat keputusan yang lebih tepat dan strategis.",
    },
    {
      iconSrc: "/src/images/card-2.png",
      title: "Otomatisasi Proses Bisnis",
      description:
        "Mengurangi pekerjaan manual dengan otomatisasi tugas seperti pengelolaan pesanan, update stok, serta layanan pelanggan berbasis AI.",
    },
    {
      iconSrc: "/src/images/card-3.png",
      title: "Optimasi Harga dan Promosi",
      description:
        "Menggunakan algoritma cerdas untuk menyesuaikan harga secara dinamis serta memberikan rekomendasi strategi promosi yang efektif.",
    },
    {
      iconSrc: "/src/images/card-4.png",
      title:
        "Penggunaan Teknologi AI untuk Meningkatkan Efisiensi dan Produktivitas",
      description:
        "Meningkatkan kecepatan dan efisiensi operasional dengan memanfaatkan AI untuk analitik, customer service, dan pengelolaan bisnis. Gambar: Ilustrasi fitur-fitur Aventa.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {fiturData.map((fitur, index) => (
          <div
            key={index}
            className="bg-white border border-black rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg mx-auto w-11/12 sm:w-3/4 md:w-full"
          >
            <div className="flex justify-center mb-4">
              <img
                src={fitur.iconSrc}
                alt={fitur.title}
                className="h-12 w-12 transition-transform duration-300 hover:rotate-6"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center transition duration-300 hover:text-amber-500">
              {fitur.title}
            </h3>
            <p className="text-gray-700 text-center transition duration-300 hover:text-gray-900">
              {fitur.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
