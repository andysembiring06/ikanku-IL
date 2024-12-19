import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/klik_halaman_14/image.jpg";
import image2 from "../assets/klik_halaman_14/2.jpg";
import image3 from "../assets/klik_halaman_14/3.jpg";
import image4 from "../assets/klik_halaman_14/4.jpg";
import image5 from "../assets/klik_halaman_14/5.jpg";

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
          Sudah tidak perlu diragukan lagi, ikan merupakan salah satu sumber
          protein yang baik bagi tubuh. Selain dari lautan, perairan air tawar
          juga menghasilkan ikan yang tak kalah lezat sebagai santapan
          sehari-hari. Namun, ternyata ada perbedaan kandungan gizi di antara
          ikan air tawar dan ikan laut. Mana yang paling kaya kandungan gizinya,
          ya?
        </p>

        <h2 className="font-bold text-black mb-3">
          Apa perbedaan ikan air laut dan ikan air tawar?
        </h2>
        <p className="mb-5">
          Sebelum menelaah kandungan gizinya, sudah tahukah Anda apa perbedaan
          utama antara ikan-ikan dari laut dan ikan-ikan dari air tawar? Memang
          sama-sama hidup di air, tapi ternyata kedua kelompok ikan ini punya
          ciri khas yang membedakannya satu sama lain.
        </p>
        <p className="mb-5">
          Sesuai dengan namanya, ikan laut hidup di lautan yang penuh dengan
          gelombang dan arus deras. Itu sebabnya, struktur duri yang dimiliki
          ikan laut cenderung lebih keras dan kuat. Akan tetapi, tidak demikian
          dengan ikan air tawar justru sebaliknya.
        </p>
        <p className="mb-5">
          Arus yang lebih lambat atau tidak terlalu kencang sudah menjadi
          habitat sehari-hari ikan jenis ini. Itulah mengapa duri pada ikan air
          tawar biasanya lebih kecil dan tidak sebesar ikan air laut.
        </p>
        <p className="mb-5">
          Sementara dari segi rasa, banyak yang menganggap bahwa ikan-ikan dari
          laut punya cita rasa alami yang lebih gurih ketimbang ikan-ikan dari
          air tawar.
        </p>

        <h2 className="font-bold text-black mb-3">
          Mana yang lebih bergizi antara ikan air tawar dan ikan laut?
        </h2>
        <p className="mb-5">
          Sebagai kelompok ikan-ikanan, keduanya sama-sama bermanfaat dan kaya
          akan kandungan gizi di dalamnya. Hanya saja, jumlahnya mungkin berbeda
          antara kedua kelompok ikan ini.
        </p>
        <p className="mb-5">
          Prof Ir Ahmad Sulaeman, PhD, selaku guru besar bidang Keamanan Pangan
          dan Gizi, di Fakultas Ekologi Institut Pertanian Bogor (IPB),
          menjelaskan mengenai hal ini. Menurutnya, ikan-ikan dari laut punya
          beberapa kandungan gizi yang dinilai lebih tinggi dibandingkan dengan
          ikan-ikan dari air tawar.
        </p>
        <p className="mb-5">
          Misalnya kandungan senyawa alami berupa DHA dan EPA yang cukup tinggi
          pada ikan laut. Khususnya untuk ikan yang berada di perairan laut
          dalam, contohnya yakni ikan tuna dan cakalang.
        </p>
        <p className="mb-5">
          Namun, bukan berarti ikan-ikan yang berasal dari air tawar tidak
          bergizi dibandingkan ikan-ikan dari laut. Terlepas dari tempat
          tinggalnya, semua jenis ikan tentu bergizi tinggi.
        </p>
        <p className="mb-5">
          Di sisi lain, ada beberapa nutrisi yang ternyata lebih tinggi
          jumlahnya pada ikan air tawar ketimbang ikan laut. Dalam hal ini
          misalnya ikan patin, yang terkenal tinggi kandungan omega-3 dan
          omega-6.
        </p>
        <p className="mb-5">
          Tak hanya itu, beberapa jenis ikan air tawar juga umumnya lebih tinggi
          kandungan kalium dan asam lemak tak jenuh tunggal serta ganda.
        </p>
        <p className="mb-5">
          Hal tersebut tentu membuat nutrisi yang ada di dalam ikan air tawar
          tidak bisa dipandang sebelah mata. Singkatnya, sebenarnya kedua
          kelompok ikan ini sama-sama memiliki kandungan gizi yang tinggi.
        </p>
        <p className="mb-5">
          Meski demikian, baik ikan air tawar dan ikan laut umumnya memiliki
          keunggulan masing-masing dalam hal kandungan zat gizinya.
        </p>

        <h2 className="font-bold text-black mb-3">
          Jadi, ikan mana yang paling baik untuk dimakan?
        </h2>
        <p className="mb-5">
          Secara garis besar, semua ikan yang tersedia di pasaran itu sehat
          untuk dimakan. Menteri Kesehatan RI, Dr. dr. Nila Farid Moeloek, Sp.M
          (K), turut menjelaskan bahwa ikan merupakan sumber makanan yang tidak
          kalah sehat dengan makanan sumber protein lainnya. Tak terkecuali
          dengan ikan-ikan dari air tawar dan dari air laut.
        </p>
        <p className="mb-5">
          Terbukti dengan tingginya asam lemak tak jenuh seperti omega 3, 6, 9,
          yodium, selenium, zat besi, magnesium, dan lainnya pada ikan. Terlepas
          dari mahal atau murahnya harga berbagai jenis ikan, semua sebenarnya
          sama-sama punya kandungan gizi yang tinggi.
        </p>
        <p className="mb-5">
          Pada intinya, kedua jenis ikan sama-sama bisa menjadi pilihan sumber
          makanan harian untuk Anda dan keluarga. Pemberiannya bisa diselingi
          agar masing-masing nutrisi yang ada di dalam setiap ikan tersebut bisa
          Anda dapatkan.
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
