import { useState } from "react";
import { Link } from "react-router-dom";

// Add all 18 image imports here
import artikel21 from "../assets/gambar-3/artikel-1-2.jpg";
import artikel22 from "../assets/gambar-3/artikel-1-3.jpg";
import artikel23 from "../assets/gambar-3/artikel-1-4.jpg";
import artikel24 from "../assets/gambar-3/artikel-1-5.jpg";
import artikel25 from "../assets/gambar-3/artikel-1-6.jpg";
import artikel26 from "../assets/gambar-3/artikel-1-7.jpg";
import artikel28 from "../assets/gambar-3/artikel-1-9.jpg";
import artikel29 from "../assets/gambar-3/artikel-1-10.jpg";
import artikel30 from "../assets/gambar-3/artikel-1-11.jpg";
import artikel31 from "../assets/gambar-3/artikel-1-12.jpg";
import artikel32 from "../assets/gambar-3/artikel-1-13.jpg";
import artikel33 from "../assets/gambar-3/artikel-1-14.jpg";
import artikel34 from "../assets/gambar-3/artikel-1-15.png";

const HeroSection2 = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // All 18 items for the news
  const newsItems = [
    {
      img: artikel21,
      title: "Budidaya Ikan Air Tawar Mengguna...",
      tags: ["Bisnis", "Budidaya"],
      link: "/Klik_halaman_2",
    },
    {
      img: artikel22,
      title: "Memahami Ciri-ciri Perikanan Air Taw...",
      tags: ["Bisnis", "Budidaya"],
      link: "/Klik_halaman_3",
    },
    {
      img: artikel23,
      title: "Ini 5 Manfaat Ikan Air Tawar untuk Kes....",
      tags: ["Kesehatan"],
      link: "/Klik_halaman_4",
    },
    {
      img: artikel24,
      title: "5 Jenis Ikan Air Tawar yang Sering....",
      tags: ["Bisnis", "Budidaya"],
      link: "/Klik_halaman_5",
    },
    {
      img: artikel25,
      title: "Inilah 5 Fakta Mengenai Ikan Mu....",
      tags: ["Kesehatan"],
      link: "/Klik_halaman_7",
    },
    {
      img: artikel26,
      title: "Ikan air tawar di dunia terancam p....",
      tags: ["Kesehatan"],
      link: "/Klik_halaman_6",
    },

    {
      img: artikel28,
      title: "Mana yang Lebih Bergizi: Ikan Laut A....",
      tags: ["Teknologi"],
      link: "/Klik_halaman_14",
    },
    {
      img: artikel29,
      title: "Ikan Lele Jenis Ikan Air Tawar yang Po....",
      tags: ["Budidaya"],
      link: "/Klik_halaman_12",
    },
    {
      img: artikel30,
      title: "Perbedaan Perikanan Air Pay....",
      tags: ["Budidaya", "Bisnis"],
      link: "/Klik_halaman_13",
    },
    {
      img: artikel31,
      title: "Inovasi Teknologi dalam Budidaya....",
      tags: ["Kesehatan"],
      link: "/Klik_halaman_11",
    },
    {
      img: artikel32,
      title: "Purwakarta Perkuat Posisi Sebagai Pen....",
      tags: ["Teknologi", "Bisnis"],
      link: "/Klik_halaman_10",
    },
    {
      img: artikel33,
      title: "Pokdakan dan Poklahsar Dapat B....",
      tags: ["Teknologi"],
      link: "/Klik_halaman_8",
    },
    {
      img: artikel34,
      title: "Artikel 14",
      tags: ["Kesehatan"],
      link: "/Klik_halaman_9",
    },
  ];

  // Filter based on search query
  const filteredItems = newsItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="container mx-auto max-w-5xl p-5">
        <h1 className="text-2xl text-center text-gray-800 mb-5">
          Artikel lainnya
        </h1>

        {/* Search Bar */}
        <div className="mb-5">
          <form className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-3 pl-5 pr-10 border border-gray-300 rounded-lg focus:border-blue-500 transition"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-blue-500"
            >
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {currentItems.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:-translate-y-1 transition cursor-pointer"
            >
              <Link to={news.link}>
                {" "}
                {/* Link sesuai dengan properti 'link' */}
                <div className="relative pt-[60%] overflow-hidden">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg text-gray-800 mb-3">{news.title}</h3>
                  <div className="flex gap-2 mb-2">
                    {news.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">11 Januari 2024</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {searchQuery === "" && (
          <div className="flex justify-between items-center py-5">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 text-lg rounded bg-gray-100 hover:bg-gray-200 transition disabled:opacity-50"
            >
              <i className="fas fa-chevron-left"></i> Previous
            </button>
            <span className="text-lg text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 text-lg rounded bg-gray-100 hover:bg-gray-200 transition disabled:opacity-50"
            >
              Next <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection2;
