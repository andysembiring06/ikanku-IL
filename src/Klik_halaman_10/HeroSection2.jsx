import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/klik_halaman_10/image.jpg";
import image2 from "../assets/klik_halaman_10/2.jpg";
import image3 from "../assets/klik_halaman_10/3.jpg";
import image4 from "../assets/klik_halaman_10/4.jpg";
import image5 from "../assets/klik_halaman_10/5.jpg";

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
          PURWAKARTA - Kabupaten Purwakarta terus memperkuat posisinya sebagai
          salah satu daerah utama penghasil ikan air tawar di Provinsi Jawa
          Barat.
        </p>

        <p className="mb-5">
          Kondisi ini didukung oleh keberhasilan budidaya ikan air tawar di
          Waduk Jatiluhur, waduk terbesar di Indonesia, dan Waduk Cirata, yang
          mampu menghasilkan ratusan ribu ton ikan air tawar per tahunnya.
        </p>

        <p className="mb-5">
          "Pemerintah Kabupaten Purwakarta terus mendorong peningkatan produksi
          budidaya perikanan air tawar. Penjabat (Pj) Bupati meminta agar posisi
          Kabupaten Purwakarta sebagai penghasil utama ikan air tawar di Jawa
          Barat terus diperkuat," kata Kepala Dinas Komunikasi dan Informatika
          (Diskominfo) Purwakarta, Rudi Hartono, Kamis, 2 Mei 2024.
        </p>

        <p className="mb-5">
          Rudi mengatakan, peningkatan produksi ikan air tawar juga penting
          dilakukan mengingat masih sangat terbukanya peluang pasar ikan air
          tawar nasional.
        </p>

        <p className="mb-5">
          "Permintaan pasar nasional terhadap ikan air tawar sangatlah besar.
          Itu peluang yang bisa dimanfaatkan para pelaku budidaya ikan air tawar
          di Purwakarta untuk memanfaatkan peluang tersebut," kata Rudi Hartono
        </p>

        <p className="mb-5">
          Sementara itu, Kepala Dinas Peternakan dan Perikanan (Diskanak)
          Purwakarta, Siti Ida Hamidah mengatakan, arahan Pj Bupati untuk
          memperkuat posisi Purwakarta sebagai penghasil utama ikan air tawar di
          Jawa Barat merupakan langkah yang strategis.
        </p>

        <p className="mb-5">
          "Arahan Pj Bupati kita tindaklanjuti secara serius. Kita ingin terus
          memperkuat Kabupaten Purwakarta sebagai penghasil ikan air tawar utama
          di Jawa Barat. Sejumlah langkah kita siapkan untuk terus meningkatkan
          produksi ikan air tawar. Pembinaan dan pelatihan kepada pelaku usaha
          dan petani ikan air tawar akan terus kita kembangkan," kata Ida.
        </p>

        <p className="mb-5">
          Kapasitas Produksi Ratusan Ribu Ton Ikan  Ida menjelaskan, saat ini
          kapasitas produksi ikan air tawar Purwakarta mencapai 108,475 ribu ton
          per tahun. Produksi ikan itu dihasilkan melalui  budidaya ikan air
          tawar Keramba Jaring Apung (KJA) di waduk Jatiluhur dan Waduk Cirata,
          budidaya Kolam Air Deras (KAD), dan Kolam Air Tenang (KAT).
        </p>

        <p className="mb-5">
          Menurut Ida, untuk budidaya perikanan Kolam Air Deras (KAD), dan Kolam
          Air Tenang (KAT) pengelolaannya tersebar di 17 kecamatan di seluruh
          Kabupaten Purwakarta. 
        </p>

        <p className="mb-5">
          "Kedua jenis budidaya itu dikelola oleh 123 kelompok petani ikan air
          tawar. Kondisi ini akan kita kembangkan terus sehingga kelompok
          masyarakat yang terlibat dalam budidaya ikan air tawar terus
          meningkat," ujar Ida.
        </p>

        <p className="mb-5">
          Ida menjelaskan, dari total produksi 108,475 ribu ton, kapasitas
          produksi terbesar ikan air tawar terbanyak masih dihasilkan melalui
          Kolam Jaring Apung (KJA) Waduk Jatiluhur dan Waduk Cirata, yang
          mencapai 106,155 ribu ton.
        </p>

        <p className="mb-5">
          Kemudian diikuti produksi dari Kolam Air Tenang (KAT) sebanyak
          1.887,50 ton, dan Kolam Air Deras (KAD) yang mencapai 432,87 ton. 
        </p>

        <p className="mb-5">
          "Produksi perikanan di KJA Waduk Jatiluhur dan Waduk Cirata masih
          menjadi yang paling besar, kemudian melalui KAT dan KAD. Jenis ikan
          yang dihasilkan meliputi ikan Nila, Mas, Bawal, dan ikan Patin.
          Sementara melalui kolam air tenang dan kolam air deras, jenis ikan
          yang banyak dibudidayakan adalah jenis ikan Gurame," ujar Ida. 
        </p>

        <p className="mb-5">
          Ida mengatakan, selain mampu menggerakan perekonomian daerah,
          pengembangan produksi ikan air tawar juga bisa menjadi salah satu
          penopang sumber pangan nasional yang muaranya adalah meningkatkan
          ketahanan pangan nasional.
        </p>

        <p className="mb-5">
          Ikan juga merupakan salah satu sumber protein dan gizi yang sangat
          baik bagi pertumbuhan fisik dan peningkatan kecerdasan masyarakat.
        </p>

        <p className="mb-5">
          "Melalui pengembangan produksi ikan air tawar, kita ingin agar tingkat
          konsumsi masyarakat terhadap ikan juga akan meningkat. Konsumsi ikan
          juga bisa mencegah stunting. Itu akan menghasilan kualitas sumber daya
          manusia yang sehat dan unggul," kata Siti Ida Hamidah. (Diskominfo
          Purwakarta)
        </p>
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
