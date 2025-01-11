import React from "react";

function TeamCard({ name, role, img, description }) {
  return (
    <div className="relative w-[302px] h-[417px] perspective-[1000px]">
      {/* Card Container with 3D Flip Effect */}
      <div className="absolute inset-0 w-full h-full transition-transform duration-700 transform group-hover:rotate-y-180 transform-style-preserve-3d">
        {/* Front Side */}
        <div className="absolute inset-0 bg-white shadow-lg rounded-t-[49px] flex flex-col items-center justify-center p-5 backface-hidden">
          <img
            src={img}
            alt={name}
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold text-gray-700">{name}</h2>
          <p className="text-sm text-green-500">{role}</p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-yellow-100 shadow-lg rounded-t-[49px] flex flex-col items-center justify-center p-5 rotate-y-180 backface-hidden">
          <p className="text-sm text-gray-700 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
