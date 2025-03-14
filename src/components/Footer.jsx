import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#010B37] text-white p-6 mt-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-start text-2xl font-bold md:text-center md:text-3xl">
          Aventa
        </h2>
        <p className="text-start text-sm mt-2 text-gray-300 md:text-center md:text-base">
          Solusi AI untuk Otomatisasi, Analitik, dan Pemasaran Digital di
          E-Commerce. Meningkatkan Penjualan, Menghemat Waktu dan Biaya, dan
          Meningkatkan Keuntungan.
        </p>
        {/* Social Media Icons */}
        <div className="flex justify-start gap-4 mt-4 md:justify-center">
          <img src="/src/images/x.png" alt="Twitter" className="w-8 h-8" />
          <img
            src="/src/images/facebook.png"
            alt="Facebook"
            className="w-8 h-8"
          />
          <img
            src="/src/images/instagram.png"
            alt="Instagram"
            className="w-8 h-8"
          />
        </div>
        {/* Links */}
        <div className="mt-6 text-left">
          <h3 className="text-lg font-bold">Perusahaan</h3>
          <ul className="text-sm text-gray-300 mt-2">
            <li>Fitur & Layanan</li>
            <li className="mt-2">Tentang Kami</li>
          </ul>
          <h3 className="text-lg font-bold mt-4">Help</h3>
          <ul className="text-sm text-gray-300 mt-2">
            <li>Syarat & Kententuan</li>
            <li className="mt-2">Kebijakan Privasi</li>
          </ul>
        </div>
        {/* Call to Action */}
        <div className="flex justify-start mt-6 md:justify-center">
          <h3 className="  text-lg font-bold ">Aktifkan Aventa Sekarang!</h3>
        </div>
        <div className="flex justify-start mt-3 md:justify-center">
          <button className=" bg-[#578fca] text-white py-2 px-6 rounded-lg  ">
            Mulai Sekarang
          </button>
        </div>
        {/* Copyright */}
        <div className="mt-6 text-sm text-gray-400 border-t border-gray-500 pt-4">
          &copy; Copyright 2025, All Rights Reserved by Transparent
        </div>
      </div>
    </footer>
  );
};

export default Footer;
