import React, { useState, useRef, useEffect } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null); // Tambahkan ref untuk button burger

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      burgerRef.current &&
      !burgerRef.current.contains(event.target) // Tambahkan kondisi untuk button burger
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center">
        {/* Fitur Search (Tambahkan elemen search di sini) */}
        <button className="text-gray-600 focus:outline-none mr-4">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Button Burger */}
        <button
          ref={burgerRef} // Tambahkan ref untuk button burger
          className="text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-16 left-0 w-full h-1/2 bg-gray-100 p-4 flex items-center justify-center"
        >
          <div className="w-full max-w-md">
            <ul className="space-y-4 text-center">
              <li>
                <a href="#" className="block text-blue-600 hover:text-blue-800">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-gray-900">
                  Fitur & Layanan
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-gray-900">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-gray-900">
                  FAQ
                </a>
              </li>
            </ul>
            <button className="mt-8 bg-[#578fca] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
              Mulai Sekarang
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <div className="flex items-center">
        {/* Logo (Ganti dengan elemen logo Anda) */}
        <img
          src="/src/images/LOGO AVENTA 1.png"
          alt="Logo"
          className="h-8 mr-4"
        />
        <img
          src="/src/images/LOGO AVENTA PNG 1.png"
          alt="Logo"
          className="h-8 mr-4"
        />
        <span className="font-bold text-xl">AVENTA</span>
      </div>
      <BurgerMenu />
    </nav>
  );
};

export default Navbar;
