import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/klik_halaman_5/image.jpg";
import image2 from "../assets/klik_halaman_5/2.jpg";
import image3 from "../assets/klik_halaman_5/3.jpg";
import image4 from "../assets/klik_halaman_5/4.jpg";
import image5 from "../assets/klik_halaman_5/5.jpg";

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
          Jenis Ikan air tawar yang sering dikonsumsi oleh masyarakat tentu
          sangatlah beragam. Selain bisa diolah menjadi makanan yang lezat dan
          menggugah selera, ikan juga merupakan bahan makanan yang menjadi
          sumber vitamin dan nutrisi untuk tubuh.
        </p>

        <p className="mb-5">
          Ikan air tawar merupakan jenis ikan yang hidup di air tawar seperti
          kolam, sungai, dan danau dengan salinitas air kurang dari 0,05%.
          Sebanyak 41 persen dari jumlah spesies ikan diketahui hidup di air
          tawar.
        </p>

        <p className="mb-5">
          Secara fisiologis, ikan air tawar tentu cukup berbeda dengan jenis
          ikan air laut. Berikut Merdeka.com merangkum jenis ikan air tawar yang
          populer dan sering dikonsumsi, dilansir dari Liputan6 berbagai sumber:
        </p>

        <div className="mb-5">
          <h3 className="text-black font-bold text-lg">1. Ikan Mujair</h3>
          <p className="text-gray-800">
            Ikan mujair merupakan jenis ikan air tawar yang cukup populer untuk
            dikonsumsi masyarakat Indonesia. Kabarnya, asal mula nama 'Mujair'
            diambil dari nama penemunya. Ikan ini dikabarkan ditemukan oleh
            seorang pria bernama 'Mujair' di sungai serang pantai Selatan
            Blitar, Jawa Timur pada tahun 1939
          </p>
        </div>
        <p className="mb-5">
          Penyebaran jenis ikan ini ada di perairan Afrika dan Indonesia. Ciri
          fisik ikan ini bisa dilihat dari bentuk badannya yang pipih dengan
          warna hitam, warna keabu-abuan atau warna kuning. Untuk ukuran panjang
          maksimum ikan ini bisa mencapai sekitar 40 cm.
        </p>
        <p className="mb-5">
          Jenis ikan air tawar satu ini terkenal kaya akan fosfor dan berbagai
          gizi lain yang baik untuk tubuh. Ikan ini juga cocok untuk diolah
          untuk berbagai masakan Indonesia.
        </p>
        <div className="mb-5">
          <h3 className="text-black font-bold text-lg">2. Ikan Gurame</h3>
          <p className="text-gray-800">
            Ikan Gurame juga salah satu jenis ikan yang populer dan menjadi
            favorit banyak orang. Hanya saja, ikan ini cenderung memiliki harga
            yang sedikit lebih mahal dibanding ikan mujair. Gurame sendiri
            memiliki ciri fisik pada bentuk tubuhnya yang pipih melebar, serta
            sisik yang lebar dan rapat. Ikan gurame memiliki daging yang padat
            dan tebal, dan duri yang berukuran besar hanya terdapat pada tengah
            badannya saja.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-black font-bold text-lg">3. Ikan Mas</h3>
          <p className="text-gray-800">
            Ikan mas sebenarnya ada beberapa jenis yang dikategorikan sebagai
            ikan hias. Ciri fisiknya yakni memiliki tubuh yang tegak pipih
            dengan sisik yang normal dan siripnya yang memanjang. Daging dari
            ikan mas juga cenderung memiliki tekstur yang sangat lembut.
            Kekurangannya, ikan ini memiliki duri kecil dan halus di setiap
            lapisan dagingnya. Maka Anda harus berhati-hati jika mengonsumsi
            ikan ini.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-black font-bold text-lg">4. Ikan Patin</h3>
          <p className="text-gray-800">
            Ikan jenis ini memiliki ciri fisik dan daging yang mirip dengan ikan
            lele. Jenis ikan air tawar satu ini terbilang cukup banyak menyimpan
            vitamin. Ikan patin memiliki lemak tak jenuh mencapai 50% dari total
            seluruh nilai gizi yang terkandung di dalam ikan. Selain itu, ikan
            ini juga mengandung DHA serta Omega 3 yang tinggi sehingga sangat
            cocok jika di konsumsi oleh anak-anak, ibu hamil dan orang tua.Yang
            populer, ikan patin biasanya diolah sebagai sup ikan patin yang
            cocok dikonsumsi oleh segala usia.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-black font-bold text-lg">5. Ikan Nila</h3>
          <p className="text-gray-800">
            Jenis ikan air tawar satu ini sebenarnya memiliki ciri fisik yang
            mirip dengan ikan mujair. Ikan yang memiliki nama ilmiah Oreochromis
            niloticus cukup populer dan banyak dibudidayakan di Indonesia. Ikan
            nila sendiri ada juga yang berwarna merah.  Cara menikmati jenis
            ikan ini juga beragam, Anda bisa hanya menggorengnya saja dan
            disantap menggunakan sambal. Atau ditumis dengan bumbu asam manis.
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
