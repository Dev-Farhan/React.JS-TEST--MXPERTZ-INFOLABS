import React, { useState } from "react";
import Navbar from "../componets/Navbar";
import { useLocation } from "react-router-dom";
import Card from "../componets/Card";

const CardDetail = () => {
  const { state } = useLocation();

  const [selectedButton, setSelectedButton] = useState("Wordexplore");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle changing the current index when Next or Prev is clicked
  const handleNext = () => {
    if (currentIndex < state?.data[selectedButton]?.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button); // Set the selected button
    setCurrentIndex(0); // Reset index when switching tabs
  };
  return (
    <div className="w-full h-full lg:h-screen bg-[#080c25]">
      <Navbar />
      <div className="flex flex-col items-center justify-center font-poppins gap-9 mt-3">
        <div className="font-semibold text-3xl text-center text-white">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
            The Lost City of
          </span>{" "}
          <span>Future Earth</span>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col lg:flex lg:flex-row items-center gap-16 mt-4">
          <button
            className={`px-7 py-2 rounded-3xl flex gap-2 items-center ${
              selectedButton === "Wordexplore"
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                : "bg-[#2c2d49] text-white"
            }`}
            // onClick={() => handleButtonClick("Wordexplore")}
          >
            <span className="bg-white px-2 py-2 rounded-full flex items-center justify-center text-blue-700 font-bold w-8 h-8">
              W
            </span>
            <span className="font-medium">Word Explore</span>
          </button>

          <button
            className={`px-7 py-2 rounded-3xl flex gap-2 items-center ${
              selectedButton === "Storyadvenure"
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                : "bg-[#2c2d49] text-white"
            }`}
            // onClick={() => handleButtonClick("Storyadvenure")}
          >
            <span className="bg-white px-2 py-2 rounded-full flex items-center justify-center text-yellow-400 font-bold w-8 h-8">
              S
            </span>
            <span className="font-medium">Story Adventure</span>
          </button>

          <button
            className={`px-7 py-2 rounded-3xl flex gap-2 items-center ${
              selectedButton === "Brainquest"
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                : "bg-[#2c2d49] text-white"
            }`}
            // onClick={() => handleButtonClick("Brainquest")}
          >
            <span className="bg-white px-2 py-2 rounded-full flex items-center justify-center text-green-400 font-bold w-8 h-8">
              B
            </span>
            <span className="font-medium">Brain Quest</span>
          </button>
        </div>
        {/* Main Content */}
        <div className="flex justify-center items-center pt-10 max-w-3xl ">
          {/* Left Side: Big Card */}
          <div className="w-[40%] ml-2 flex flex-col items-center bg-[#2c2d49] border border-[#4f87e8] border-dashed border-spacing-24 rounded-lg shadow-lg p-6">
            <div className="mb-6 w-full">
              <h2 className="text-2 xl font-medium  bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
                {state?.data[selectedButton]?.[currentIndex]?.Noun}
              </h2>
              <h2 className="text-xs mb-4 text-white">
                {state?.data[selectedButton]?.[currentIndex]?.Storyitext}
              </h2>
              <div className="w-full bg-gray-200 p-4 rounded-lg">
                <img
                  src={
                    state?.data[selectedButton]?.[currentIndex]?.Storyimage[0]
                  }
                  alt="Big Card"
                  className="w-full h-[200px] object-cover rounded-lg"
                />
              </div>

              <div className="text-xs mt-1 text-white">
                <span className="text-green-400  ">Synonyms </span>:
                {state?.data[selectedButton]?.[currentIndex]?.Synonyms}
              </div>
              <div className="text-xs mt-1 text-white">
                <span className="text-red-400  ">Antonyms </span>:
                {state?.data[selectedButton]?.[currentIndex]?.Antonyms}
              </div>
            </div>
          </div>

          {/* Right Side: Grid of Small Cards */}
          <div className="w-[60%] mr-8 ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {state?.data[selectedButton]
              ?.filter((_, index) => index !== currentIndex) // Exclude the current big card
              .map((item, index) => (
                <div
                  key={index}
                  className="w-[200px] h-[300px] rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-400 border border-gray-200 py-4 px-2 flex flex-col items-center justify-center gap-3 hover:shadow-2xl"
                >
                  <div className="w-full h-[230px] rounded-xl bg-gray-300 flex items-center justify-center overflow-hidden">
                    {item?.image ? (
                      <img
                        className="w-full h-full object-cover"
                        src={item?.image[0]}
                        alt="Image"
                      />
                    ) : (
                      <span className="text-sm text-gray-500">
                        No Image Available
                      </span>
                    )}
                  </div>
                  <p className="font-poppins font-light text-white uppercase text-center">
                    {item?.Storyitext || "No Description"}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
