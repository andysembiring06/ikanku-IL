import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/klik_halaman_1/image.jpg";
import image2 from "../assets/klik_halaman_1/2.jpg";
import image3 from "../assets/klik_halaman_1/3.jpg";
import image4 from "../assets/klik_halaman_1/4.jpg";
import image5 from "../assets/klik_halaman_1/5.jpg";

const HeroSection2 = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-10 py-10 bg-gray-200 flex">
      {/* Left Side */}
      <div className="flex-1 pr-10">
        {/* Header Section */}
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

        {/* Introduction */}
        <p className="mb-5">
          Agribisnis perikanan air tawar menjadi sektor yang semakin strategis
          dalam mendukung ketahanan pangan di berbagai negara. Dengan sumber
          daya perairan yang melimpah, peluang di bidang ini tidak hanya
          mencakup aspek produksi perikanan, tetapi juga mengenai manajemen
          sumber daya alam, kesejahteraan petani, dan pembangunan ekonomi di
          daerah-daerah terpencil. Artikel ini akan membahas potensi dan
          tantangan dalam mengembangkan agribisnis perikanan air tawar.
        </p>

        {/* Main Content */}
        <ol className="list-decimal pl-5 space-y-4">
          <li>
            <strong>Budidaya Ikan Sebagai Pilar Utama:</strong>
            <ul className="list-disc pl-5">
              <li>
                <strong>Ikan Konsumsi:</strong> Budidaya ikan konsumsi seperti
                nila, lele, dan patin memiliki potensi besar untuk memenuhi
                kebutuhan protein masyarakat.
              </li>
              <li>
                <strong>Ikan Hias:</strong> Pemeliharaan ikan hias dapat menjadi
                sumber pendapatan tambahan, mengingat meningkatnya permintaan
                pasar global.
              </li>
            </ul>
          </li>

          <li>
            <strong>Manajemen Sumber Daya Alam:</strong>
            <ul className="list-disc pl-5">
              <li>
                <strong>Pola Tanam Terpadu:</strong> Mengintegrasikan budidaya
                ikan dengan tanaman seperti padi, sayuran, atau tanaman air
                lainnya untuk mendapatkan manfaat sinergis.
              </li>
              <li>
                <strong>Pengelolaan Kualitas Air:</strong> Menjaga kualitas air
                yang baik untuk mendukung pertumbuhan dan kesehatan ikan.
              </li>
            </ul>
          </li>

          <li>
            <strong>Tantangan dalam Agribisnis Perikanan Air Tawar:</strong>
            <ul className="list-disc pl-5">
              <li>
                <strong>Perubahan Iklim:</strong> Fluktuasi iklim dapat
                memengaruhi suhu air, kadar oksigen, dan pola cuaca, berdampak
                pada produktivitas perikanan.
              </li>
              <li>
                <strong>Pencemaran Air:</strong> Aktivitas manusia, seperti
                penggunaan pupuk dan pestisida, dapat memengaruhi kualitas air
                dan kesehatan ikan.
              </li>
              <li>
                <strong>Akses Pemasaran:</strong> Petani perlu memiliki akses
                yang baik ke pasar lokal dan global untuk meningkatkan nilai
                tambah produk perikanan mereka.
              </li>
            </ul>
          </li>

          <li>
            <strong>Peluang Pengembangan Ekonomi Lokal:</strong>
            <ul className="list-disc pl-5">
              <li>
                <strong>Pemberdayaan petani:</strong> Agribisnis perikanan air
                tawar dapat meningkatkan kesejahteraan petani dengan memberikan
                pelatihan dan pendampingan dalam praktik budidaya yang
                berkelanjutan.
              </li>
              <li>
                <strong>Pengembangan Agrowisata:</strong> Pemancingan wisata,
                pemeliharaan ikan hias, dan pusat edukasi perikanan dapat
                menjadi sumber pendapatan dan atraksi wisata.
              </li>
            </ul>
          </li>

          <li>
            <strong>Keberlanjutan dalam Agribisnis Perikanan:</strong>
            <ul className="list-disc pl-5">
              <li>
                <strong>Sertifikasi dan Standar:</strong> Menerapkan sertifikasi
                dan standar produksi yang berkelanjutan untuk menjaga daya saing
                produk perikanan air tawar di pasar global.
              </li>
              <li>
                <strong>Penerapan Teknologi:</strong> Mengadopsi teknologi
                terkini seperti monitoring otomatis dan sistem manajemen
                perairan terintegrasi.
              </li>
            </ul>
          </li>
        </ol>
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
