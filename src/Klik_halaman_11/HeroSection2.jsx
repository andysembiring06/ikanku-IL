import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/klik_halaman_11/image.jpg";
import image2 from "../assets/klik_halaman_11/2.jpg";
import image3 from "../assets/klik_halaman_11/3.jpg";
import image4 from "../assets/klik_halaman_11/4.jpg";
import image5 from "../assets/klik_halaman_11/5.jpg";

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
          Halo,Para Pembaca yang Budiman!Mari kita eksplorasi inovasi teknologi
          yang sedang merevolusi budidaya perikanan air tawar di Desa Cikoneng.
        </p>

        <div>
          <div className="mb-10">
            <h1 className="text-xl font-bold text-black mb-3">Pengantar</h1>
            <p>
              Desa Cikoneng menjadi pelopor inovasi teknologi di bidang budidaya
              perikanan air tawar. Dengan memanfaatkan teknologi, kita dapat
              meningkatkan produktivitas, menjaga lingkungan, dan menghasilkan
              ikan berkualitas. Langkah ini membuktikan bahwa inovasi membawa
              perubahan besar bagi kesejahteraan masyarakat.
            </p>
          </div>

          <div className="mb-10">
            <h1 className="text-xl font-bold text-black mb-3">
              Teknologi Aerasi dan Bioflok
            </h1>
            <p>
              Aerasi membantu meningkatkan kadar oksigen terlarut di kolam,
              sehingga ikan tumbuh lebih sehat. Sedangkan teknologi bioflok
              mengubah limbah organik menjadi pakan tambahan bagi ikan,
              menciptakan lingkungan yang ramah lingkungan dan efisien.
            </p>
          </div>

          <div className="mb-10">
            <h1 className="text-xl font-bold text-black mb-3">
              Pakan Buatan dan Budidaya Intensif
            </h1>
            <p>
              Pakan buatan diformulasikan untuk memenuhi kebutuhan nutrisi ikan,
              mendukung pertumbuhan yang lebih cepat. Teknologi budidaya
              intensif, seperti kolam terpal dan biofilter, memastikan kondisi
              lingkungan ideal, meningkatkan panen, dan mengurangi limbah.
            </p>
          </div>

          <div className="mb-10">
            <h1 className="text-xl font-bold text-black mb-3">
              Otomatisasi dan Pengelolaan Pakan
            </h1>
            <p>
              Sensor otomatis memantau kualitas air secara real-time, memastikan
              kondisi tetap ideal untuk ikan. Sistem pengelolaan pakan otomatis
              mengurangi pemborosan dan meningkatkan efisiensi, menghasilkan
              ikan yang sehat dengan biaya lebih rendah.
            </p>
          </div>

          <div className="mb-10">
            <h1 className="text-xl font-bold text-black mb-3">
              Penguatan Rantai Pasok
            </h1>
            <p>
              Aplikasi online menghubungkan petani dengan pemasok, memperluas
              akses pasar, dan menekan biaya operasional. Hal ini mendorong
              kesejahteraan ekonomi masyarakat.
            </p>
          </div>

          <div className="mb-10">
            <h1 className="text-xl font-bold text-black mb-3">
              Dampak Sosial dan Ekonomi
            </h1>
            <p>
              Inovasi teknologi menciptakan lapangan kerja baru, meningkatkan
              pendapatan, dan mendorong taraf hidup masyarakat. Keberhasilan
              Desa Cikoneng menunjukkan bahwa kolaborasi antara peneliti,
              petani, dan pemangku kepentingan adalah kunci kemajuan.
            </p>
          </div>
          <div className="mb-10">
            <h1 className="text-xl font-bold text-black mb-3">
              Pelajaran dari Desa Cikoneng
            </h1>
            <p>
              Kolaborasi menjadi inti dari keberhasilan inovasi. Desa Cikoneng
              membuktikan bahwa kerja sama antara pemerintah, peneliti, dan
              petani mampu menciptakan solusi berkelanjutan, menjadikan desa ini
              contoh sukses dalam teknologi perikanan.
            </p>
          </div>
        </div>
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
