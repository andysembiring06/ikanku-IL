import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/klik_halaman_2/image.jpg";
import image2 from "../assets/klik_halaman_2/2.jpg";
import image3 from "../assets/klik_halaman_2/3.jpg";
import image4 from "../assets/klik_halaman_2/4.jpg";
import image5 from "../assets/klik_halaman_2/5.jpg";

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
          Budidaya ikan air tawar merupakan salah satu kegiatan ekonomi yang
          memiliki potensi besar di Indonesia. Dengan sumber daya air yang
          melimpah, banyak petani ikan yang memanfaatkan kolam, tambak, atau
          karamba untuk membudidayakan berbagai jenis ikan air tawar seperti
          lele, nila, gurame, dan mas. Salah satu teknologi yang semakin populer
          dalam budidaya ikan air tawar adalah penggunaan kincir air paddle
          wheel.
        </p>

        <p className="mb-5">
          Kincir air paddle wheel adalah alat mekanis yang digunakan untuk
          meningkatkan sirkulasi air dan oksigen terlarut dalam kolam atau
          tambak. Alat ini bekerja dengan cara memutar baling-baling yang
          menciptakan arus air dan menyebarkan oksigen ke seluruh bagian kolam.
          Dengan demikian, kincir air paddle wheel membantu menjaga kualitas air
          dan kesehatan ikan.
        </p>

        {/* Section Title */}
        <h2 className="font-bold text-black mb-3">
          Manfaat Penggunaan Kincir Air Paddle Wheel
        </h2>

        {/* Numbered List */}
        <ol className="mb-5 list-decimal list-inside">
          <li className="mb-2">
            Meningkatkan Oksigen Terlarut: Oksigen terlarut adalah faktor
            penting untuk kesehatan ikan. Kincir air paddle wheel dapat
            meningkatkan kadar oksigen di dalam air hingga 5-7 mg/L.
          </li>
          <li className="mb-2">
            Mengurangi Stres Ikan: Sirkulasi air yang baik mengurangi
            kemungkinan terjadinya zona mati (dead zones) di dalam kolam, di
            mana oksigen rendah dan limbah terakumulasi. Dengan kincir air,
            distribusi oksigen menjadi lebih merata, menurunkan risiko stres
            pada ikan hingga 40%.
          </li>
          <li className="mb-2">
            Mengendalikan Suhu: Aliran air yang dihasilkan oleh kincir air
            membantu meratakan suhu di seluruh kolam, mencegah terjadinya
            stratifikasi suhu yang dapat merugikan ikan. Dengan distribusi suhu
            yang merata, fluktuasi suhu dapat dikendalikan dalam kisaran 2-3°C.
          </li>
          <li className="mb-2">
            Meningkatkan Kualitas Air: Sirkulasi air yang baik membantu
            mengurangi penumpukan limbah dan zat-zat berbahaya seperti amonia
            dan nitrit. Kadar amonia dapat ditekan hingga kurang dari 0,5 mg/L
            dan nitrit di bawah 0,1 mg/L.
          </li>
          <li className="mb-2">
            Meningkatkan Carrying capacity: Carrying capacity atau daya dukung
            kolam adalah jumlah maksimum ikan yang dapat dibudidayakan dalam
            kolam tanpa mengorbankan kesejahteraan ikan dan kualitas air. Kincir
            air paddle wheel berperan penting dalam meningkatkan carrying
            capacity melalui beberapa mekanisme berikut:
          </li>
        </ol>

        <div className="mb-5 max-w-3xl">
          <div className="flex items-start mb-4">
            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <p className="text-base">
              Meningkatkan Oksigenasi: Dengan lebih banyak oksigen terlarut di
              dalam air, ikan dapat hidup dan tumbuh lebih baik, memungkinkan
              petani menambah jumlah ikan dalam kolam hingga 30-50%.
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <p className="text-base">
              Mengurangi Akumulasi Limbah: Arus yang dihasilkan oleh kincir air
              membantu mendistribusikan limbah secara merata dan mencegah
              penumpukan di satu tempat. Ini membantu menjaga kebersihan air dan
              mengurangi risiko penyakit.
            </p>
          </div>
        </div>

        {/* Three Paragraphs */}
        <p className="mb-5">
          Kincir air paddle wheel harus ditempatkan di lokasi yang strategis
          dalam kolam atau tambak. Untuk kolam berukuran 1000 meter persegi, dua
          unit kincir air dengan kapasitas masing-masing 1 HP sudah cukup
          efektif.
        </p>
        <p className="mb-5">
          Penggunaan kincir air paddle wheel dalam budidaya ikan air tawar
          membawa banyak manfaat, mulai dari meningkatkan oksigen terlarut,
          mengurangi stress ikan, mengendalikan suhu, hingga meningkatkan
          kualitas air. Selain itu, kincir air paddle wheel juga berkontribusi
          signifikan dalam meningkatkan carrying capacity kolam, memungkinkan
          budidaya ikan dengan kepadatan yang lebih tinggi tanpa mengorbankan
          kesehatan ikan dan kualitas air.
        </p>
        <p>
          Dengan pemahaman yang baik tentang cara penggunaan dan perawatannya,
          kincir air paddle wheel dapat menjadi investasi yang sangat berharga
          bagi para petani ikan untuk mencapai hasil panen yang optimal dan
          menjaga kesehatan ikan. Budidaya ikan air tawar dengan teknologi
          modern seperti kincir air paddle wheel tidak hanya meningkatkan
          produktivitas, tetapi juga mendukung keberlanjutan lingkungan perairan
          dan kesejahteraan petani ikan. Oleh karena itu, adopsi teknologi ini
          sangat disarankan bagi mereka yang ingin mengoptimalkan usaha budidaya
          ikan air tawar.
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
