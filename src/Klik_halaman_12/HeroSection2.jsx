import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/klik_halaman_12/image.jpg";
import image2 from "../assets/klik_halaman_12/2.jpg";
import image3 from "../assets/klik_halaman_12/3.jpg";
import image4 from "../assets/klik_halaman_12/4.jpg";
import image5 from "../assets/klik_halaman_12/5.jpg";

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
          Ikan lele merupakan salah satu jenis ikan air tawar yang populer di
          Indonesia. Ikan ini memiliki rasa yang lezat dan tekstur daging yang
          lembut, sehingga menjadi pilihan favorit bagi banyak orang. Selain
          kelezatannya, ikan lele juga memiliki banyak manfaat kesehatan. Dalam
          artikel ini, kita akan menjelajahi lebih dalam tentang ikan lele dan
          manfaatnya.
        </p>

        <p className="mb-5">
          Ikan lele memiliki beberapa jenis, di antaranya adalah ikan lele dumbo
          (Clarias gariepinus) dan ikan lele sangkuriang (Clarias batrachus).
          Kedua jenis ini biasanya ditemukan di perairan tawar seperti sungai,
          rawa, dan kolam budidaya. Ikan lele memiliki tubuh yang lonjong dan
          cenderung ramping, dengan warna kulit yang bervariasi mulai dari
          kecokelatan hingga kehitaman.
        </p>

        <p className="mb-5">
          Salah satu keunggulan ikan lele adalah rasa dagingnya yang lezat.
          Daging ikan lele memiliki tekstur yang halus dan lembut, sehingga
          cocok untuk berbagai jenis hidangan, baik digoreng, dibakar, atau
          diolah menjadi sup atau pepes. Selain itu, ikan lele juga memiliki
          aroma khas yang menambah cita rasa masakan.
        </p>

        <p className="mb-5">
          Selain rasanya yang lezat, ikan lele juga mengandung nutrisi penting.
          Ikan lele mengandung protein yang tinggi, yang sangat penting untuk
          pertumbuhan dan pemeliharaan sel tubuh. Protein dalam ikan lele juga
          mudah dicerna oleh tubuh manusia, sehingga baik untuk pencernaan.
          Selain itu, ikan lele juga mengandung asam lemak omega-3, yang dikenal
          memiliki manfaat bagi kesehatan jantung dan otak.
        </p>

        <p className="mb-5">
          Manfaat kesehatan lainnya dari mengonsumsi ikan lele adalah kandungan
          vitamin dan mineral yang dimilikinya. Ikan lele mengandung vitamin B
          kompleks, seperti vitamin B12 dan niacin, yang berperan dalam
          pembentukan sel darah merah dan fungsi saraf yang baik. Ikan lele juga
          mengandung vitamin D, yang membantu penyerapan kalsium untuk menjaga
          kesehatan tulang.
        </p>

        <p className="mb-5">
          Selain itu, ikan lele mengandung mineral penting seperti fosfor,
          magnesium, dan selenium. Fosfor diperlukan untuk pertumbuhan tulang
          dan gigi yang sehat. Magnesium membantu menjaga fungsi otot dan sistem
          saraf yang baik. Selenium berperan sebagai antioksidan dan membantu
          menjaga kesehatan sel-sel tubuh.
        </p>

        <p className="mb-5">
          Budidaya ikan lele juga memiliki manfaat ekonomi bagi masyarakat. Ikan
          lele dapat dibudidayakan secara intensif di kolam atau wadah lainnya,
          sehingga memberikan peluang usaha bagi peternak dan pembudidaya ikan.
          Ikan lele memiliki siklus pertumbuhan yang cepat, sehingga dapat
          dipanen dalam waktu relatif singkat.
        </p>

        <p className="mb-5">
          Dalam hal keberlanjutan lingkungan, ikan lele juga memiliki
          keunggulan. Ikan lele termasuk dalam kelompok ikan omnivora, yang
          berarti mereka dapat memakan berbagai jenis makanan, termasuk sisa
          makanan dan plankton. Hal ini dapat membantu mengurangi limbah pangan
          dan memanfaatkan sumber daya alam dengan lebih efisien.
        </p>

        <p className="mb-5">
          Dalam kesimpulan, ikan lele adalah jenis ikan air tawar yang populer
          di Indonesia dengan rasa yang lezat dan manfaat kesehatan yang
          beragam. Ikan ini kaya akan protein, asam lemak omega-3, vitamin, dan
          mineral yang penting bagi tubuh. Dengan budidaya yang relatif mudah
          dan manfaat ekonomi yang diberikannya, ikan lele juga memberikan
          peluang usaha yang menjanjikan bagi masyarakat. Jadi, tidak heran jika
          ikan lele menjadi pilihan favorit di berbagai hidangan di Indonesia.
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
