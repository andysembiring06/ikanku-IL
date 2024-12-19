import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/klik_halaman_6/image.jpg";
import image2 from "../assets/klik_halaman_6/2.jpg";
import image3 from "../assets/klik_halaman_6/3.jpg";
import image4 from "../assets/klik_halaman_6/4.jpg";
import image5 from "../assets/klik_halaman_6/5.jpg";

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
          Sebuah laporan memperingatkan penurunan populasi yang "parah"pada ikan
          air tawar, dengan hampir sepertiganya terancam punah.
        </p>

        <p className="mb-5">
          Kelompok pelestari lingkungan mengatakan 80 spesies ikan tawar
          diketahui telah punah, bahkan sebanyak 16 spesies punah pada tahun
          lalu saja.
        </p>

        <p className="mb-5">
          Jutaan orang mengandalkan ikan air tawar sebagai sumber makanan dan
          sumber mata pencaharian melalui memancing dan perdagangan hewan
          peliharaan.
        </p>

        {/* Bulatan Garis Hitam */}
        <ul className="list-disc pl-5 mb-5">
          {[
            "Ikan langka Hawaii bisa panjat tebing air terjun setinggi 300 meter ",
            "Ikan araipama: Predator yang dikhawatirkan jadi 'monster penguasa' Sungai Brantas",
            "'Ikan berkaki' yang jadi ikon Mexico City",
          ].map((item, index) => (
            <li key={index} className="text-gray-800">
              {item}
            </li>
          ))}
        </ul>

        <p className="mb-5">
          Tetapi jumlah populasinya anjlok karena dampak polusi, penangkapan
          ikan yang tidak berkelanjutan, serta pembendungan dan pengeringan
          sungai dan lahan basah.
        </p>

        <p className="mb-5">
          Laporan tersebut mengatakan populasi ikan yang bermigrasi telah turun
          tiga perempat dalam 50 tahun terakhir.
        </p>

        <p className="mb-5">
          Dalam kurun waktu yang sama, populasi spesies yang lebih besar, yang
          dikenal sebagai "megafish", turun 94%
        </p>

        <p className="mb-5">
          Demikian ungkap laporan bertajuk "The World's Forgotten Fishes", yang
          dibuat oleh 16 kelompok pelestari lingkungan - termasuk WWF, London
          Zoological Society (ZSL), Global Wildlife Conservation, dan The Nature
          Conservancy.
        </p>

        <p className="mb-5">
          Di perairan Inggris, ikan sturgeon dan burbot telah lenyap, salmon
          menghilang, dan <br /> belut Eropa tetap terancam punah. <br />{" "}
          Menurut WWF, sebagian besar penurunan populasi disebabkan oleh kondisi
          sungai yang buruk, sebagian besar disebabkan oleh polusi, bendungan,
          dan limbah.
        </p>

        <p className="mb-5">
          Di perairan Inggris, ikan sturgeon dan burbot telah lenyap, salmon
          menghilang, dan belut Eropa tetap terancam punah. Menurut WWF,
          sebagian besar penurunan populasi disebabkan oleh kondisi sungai yang
          buruk, sebagian besar disebabkan oleh polusi, bendungan, dan limbah.
        </p>

        <p className="mb-5">
          Dave Tickner dari WWF mengatakan bahwa habitat air tawar termasuk yang
          paling hidup di bumi, tetapi - seperti yang ditunjukkan laporan
          tersebut - habitat air tawar mengalami penurunan yang parah di seluruh
          dunia.
        </p>

        <p className="mb-5">
          "Alam dalam kondisi terjun bebas dan Inggris tak terkecuali: satwa
          liar berjuang untuk bertahan hidup, apalagi berkembang biak, di
          perairan kita yang tercemar," kata kepala penasihat WWF untuk urusan
          air tawar itu.
        </p>

        <p className="mb-5">
          "Jika kita ingin menanggapi janji pemerintah tentang lingkunan dengan
          serius, mereka harus bertindak bersama, membersihkan sungai dan
          memulihkan habitat air tawar kita [agar] menjadi lebih sehat."
        </p>

        <p className="mb-5">
          Carmen Revenga dari Nature Convervancy mengatakan ikan air tawar
          sangat beragam <br /> dan kelompok spesies yang unik. Mereka tak hanya
          penting untuk kesehatan fungsi <br /> sungai, danau, dan lahan basah
          kita, tetapi juga bagi jutaan orang, terutama orang <br /> miskin,
          yang bergantung untuk sumber makanan dan pendapatan mereka. <br />{" "}
          "Sekarang lebih mendesak dari sebelumnya bahwa kita perlu menemukan
          kemauan politik secara kolektif dan kolaborasi efektif dengan sektor
          swasta, pemerintah, LSM dan masyarakat, untuk menerapkan solusi
          berbasis alam yang melindungi spesies air tawar, sambil juga
          memastikan kebutuhan manusia terpenuhi," katanya. <br />
          Menanggapi hal tersebut, Dr Jeremy Biggs dari Freshwater Habitats
          Trust, mengatakan untuk melindungi keragaman hayati ikan air tawar,
          kita perlu mempertimbangkan perairan besar dan kecil, dan untuk
          melindungi semua air tawar kita: kolam, danau, sungai dan sungai.
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
