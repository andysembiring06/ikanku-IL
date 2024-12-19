import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/klik_halaman_4/image.jpg";
import image2 from "../assets/klik_halaman_4/2.jpg";
import image3 from "../assets/klik_halaman_4/3.jpg";
import image4 from "../assets/klik_halaman_4/4.jpg";
import image5 from "../assets/klik_halaman_4/5.jpg";

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
          “Ikan air tawar mengandung asam lemak omega-3, protein, selenium,
          vitamin D dan beberapa zat penting lainnya. Manfaatnya mulai dari
          menurunkan risiko sakit jantung, mencegah anemia dan menjaga kesehatan
          otak.”
        </p>

        <p className="mb-5">
          Ikan air tawar mengandung berbagai macam nutrisi yang dapat membantu
          menjaga kesehatan tubuh. Sejumlah kandungan baik yang terdapat di
          dalamnya, mampu menurunkan risiko gangguan kesehatan. 
        </p>

        <p className="mb-5">
          Nah, mau tahu apa saja jenis dan manfaatnya untuk kesehatan tubuh
          secara <br /> keseluruhan?
        </p>

        {/* Judul */}
        <h2 className="text-black font-bold text-xl mb-3">
          Ikan apa saja yang hidup di air tawar?
        </h2>
        <p className="mb-5">
          Ada berbagai jenis ikan tawar bisa kamu olah menjadi makanan yang
          lezat dan bergizi. Agar tidak salah pilih, sebaiknya cari tahu
          jenis-jenis ikan air tawar, seperti:
        </p>

        {/* Bulatan Garis Hitam */}
        <ul className="list-disc pl-5 mb-5">
          {[
            "Lele ",
            "Ikan gurame",
            "Ikan mas",
            "Nila",
            "Patin",
            "Mujair",
            "Gabus",
            "Ikan bawal air tawar",
            "Patin",
            "Ikan wader",
          ].map((item, index) => (
            <li key={index} className="text-gray-800">
              {item}
            </li>
          ))}
        </ul>

        {/* Judul dan Paragraf */}
        <h2 className="text-black font-bold text-xl mb-3">
          Berbagai Manfaat Ikan Air Tawar untuk Kesehatan
        </h2>
        <p className="mb-5">
          Ikan air tawar mengandung rendah lemak jenuh. Artinya, ikan jenis ini
          aman dikonsumsi oleh pengidap penyakit kronis. Di antaranya seperti
          sakit jantung, serangan jantung dan tekanan darah tinggi. Berikut ini
          manfaatnya bagi kesehatan tubuh.
        </p>

        {/* Manfaat */}
        <h2 className="text-black font-bold text-xl mb-3">
          Keuntungan Budidaya Ikan Air Tawar
        </h2>
        <div className="mb-5">
          <h3 className="text-black font-bold text-lg">
            1. Menjaga kesehatan mata
          </h3>
          <p className="text-gray-800">
            Mengonsumsi ikan air tawar yang kaya akan omega-3 membuat kamu
            terhindar dari berbagai gangguan kesehatan mata. Khususnya gangguan
            mata yang terjadi akibat pertambahan usia, seperti degenerasi
            makula.
          </p>
        </div>
        <p className="mb-5">
          Menurut studi dalam The American Journal of Clinical Nutrition,
          berjudul Oily fish Consumption, Dietary Docosahexaenoic Acid and
          Eicosapentaenoic Acid Intakes, and Associations with Neovascular
          Age-Related Macular Degeneration, mengonsumsi ikan berlemak setiap
          satu kali dalam seminggu dikaitkan dengan penurunan risiko degenerasi
          makular neovaskular sebesar 53 persen.
        </p>
        <div className="mb-5">
          <h3 className="text-black font-bold text-lg">
            2. Menjaga kesehatan jantung
          </h3>
          <p className="text-gray-800">
            Ikan jenis ini mengandung tinggi omega-3. Ini merupakan lemak tak
            jenuh yang efektif meningkatkan kesehatan Jantung.
          </p>
        </div>
        <p className="mb-5">
          Menurut studi dalam jurnal Circulation dengan judul Omega-3 Fatty
          Acids and Heart Health, omega-3 mampu menurunkan trigliserida dan
          meningkatkan kolesterol baik. Selain itu, omega-3 juga bisa menurunkan
          aterosklerosis melalui efeknya pada metabolisme dan mengurangi
          inflamasi dalam tubuh yang bisa menjaga kesehatan jantung.
        </p>
        <p className="mb-5">
          Omega-3 juga efektif mencegah peradangan yang berpotensi merusak
          pembuluh darah. Dengan begitu, kamu akan terhindar dari penyakit
          kronis, seperti sakit jantung dan stroke di masa depan.
        </p>
        <div className="mb-5">
          <h3 className="text-black font-bold text-lg">
            3. Mengandung vitamin B12
          </h3>
          <p className="text-gray-800">
            Ikan air tawar mengandung tinggi vitamin B12. Asupannya mampu
            memenuhi lebih dari 20 persen kebutuhan harian tubuh. Jenis ikan air
            tawar dengan kandungan vitamin B12 yang paling tinggi adalah lele.
            Untuk mendapatkan manfaatnya, kamu bisa mengonsumsinya 2 sampai 3
            minggu sekali.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-black font-bold text-lg">
            4. Memperbaiki otot dan jaringan tubuh
          </h3>
          <p className="text-gray-800">
            Manfaat selanjutnya adalah memperbaiki otot dan jaringan di dalam
            tubuh. Kegunaan ini terjadi berkat kandungan protein di dalam ikan
            air tawar. Asupan tersebut juga dapat membantu pembentukan hormon
            dan enzim, serta berbagai fungsi tubuh lainnya.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-black font-bold text-lg">
            5. Menjaga kesehatan otak dan jantung
          </h3>
          <p className="text-gray-800">
            Ikan yang hidup di air tawar mengandung berbagai jenis vitamin dan
            mineral. Termasuk vitamin A, B1, dan C, serta zat besi, kalsium, dan
            fosfor. Nutrisi baik tersebut efektif membantu menjaga kesehatan
            otak. Tak sampai di situ saja, asupan itu juga dapat memelihara
            kesehatan jantung.
          </p>
        </div>
        <p className="mb-5">
          Meski menyehatkan, ikan air tawar tidak luput dari polutan dari proses
          produksi, pengemasan atau pengiriman. Ikan ini juga berpotensi terkena
          paparan zat kimia beracun, seperti merkuri, bifenil poliklorinasi
          (PCBs) dan dioksin.  Jadi, pastikan memilih jenis ikan yang tepat dan
          mencucinya sampai bersih sebelum mengolahnya. Manfaat ikan air tawar
          yang disebutkan di atas bisa diperoleh dari ikan nila, sarden, kakap,
          bawal dan lele.
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
