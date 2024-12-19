import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/klik_halaman_13/image.jpg";
import image2 from "../assets/klik_halaman_13/2.jpg";
import image3 from "../assets/klik_halaman_13/3.jpg";
import image4 from "../assets/klik_halaman_13/4.jpg";
import image5 from "../assets/klik_halaman_13/5.jpg";

const HeroSection2 = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-10 py-10 bg-gray-200 flex">
      {/* Left Side */}
      <div className="flex-1 pr-10">
        <div className="flex items-center mb-5">
          <div className="w-10 h-8 rounded-full overflow-hidden mr-3 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-yellow-500">
            <img
              src={image1}
              alt="IkanKu"
              className="w-12 h-auto object-cover"
            />
          </div>
          <div className="text-sm">
            <h2 className="m-0 text-black font-bold">IkanKu</h2>
            <p className="m-0 text-gray-600">11 Januari 2024</p>
          </div>
        </div>

        <p className="mb-5">
          Perikanan adalah suatu kegiatan manusia yang berhubungan dengan
          pemanfaatan dan pengelolaan sumber daya ikan. Salah satu jenis usaha
          perikanan yang dapat dilakukan di dalam batas garis pantai adalah
          perikanan darat. Perikanan darat adalah usaha pemeliharaan dan
          penangkapan ikan di perairan darat. Perairan darat yang dimaksud
          meliputi sungai, danau, rawa, waduk atau bendungan, empang, sawah, dan
          tambak. Perikanan darat dapat dibedakan atas dua jenis yaitu perikanan
          air payau dan perikanan air tawar.
        </p>

        <h2 className="font-bold text-black mb-3">Perikanan air payau</h2>
        <p className="mb-5">
          Perikanan air payau adalah usaha perikanan yang dilakukan di tepi
          pantai dalam bentuk tambak dengan jenis budidaya berupa biota akuatik
          yang memiliki toleransi terhadap kisaran salinitas yang cukup tinggi.
        </p>
        <p className="mb-5">
          Air payau adalah campuran antara air tawar dan air laut, di mana
          daerah air payau meliputi daerah pantai dengan genangan-genangan air
          dan biasanya merupakan daerah supralitoral. Umumnya, air payau dapat
          ditemukan di daerah-daerah muara dan cenderung memiliki keanekaragaman
          hayati tersendiri.
        </p>
        <p className="mb-5">
          Pada intinya, kedua jenis ikan sama-sama bisa menjadi pilihan sumber
          makanan harian untuk Anda dan keluarga. Pemberiannya bisa diselingi
          agar masing-masing nutrisi yang ada di dalam setiap ikan tersebut bisa
          Anda dapatkan.
        </p>

        <h2 className="font-bold text-black mb-3">Perikanan air tawar </h2>
        <p className="mb-5">
          Perikanan air tawar adalah sistem perikanan yang lokasinya di darat
          dan jauh dari pesisir dan tidak ada pencampuran dengan air laut sama
          sekali.
        </p>
        <p className="mb-5">
          Ikan air tawar adalah jenis ikan yang menghabiskan sebagian atau
          seluruh hidupnya di air tawar dengan kadar garam di bawah 0,5 ppt.
          Keberhasilan budidaya ikan air tawar ditentukan oleh lingkungan yaitu
          tanah dan air.
        </p>
        <p className="mb-5">
          Tanah sebagai bahan utama pembuatan kolam dan air sebagai media
          kehidupan ikan tentu merupakan hal yang harus diperhatikan oleh
          pembudidaya. Budidaya air tawar dilakukan dengan menggunakan sumber
          air dari perairan tawar.
        </p>
        <p className="mb-5">
          Umumnya, produksi budidaya air tawar didominasi oleh ikan nila, ikan
          lele, ikan gurame, ikan patin, dan lain sebagainya.
        </p>

        <h2 className="font-bold text-black mb-3">
          Perbedaan antara perikanan payau dan tawar{" "}
        </h2>
        <p className="mb-5">
          Meski sama-sama digolongkan sebagai perikanan darat, namun perikanan
          payau dan perikanan tentu saja berbeda.
        </p>
        <p className="mb-5">
          Lantas, apa perbedaan perikanan air payau dan perikanan air tawar?
        </p>
        <p className="mb-5">
          Berikut perbedaan yang mendasari kedua jenis perikanan tersebut antara
          lain :
        </p>

        <h2 class="text-black mb-3 text-lg font-bold">Salinitas</h2>
        <ul class="list-none mb-5">
          <li class="flex items-center mb-2">
            <span class="w-2.5 h-2.5 bg-black rounded-full mr-2"></span>
            Perikanan air payau: 0,5 - 30 ppt
          </li>
          <li class="flex items-center mb-2">
            <span class="w-2.5 h-2.5 bg-black rounded-full mr-2"></span>
            Perikanan air tawar: 0 - 0,5 ppt
          </li>
        </ul>

        <h3 class="text-black mb-3 text-lg font-bold">pH Air</h3>
        <ul class="list-none mb-5">
          <li class="flex items-center mb-2">
            <span class="w-2.5 h-2.5 bg-black rounded-full mr-2"></span>
            Perikanan air payau: 7 - 9
          </li>
          <li class="flex items-center mb-2">
            <span class="w-2.5 h-2.5 bg-black rounded-full mr-2"></span>
            Perikanan air tawar: 6 - 8
          </li>
        </ul>

        <h3 class="text-black mb-3 text-lg font-bold">Kepadatan Air</h3>
        <ul class="list-none mb-5">
          <li class="flex items-center mb-2">
            <span class="w-2.5 h-2.5 bg-black rounded-full mr-2"></span>
            Perikanan air payau: 1 - 1,03 g/L
          </li>
          <li class="flex items-center mb-2">
            <span class="w-2.5 h-2.5 bg-black rounded-full mr-2"></span>
            Perikanan air tawar: 1 g/L
          </li>
        </ul>

        <h3 class="text-black mb-3 text-lg font-bold">Lokasi Budidaya</h3>
        <ul class="list-none mb-5">
          <li class="flex items-center mb-2">
            <span class="w-2.5 h-2.5 bg-black rounded-full mr-2"></span>
            Perikanan air payau: Dekat dengan pesisir, seperti pantai, muara,
            dan rawa payau
          </li>
          <li class="flex items-center mb-2">
            <span class="w-2.5 h-2.5 bg-black rounded-full mr-2"></span>
            Perikanan air tawar: Di daratan yang jauh dari pesisir, seperti
            sungai, rawa, waduk, dan lainnya
          </li>
        </ul>

        <h3 class="text-black mb-3 text-lg font-bold">Wadah Budidaya</h3>
        <ul class="list-none mb-5">
          <li class="flex items-center mb-2">
            <span class="w-2.5 h-2.5 bg-black rounded-full mr-2"></span>
            Perikanan air payau: Tambak, jaring apung, jaring tancap
          </li>
          <li class="flex items-center mb-2">
            <span class="w-2.5 h-2.5 bg-black rounded-full mr-2"></span>
            Perikanan air tawar: Kolam, bak, akuarium, dan lainnya
          </li>
        </ul>

        <h3 class="text-black mb-3 text-lg font-bold">Komoditas Utama</h3>
        <ul class="list-none mb-5">
          <li class="flex items-center mb-2">
            <span class="w-2.5 h-2.5 bg-black rounded-full mr-2"></span>
            Perikanan air payau: Udang, ikan bandeng, ikan mujair
          </li>
          <li class="flex items-center mb-2">
            <span class="w-2.5 h-2.5 bg-black rounded-full mr-2"></span>
            Perikanan air tawar: Ikan lele, ikan mas, ikan gurame, dan ikan air
            tawar lainnya
          </li>
        </ul>
      </div>

      {/* Right Side: Trending Articles */}
      <div className="w-2/5 pl-5">
        <h1 className="text-3xl font-bold mb-5">Artikel Trending</h1>

        {/* First Article */}
        <div className="flex mb-5">
          <Link
            to="/Klik_halaman_10"
            className="block relative transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={image2}
              alt="Purwakarta Perkuat Posisi Sebagai Pusat Budidaya Ikan"
              className="w-60 h-48 object-cover rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500"
            />
          </Link>
          <div className="ml-3 mt-8">
            <h2 className="text-lg font-semibold text-gray-800">
              Purwakarta Perkuat Posisi Sebagai Pusat Budidaya Ikan
            </h2>
            <div className="flex items-center mt-2">
              <span className="bg-white text-gray-600 px-3 py-1 rounded-md text-xs font-bold border border-gray-300">
                Umum
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">2 Mei 2024</p>
          </div>
        </div>

        {/* Second Article */}
        <div className="flex mb-5">
          <Link
            to="/Klik_halaman_8"
            className="block relative transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={image3}
              alt="Poklahsar Dapat Banyak Bantuan Dari Pemerintah"
              className="w-72 h-48 object-cover rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500"
            />
          </Link>
          <div className="ml-3 mt-8">
            <h2 className="text-lg font-semibold text-gray-800">
              Pokdakan dan Poklahsar Dapat Banyak Bantuan Dari Pemerintah
            </h2>
            <div className="flex items-center mt-2">
              <span className="bg-white text-gray-600 px-3 py-1 rounded-md text-xs font-bold border border-gray-300">
                Umum
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">13 September 2024</p>
          </div>
        </div>

        {/* Third Article */}
        <div className="flex mb-5">
          <Link
            to="/Klik_halaman_11"
            className="block relative transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={image4}
              alt="Inovasi Teknologi dalam Budidaya Perikanan Air Tawar"
              className="w-60 h-48 object-cover rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500"
            />
          </Link>
          <div className="ml-3 mt-8">
            <h2 className="text-lg font-semibold text-gray-800">
              Inovasi Teknologi dalam Budidaya Perikanan Air Tawar
            </h2>
            <div className="flex items-center mt-2">
              <span className="bg-white text-gray-600 px-3 py-1 rounded-md text-xs font-bold border border-gray-300">
                Artikel Terkini
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">25 Oktober 2024</p>
          </div>
        </div>

        {/* Fourth Article */}
        <div className="flex mb-5">
          <Link
            to="/Klik_halaman_13"
            className="block relative transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={image5}
              alt="Teknik Penyuluhan Perikanan untuk Meningkatkan Kesejahteraan Petani"
              className="w-70 h-48 object-cover rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500"
            />
          </Link>
          <div className="ml-3 mt-8">
            <h2 className="text-lg font-semibold text-gray-800">
              Teknik Penyuluhan Perikanan untuk Meningkatkan Kesejahteraan
              Petani
            </h2>
            <div className="flex items-center mt-2">
              <span className="bg-white text-gray-600 px-3 py-1 rounded-md text-xs font-bold border border-gray-300">
                Penyuluhan
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">17 November 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
