import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/klik_halaman_9/image.jpg";
import image2 from "../assets/klik_halaman_9/2.jpg";
import image3 from "../assets/klik_halaman_9/3.jpg";
import image4 from "../assets/klik_halaman_9/4.jpg";
import image5 from "../assets/klik_halaman_9/5.jpg";

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

        <p className="mb-8">
          Ikan menjadi salah satu bahan makanan yang tak hanya lezat dan
          menggugah selera saja tetapi juga kaya manfaat dan nutrisi. Ikan juga
          merupakan bahan makanan yang bisa diolah menjadi berbagai masakan
          menggugah selera mulai dari masakan goreng, tumis, gulai hingga pepes.
          Bicara mengenai ikan, apakah Sahabat Fimela juga termasuk penggemar
          ikan?
        </p>

        <p className="mb-5">
          Mengenai ikan sendiri, ada dua jenis ikan yang umum kita temukan di
          sekitar kita. Jenis ikan itu adalah ikan air tawar dan ikan air asin
          (laut). Dari kedua jenis ikan ini, sudah tahu apa bedanya? Berikut
          perbedaan ikan laut dan ikan tawar.
        </p>

        <div className="flex flex-col items-start p-6 space-y-6 bg-gray-200">
          <h1 className="text-black font-bold text-2xl">Aroma dan Nutrisi</h1>

          {/* Titik pertama dan teks */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <p className="text-gray-700">Aroma</p>
          </div>
          <p className="text-gray-600 mt-1">
            Ikan laut secara umum memiliki bau yang cenderung amis seperti air
            laut. Sedangkan ikan air tawar, bau amisnya cenderung seperti bau
            tanah atau lumpur. Agar kedua jenis ikan tidak berbau, beri air
            perasan jeruk lemon pada daging ikan yang telah dibersihkan dan
            dicuci.
          </p>

          {/* Titik kedua dan teks */}
          <div className="flex items-center space-x-2 mt-3">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <p className="text-gray-700">Duri</p>
          </div>
          <p className="text-gray-600 mt-1">
            Ikan laut memiliki duri yang kuat dan kencang. Beberapa ikan air
            laut juga memiliki duri yang banyak sehingga harus sangat hati-hati
            saat mengonsumsinya. Ikan air tawar secara umum memiliki duri yang
            lebih sedikit namun juga ada beberapa yang sangat tajam. Ikan air
            laut yang terbiasa hidup di laut dengan arus kuat mempengaruhi duri
            ikan menjadi lebih kuat atau kencang. Sedangkan ikan air tawar yang
            hidup di lingkungan air tenang cenderung memiliki duri yang lebih
            kecil atau halus.
          </p>

          {/* Titik ketiga dan teks */}
          <div className="flex items-center space-x-2 mt-3">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <p className="text-gray-700">Kandungan Nutrisi</p>
          </div>
          <p className="text-gray-600 mt-1">
            Ikan merupakan bahan makanan yang kaya akan kandungan omega 3. Baik
            ikan air laut maupun ikan air tawar, keduanya sama-sama mengandung
            omega 3 yang tinggi. Namun, kandungan omega 3 pada ikan air laut
            lebih tinggi. Ikan air laut juga mengandung nutrisi bernama iodin
            yang lebih tinggi jika dibandingkan dengan ikan air tawar.
          </p>
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
