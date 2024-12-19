import { Link } from "react-router-dom"; // Import Link from react-router-dom
import image6 from "../assets/klik_halaman_4/6.png";
import image7 from "../assets/klik_halaman_4/7.png";
import image8 from "../assets/klik_halaman_4/8.png";

const HeroSection3 = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-start justify-start pt-6">
      <div className="max-w-3xl mx-auto p-4 bg-gray-200">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          Artikel Terkait
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Artikel 1 */}
          <article className="bg-gray-200 rounded-lg shadow-md overflow-hidden relative">
            <Link
              to="/Klik_halaman_14"
              className="block relative overflow-hidden"
            >
              <img
                src={image6}
                alt="Budidaya Ikan Air Tawar"
                className="w-full h-44 object-cover transform transition-transform duration-500 hover:scale-110 hover:filter hover:drop-shadow-[0_0_15px_#add8e6]"
              />
              <h3 className="text-base font-medium text-gray-800 p-3">
                Mana yang Lebih Bergizi: Ikan Laut A....
              </h3>
            </Link>
            <span className="inline-block bg-white border border-gray-300 text-xs px-3 py-1 rounded-full text-gray-800 ml-3 mb-2">
              Bisnis
            </span>
            <p className="text-xs text-gray-800 px-3 pb-3">5 Agustus 2023</p>
          </article>

          {/* Artikel 2 */}
          <article className="bg-gray-200 rounded-lg shadow-md overflow-hidden relative">
            <Link
              to="/Klik_halaman_12"
              className="block relative overflow-hidden"
            >
              <img
                src={image7}
                alt="Perikanan Air Tawar"
                className="w-full h-44 object-cover transform transition-transform duration-500 hover:scale-110 hover:filter hover:drop-shadow-[0_0_15px_#add8e6]"
              />
              <h3 className="text-base font-medium text-gray-800 p-3">
                Ikan Lele Jenis Ikan Air Tawar yang Po....
              </h3>
            </Link>
            <span className="inline-block bg-white border border-gray-300 text-xs px-3 py-1 rounded-full text-gray-800 ml-3 mb-2">
              Bisnis
            </span>
            <p className="text-xs text-gray-800 px-3 pb-3">21 Juli 2023</p>
          </article>

          {/* Artikel 3 */}
          <article className="bg-gray-200 rounded-lg shadow-md overflow-hidden relative">
            <Link
              to="/Klik_halaman_4"
              className="block relative overflow-hidden"
            >
              <img
                src={image8}
                alt="Manfaat Ikan Air Tawar"
                className="w-full h-44 object-cover transform transition-transform duration-500 hover:scale-110 hover:filter hover:drop-shadow-[0_0_15px_#add8e6]"
              />
              <h3 className="text-base font-medium text-gray-800 p-3">
                Ini 5 Manfaat Ikan Air Tawar untuk Kes....
              </h3>
            </Link>
            <span className="inline-block bg-white border border-gray-300 text-xs px-3 py-1 rounded-full text-gray-800 ml-3 mb-2">
              Bisnis
            </span>
            <p className="text-xs text-gray-800 px-3 pb-3">30 Desember 2023</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;
