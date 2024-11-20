import React from "react";
const Card = ({ title, image, status, onClick }) => {
  return (
    <div
      className="min-w-sm rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-400 border border-gray-200 py-4 px-2 flex flex-col items-center justify-center gap-3 hover:shadow-2xl "
      onClick={onClick}
    >
      <img
        className="w-full h-[230px] rounded-xl"
        src={image ? image[0] : []}
        alt="Image"
      />
      <p className="font-poppins font-light text-white uppercase flex flex-col gap-2 items-center justify-center">
        {title}
      </p>
      {status && (
        <button
          className={`w-full mx-2 border px-6 py-2 rounded-2xl bg-white font-medium ${
            status === "Published"
              ? "text-blue-500" // Blue for Published
              : status === "Completed"
              ? "text-green-500" // Green for Complete
              : status === "In Progress"
              ? "text-yellow-500" // Yellow for Incomplete
              : "text-gray-500" // Gray for Draft (Default)
          }`}
        >
          {status}
        </button>
      )}
    </div>
  );
};

export default Card;
