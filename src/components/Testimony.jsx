import React from "react";

const TestimonialCard = ({ name, rating, review, imageSrc }) => {
  return (
    <div className="bg-[#010B37] text-white p-6 rounded-lg shadow-lg relative w-72 mx-auto">
      {/* Profile Image */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <img
          src={imageSrc}
          alt={name}
          className="w-16 h-16 rounded-full border-4 border-white"
        />
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        {/* Rating */}
        <div className="flex justify-center items-center mt-2">
          <img
            src="/src/images/testimony-star-1.png"
            alt="star"
            className="w-5 h-5"
          />
          <span className="ml-2 text-white">{rating}</span>
        </div>
        {/* Review Text */}
        <p className="text-sm mt-4 text-gray-300">{review}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="flex flex-col-2 md:flex-row gap-6 justify-center mt-10 max-w-4xl mx-auto transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <TestimonialCard
        name="Bimo"
        rating="4.7/5"
        review="Aventa telah membantu saya meningkatkan penjualan dan keuntungan bisnis saya."
        imageSrc="/src/images/testimony-profile-1.png"
      />
      <TestimonialCard
        name="Dinda"
        rating="4.7/5"
        review="Aventa sangat mudah digunakan dan telah membantu saya menghemat waktu dan biaya."
        imageSrc="/src/images/testimony-profile-2.png"
      />
    </div>
  );
};

export default Testimonials;
