const ManfaatAventa = () => {
  return (
    <>
      <div className="py-12 bg-blue-950">
        <div className="flex justify-center mt-5">
          <button className="bg-transparent rounded-full py-2 px-8 text-white font-semibold border border-white text-xs md:text-base ">
            Manfaat
          </button>
        </div>

        <div className="flex justify-center  text-center mt-10">
          <p className="text-2xl mb-8 font-bold md:text-4xl text-white ">
            Dengan Sistem yang Efisien, <br /> Belanja Jadi Lebih Mudah, <br />{" "}
            Aman, dan Nyaman.
          </p>
        </div>

        {/* Manfaat 1 */}
        <div>
          <div className="flex justify-center mb-4">
            <img
              src="/src/images/manfaat-1.png"
              alt=""
              className="h-12 w-12 transition-transform duration-300 hover:rotate-6"
            />
          </div>

          <h3 className="text-white text-xl font-semibold mb-2 text-center transition duration-300 hover:text-amber-500 md:text-2xl">
            Meningkatkan Penjualan <br /> dan Keuntungan
          </h3>

          <p className="text-xs text-white text-center transition duration-300 hover:text-gray-900 mt-5 md:text-xl">
            Dengan strategi berbasis data, bisnis dapat <br /> menargetkan
            pelanggan dengan lebih akurat, <br /> meningkatkan <br />
            konversi, dan meningkatkan <br /> pendapatan.{" "}
          </p>
        </div>

        {/* Manfaat 2 */}
        <div className="mt-10">
          <div className="flex justify-center mb-4">
            <img
              src="/src/images/manfaat-2.png"
              alt=""
              className="h-12 w-12 transition-transform duration-300 hover:rotate-6"
            />
          </div>

          <h3 className="text-white text-xl font-semibold mb-2 text-center transition duration-300 hover:text-amber-500 md:text-2xl">
            Menghemat Waktu dan Biaya
          </h3>

          <p className="text-xl text-white text-center transition duration-300 hover:text-gray-900 mt-5">
            Mengurangi pekerjaan manual dan <br /> operasional yang tidak
            efisien dengan solusi <br />
            otomatis yang hemat biaya.
          </p>
        </div>
        {/* Manfaat 3 */}
        <div className="mt-10">
          <div className="flex justify-center mb-4">
            <img
              src="/src/images/manfaat-3.png"
              alt=""
              className="h-12 w-12 transition-transform duration-300 hover:rotate-6"
            />
          </div>

          <h3 className="text-white text-xl font-semibold mb-2 text-center transition duration-300 hover:text-amber-500 md:text-2xl">
            Meningkatkan Efisiensi <br /> dan Produktivitas
          </h3>

          <p className="text-xl text-white text-center transition duration-300 hover:text-gray-900 mt-5">
            Memungkinkan bisnis untuk fokus pada <br /> pengembangan strategi
            dan inovasi tanpa <br />
            terbebani oleh tugas rutin.
          </p>
        </div>
        {/* Manfaat 4 */}
        <div className="mt-10">
          <div className="flex justify-center mb-4">
            <img
              src="/src/images/manfaat-4.png"
              alt=""
              className="h-12 w-12 transition-transform duration-300 hover:rotate-6"
            />
          </div>

          <h3 className="text-white text-xl font-semibold mb-2 text-center transition duration-300 hover:text-amber-500 md:text-2xl">
            Meningkatkan Kemampuan <br /> Analisis Data dan Prediksi <br />
            Perilaku Pelanggan
          </h3>

          <p className="text-xl text-white text-center transition duration-300 hover:text-gray-900 mt-5">
            Memberikan wawasan berbasis data yang dapat <br /> digunakan untuk
            menyusun strategi pemasaran dan <br /> bisnis yang lebih efektif.
            Gambar: Ilustrasi <br />
            manfaat-manfaat menggunakan Aventa.
          </p>
        </div>
      </div>{" "}
      {/* Ganti dengan warna BG yang Anda inginkan */}
    </>
  );
};
export default ManfaatAventa;
