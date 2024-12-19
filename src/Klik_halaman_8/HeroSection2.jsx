import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/klik_halaman_8/image.jpg";
import image2 from "../assets/klik_halaman_8/2.jpg";
import image3 from "../assets/klik_halaman_8/3.jpg";
import image4 from "../assets/klik_halaman_8/4.jpg";
import image5 from "../assets/klik_halaman_8/5.jpg";

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
          SIMPANG KATIS - Pemerintah Kabupaten Bangka Tengah (Pemkab Bateng)
          melalui Dinas Perikanan, menyalurkan bantuan sarana budidaya ikan
          kepada Kelompok Pembudidaya Ikan (Pokdakan) dan bantuan bedah unit
          pengolahan ikan kepada Kelompok Pengolah dan Pemasar Hasil Perikanan
          (Poklahsar).
        </p>

        <p className="mb-5">
          Bantuan diserahkan langsung secara simbolis oleh Bupati Bangka Tengah,
          Algafry Rahman kepada 15 Pokdakan dan 4 Poklahsar yang ada di
          Kabupaten Bangka Tengah pada kegiatan Temu Teknis Pembudidaya Ikan
          yang diselenggarakan di Pokdakan Bina Lestari Desa Pinang Sebatang,
          Kecamatan Simpang Katis, Jumat (13/09/2024).
        </p>

        <p className="mb-5">
          Algafry mengatakan, bantuan yang disalurkan merupakan upaya dari
          Pemkab Bateng dalam memberikan dukungan dan dorongan kepada
          pembudidaya ikan agar meningkatkan produksi sektor perikanan air tawar
          di Kabupaten Bateng beserta produk hilirisasinya.
        </p>

        <p className="mb-5">
          "Kami selaku pemerintah berupaya untuk selalu memberikan stimulus
          kepada para nelayan dan pembudidaya ikan agar terus mengembangkan
          budidaya ikan khususnya air tawar dan bagaimana agar hilirisasinya
          juga mampu menghasilkan produk olahan dari budidaya ikan itu sendiri,"
          ujar bupati dalam sambutannya.
        </p>

        <p className="mb-5">
          Menurut Algafry, potensi produksi sub sektor perikanan budidaya yang
          ada di Bangka Tengah cukup tinggi, sehingga dapat menjadi fokus
          pengembangan dan diharapkan mampu menghasilkan usaha budidaya ikan
          yang berkelanjutan.
        </p>

        <p className="mb-5">
          "Kita memiliki potensi yang cukup besar dengan adanya 131 kelompok
          pembudidaya ikan dan terdiri dari 1.196 orang pembudidaya. Tentu ini
          jumlah yang cukup besar untuk menggerakan sektor budidaya ikan untuk
          peningkatan ekonomi kita," ucapnya.
        </p>

        <p className="mb-5">
          Algafry berharap, pengembangan budidaya ikan air tawar dapat
          memberikan andil dan berkontribusi untuk pengendalian inflasi,
          terutama subtitusi protein hewani yang bersumber dari ikan ketika
          musim paceklik di saat nelayan tidak dapat melaut.
        </p>

        <p className="mb-5">
          Sementara itu, Kepala Dinas Perikanan Bateng, Imam Soehadi, mengatakan
          bantuan yang diberikan kepada Pokdakan dan Poklahsar merupakan bantuan
          yang bersumber dari APBD dan DAK tahun anggaran 2024.
        </p>

        <p className="mb-5">
          "Bantuan yang kita salurkan ini nilainya mencapai sekitar 2,1 miliar
          rupiah. Itu berasal dari DAK sebesar 1,8 miliar dan APBD Bangka Tengah
          sebesar 300 juta rupiah," ungkapnya.
        </p>

        <p className="mb-5">
          Menurut Imam, dukungan melalui bantuan saran yang diberikan kepada
          pokdakan dan bedah unit pengolahan ikan kepada poklahsar ini dapat
          menumbuhkan budidaya ikan air tawar yang tidak hanya kuat dalam hal
          produksi tetapi juga mapan pada hilirisasi produknya.
        </p>

        <p className="mb-5">
          Selain bantuan, Pemkab Bateng juga memberikan penerapan konsep digital
          farming kepada sub sektor budidaya ikan dengan mengimplementasikan
          penggunaan mesin autofeeder yang bekerja sama dengan perusahaan
          startup dibidang perikanan, eFishery.
        </p>

        <p className="mb-5">
          "Kita juga sudah mengenalkan dan akan menerapkan penggunaan mesin
          autofeeder, sehingga pembudidaya dapat memberikan pakan ikan secara
          otomatis kapanpun dan dimanapun dengan memanfaatkan teknologi dalam
          sektor perikanan," ucap Imam.Pada kesempatan ini, Algafry bersama
          Kepala BPJS Ketenagakerjaan Pangkalpinang menyerahkan santunan
          kematian kepada ahli waris dari keluarga nelayan yang meninggal dunia.
        </p>

        <p className="mb-5">
          Sementara itu, kegiatan Temu Teknis Pembudidaya Ikan yang diikuti
          Pokdakan dan Poklahsar di wilayah Bateng mengundang narasumber dari
          BPJS Ketenagakerjaan, Dinas Kelautan Dan Perikanan Babel, Perwakilan
          Bank Indonesia, dan Perwakilan PT. Multidaya Teknologi Nusantara
          eFishery.* Sumber: Diskominfosta Bangka Tengah
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
