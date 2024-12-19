import React from "react";
import heroImage from "../assets/klik_halaman_7/1.jpg";

const HeroSection1 = () => {
  return (
    <section className="bg-gray-200 pt-32 pb-12">
      {/* Teks judul */}
      <div className="text-left pl-10 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
          Ini 5 Manfaat Ikan Air Tawar untuk Kesehatan yang Sayang Dilewatkan
        </h1>
      </div>

      {/* Container untuk gambar dengan latar belakang yang sama dengan latar belakang utama */}
      <div className="relative w-full h-[600px] bg-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex justify-center items-center">
        <img
          src={heroImage}
          alt="Agribisnis Perikanan Air Tawar"
          className="w-[95%] h-full object-cover mx-auto rounded-lg"
          style={{ objectPosition: "bottom" }} // Fokuskan gambar ke bagian bawah
        />
      </div>

      {/* Info Box di luar gambar dengan padding kiri pl-10 */}
      <div className="flex justify-start space-x-4 pl-10 mt-4">
        <div className="px-4 py-2 border-2 border-gray-300 bg-white text-gray-800 font-semibold rounded-full shadow-md">
          Bisnis
        </div>
        <div className="px-4 py-2 border-2 border-gray-300 bg-white text-gray-800 font-semibold rounded-full shadow-md">
          Budidaya
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
