import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/klik_halaman_3/image.jpg";
import image2 from "../assets/klik_halaman_3/2.jpg";
import image3 from "../assets/klik_halaman_3/3.jpg";
import image4 from "../assets/klik_halaman_3/4.jpg";
import image5 from "../assets/klik_halaman_3/5.jpg";

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
          Bisa dibedakan juga, ciri-ciri perikanan air tawar yaitu menghabiskan
          sebagian atau seluruh hidupnya di air tawar seperti danau dan sungai
          dengan salinitas kurang dari 0,05%. Lingkungan air tawar tentunya
          berbeda dengan perairan laut yang berbeda tingkat salinitasnya.
        </p>

        <p className="mb-5">
          Budidaya ikan merupakan salah satu peluang bisnis yang cukup
          menjanjikan saat ini. Ikan air tawar termasuk salah satu jenis ikan
          yang cocok dibudidayakan. Selain karena proses perawatannya, peminat
          ikan air tawar di pasaran cukup tinggi.
        </p>

        {/* Judul 1 */}
        <h2 className="font-bold text-black mb-3">
          Ciri-ciri Perikanan Air Tawar yaitu Sebagai Berikut
        </h2>

        {/* Paragraf setelah Judul 1 */}
        <p className="mb-5">
          Untuk bisa bertahan di dalam air tawar, ikan membutuhkan adaptasi
          fisiologis yang bertujuan untuk menjaga keseimbangan konsentrasi ion
          dalam tubuh 41%. Adapun berikut ciri-ciri perikanan air tawar yaitu:
        </p>

        {/* Nomor 1 */}
        <div className="mb-5">
          <div className="flex items-center mb-2">
            <span className="font-bold text-black mr-2">1.</span>
            <p className="font-bold text-black">
              Struktur Tulang atau Duri Lebih Halus
            </p>
          </div>
          <p>
            Ciri-ciri ikan air tawar memiliki struktur tulang atau duri lebih
            halus. Karena itu, jenis ikan ini lebih gampang dikonsumsi
            dibandingkan ikan laut. Sebab ikan air tawar biasanya hidup pada
            perairan yang lebih tenang sehingga tidak membutuhkan banyak
            pergerakan di dalam air.
          </p>
        </div>

        {/* Nomor 2 */}
        <div className="mb-5">
          <div className="flex items-center mb-2">
            <span className="font-bold text-black mr-2">2.</span>
            <p className="font-bold text-black">
              Memiliki Ukuran Ginjal Lebih Besar
            </p>
          </div>
          <p>
            Ciri-ciri perikanan air tawar yaitu memiliki ukuran ginjal yang jauh
            lebih besar dibandingkan ikan laut. Ukuran ginjal ikan air tawar
            cenderung lebih besar karena memiliki lebih banyak air yang masuk
            melewati ginjalnya.
          </p>
        </div>

        {/* Nomor 3 */}
        <div className="mb-5">
          <div className="flex items-center mb-2">
            <span className="font-bold text-black mr-2">3.</span>
            <p className="font-bold text-black">
              Cenderung Memiliki Aroma Amis Lumpur
            </p>
          </div>
          <p>
            Setiap ikan pada umumnya mengeluarkan bau amis. Bau amis ikan air
            tawar dan ikan laut umumnya cenderung berbeda. Bau amis pada ikan
            air tawar lebih mendekati bau lumpur dibandingkan ikan laut yang bau
            amisnya lebih kental dengan bau laut.
          </p>
        </div>

        {/* Judul tanpa nomor */}
        <h2 className="font-bold text-black mb-3">
          Keuntungan Budidaya Ikan Air Tawar
        </h2>

        {/* Paragraf setelah Judul tanpa nomor */}
        <p className="mb-5">
          Budidaya ikan air tawar cukup menguntungkan karena jadi salah satu
          konsumsi utama masyarakat Indonesia. Setiap tahun, kebutuhan akan ikan
          air tawar terus meningkat bahkan ada beberapa jenis ikan air tawar
          seperti patin yang masih diimpor dari luar negeri untuk mencukupi
          kebutuhan pangan.
        </p>
        <p className="mb-5">
          Tingginya kebutuhan terhadap jenis ikan air tawar membuat budidaya
          ikan air tawar cukup menjanjikan. Selain itu, proses perawatannya juga
          relatif mudah karena pada umumnya ikan air tawar bisa berkembang biak
          di kolam sederhana. Untuk urusan pakannya juga sudah banyak pelet yang
          bisa Anda temukan di pasar.
        </p>

        {/* Judul tanpa nomor */}
        <h2 className="font-bold text-black mb-3">
          Cara Budidaya Ikan Air Tawar
        </h2>

        {/* Paragraf setelah Judul tanpa nomor */}
        <p className="mb-5">
          Terdapat beragam jenis metode budidaya ikan air tawar yang bisa
          dipilih. Melansir dari Efishery.com, berikut cara budidaya ikan air
          tawar:
        </p>

        {/* Nomor 1 */}
        <div className="mb-5">
          <div className="flex items-center mb-2">
            <span className="font-bold text-black mr-2">1.</span>
            <p className="font-bold text-black">
              Mempersiapkan Lahan untuk Budidaya Ikan Air Tawar
            </p>
          </div>
          <p>
            Sebelum masuk proses budidaya, Anda perlu mempersiapkan kolam
            budidaya yang tepat terlebih dahulu. Tiap jenis ikan air tawar
            memiliki kebutuhan masing-masing sehingga kolam yang dibuat sesuai
            dengan jenis ikan yang akan dibudidayakan. Perlu diperhatikan
            paparan sinar matahari, sistem aerasi dan kedalaman kolam.
          </p>
        </div>

        {/* Nomor 2 */}
        <div className="mb-5">
          <div className="flex items-center mb-2">
            <span className="font-bold text-black mr-2">2.</span>
            <p className="font-bold text-black">Memilih Bibit Ikan Air Tawar</p>
          </div>
          <p>
            Pemilihan bibit ikan air tawar yang unggul perlu dilakukan untuk
            mempercepat proses panen. Dengan memilih bibit yang tepat maka waktu
            panen bisa dipercepat hingga 30% dari estimasi awal. Bibit yang
            dibutuhkan yaitu bebas penyakit, bergerak aktif dan bersertifikat.
          </p>
        </div>

        {/* Nomor 3 */}
        <div className="mb-5">
          <div className="flex items-center mb-2">
            <span className="font-bold text-black mr-2">3.</span>
            <p className="font-bold text-black">
              Menebarkan Bibit Ikan Air Tawar
            </p>
          </div>
          <p>
            Jika sudah menemukan bibit ikan air tawar yang unggul maka langkah
            selanjutnya yaitu menebarkan bibit. Setiap jenis ikan air tawar
            memiliki padat lebar bibit optimal masing-masing sehingga harus
            dilakukan dengan kepadatan yang tepat. Menebarkan bibit ikan air
            tawar pertama dengan mengapungkan plastik ikan selama 15-20 menit.
            Selanjutnya buka plastik dan campurkan air kolam ke plastik. Langkah
            terakhir biarkan ikan keluar dengan sendirinya agar bisa beradaptasi
            dengan lingkungan kolam. Selain itu, bisa mencegah stress saat ikan
            dipindahkan ke kolam.
          </p>
        </div>

        {/* Nomor 4 */}
        <div className="mb-5">
          <div className="flex items-center mb-2">
            <span className="font-bold text-black mr-2">4.</span>
            <p className="font-bold text-black">Memberikan Pakan yang Tepat</p>
          </div>
          <p>
            Berikan pakan dengan perhitungan yang tepat agar ikan tumbuh dengan
            sehat. Saat memberi pakan perlu diperhatikan juga kualitas dan
            jumlah pakan yang diberikan. Di pasar, Anda bisa membeli pelet ikan
            air tawar dan menyesuaikan dengan kebutuhan ikan. Pastikan pemberian
            pakan secara teratur dan tidak berlebihan agar ikan tidak kelaparan
            atau kelebihan makan.
          </p>
        </div>

        {/* Nomor 5 */}
        <div className="mb-5">
          <div className="flex items-center mb-2">
            <span className="font-bold text-black mr-2">5.</span>
            <p className="font-bold text-black">Menjaga Kebersihan Kolam</p>
          </div>
          <p>
            Pastikan kolam tempat budidaya ikan selalu dalam keadaan bersih.
            Lakukan penggantian air secara rutin dan bersihkan sisa-sisa pakan
            atau kotoran ikan agar ikan tidak terserang penyakit dan bisa tumbuh
            sehat.
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
