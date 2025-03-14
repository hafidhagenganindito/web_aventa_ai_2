import BurgerMenu from "../components/Burger";
import { Cards } from "../components/Cards";
import Footer from "../components/Footer";
import ManfaatAventa from "../components/Manfaat";
import Testimonials from "../components/Testimony";

export const HomePage = () => {
  return (
    <>
      <div>{BurgerMenu()}</div>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/src/images/bg.png")',
        }}
      >
        {/* Konten lain dari halaman Anda */}
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white text-center"
          style={{
            backgroundImage: 'url("/src/images/latar-belakang-biru.jpg")',
          }}
        >
          <div className="max-w-md p-4">
            <h1 className="text-4xl font-bold mb-4 text-white ">AVENTA</h1>
            <h1 className="text-5xl font-bold mb-4">AVENTA</h1>
            <h2 className="text-3xl mb-6 ">
              Solusi Bisnis Cerdas dengan <br /> Teknologi AI
            </h2>
            <p className="text-lg mb-8">
              Meningkatkan Penjualan, Mengoptimalkan <br />
              Proses Bisnis, dan Meningkatkan Keuntungan
            </p>
            <button className="text-white font-bold py-3 px-8 rounded-full border border-white bg-transparent">
              <p>Daftar Sekarang</p>
            </button>

            {/* Img AI-Robot */}
            <div className="mt-8">
              <img
                src="/src/images/ai-robot.png"
                alt="AI Robot"
                className="w-64 mx-auto "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tombol Fitur & Layanan */}
      <div className="flex justify-center mt-8">
        <button className="bg-transparent rounded-full py-2 px-8 text-blue-600 font-semibold border border-blue-600 text-base ">
          Fitur & Layanan
        </button>
      </div>

      <div className="flex justify-center  text-center mt-10">
        <p className="text-xl mb-8 font-bold md:text-2xl">
          Identifikasi dan <br /> Maksimalkan Potensi <br /> Terbaik dalam
          Bisnis Anda
        </p>
      </div>

      <div className="flex justify-center text-center mt-1 text-base  md:text-lg">
        <div className="max-w-3xl ">
          <p>
            AVENTA menawarkan layanan e-commerce terintegrasi yang memudahkan
            pelanggan, seller, dan supplier dalam bertransaksi secara efisien.
            Dengan teknologi autopilot pemasaran.
          </p>
          <p className="space-y-4 mt-4">
            AVENTA membantu seller mempromosikan produk secara otomatis,
            meningkatkan visibilitas, dan mendatangkan lebih banyak pelanggan.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div>{Cards()}</div>

      {/* Manfaat */}
      <div>{ManfaatAventa()}</div>

      <div className="bg-gray-200 py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6 md:text-4xl">
            Apa yang Pelanggan Kami <br /> Katakan tentang Aventa
          </h2>
          <p className=" text-xs md:text-xl">
            Meningkatkan Penjualan, Menghemat Waktu <br /> dan Biaya, dan
            Meningkatkan Keuntungan
          </p>
        </div>
      </div>

      {/* Testimony */}
      <div>{Testimonials()}</div>
      {/* Footer */}
      <div>{Footer()}</div>
    </>
  );
};
