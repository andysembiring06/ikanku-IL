import React from "react";
import artikelImage from "../assets/gambar-3/artikel-1-1.jpg";
import logoImage from "../assets/gambar-3/image.jpg";

const HeroSection1 = () => {
  return (
    <div className="bg-blue-600 flex justify-center items-center min-h-screen p-5">
      <div className="relative w-4/5 rounded-lg overflow-hidden shadow-lg bg-blue-600 text-white font-sans">
        <div className="relative -mx-5">
          {/* Gambar utama yang akan membesar dan bergerak ke atas */}
          <img
            src={artikelImage}
            alt="Agribisnis Perikanan Air Tawar"
            className="w-full rounded-t-lg scale-110 transition-all duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-5 hover:shadow-2xl hover:brightness-125"
          />
        </div>
        <div className="p-6 bg-black/50 flex justify-between items-center rounded-b-lg">
          {/* Menambahkan margin-top lebih besar untuk menurunkan teks */}
          <div className="w-3/4 mt-10">
            <h2 className="text-xl font-bold m-0">
              Mendukung Ketahanan Pangan Melalui Agribisnis Perikanan Air Tawar
            </h2>
            <p className="text-white text-base mt-4">
              Agribisnis perikanan air tawar menjadi sektor yang semakin
              strategis dalam mendukung ketahanan pangan di berbagai negara.
              Dengan sumb...
            </p>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm w-1/4">
            <div className="relative flex items-center gap-2">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-400 hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-blue-400 transition-all duration-300">
                <img
                  src={logoImage}
                  alt="Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center text-white">
                <p className="font-bold m-0">IkanKu</p>
                <p className="text-xs text-gray-400 m-0">11 Januari 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
