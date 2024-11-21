import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroImage from "../assets/hero.jpg";
import Card from "../componets/Card";
import { useNavigate } from "react-router-dom";
import Navbar from "../componets/Navbar";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
const Home = () => {
  const navigate = useNavigate();
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLodaing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const getAllData = async () => {
    toast.dismiss();
    setIsLodaing(true);
    try {
      const response = await fetch(
        "https://mxpertztestapi.onrender.com/api/sciencefiction"
      );
      const data = await response.json();
      setListData(data);
      setIsLodaing(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to get all data");
      setIsLodaing(false);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the items for the current page
  const currentItems = listData?.slice(indexOfFirstItem, indexOfLastItem);

  // Handle previous page click
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page click
  const nextPage = () => {
    if (currentItems.length === itemsPerPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  // Function to call API and redirect
  const handleCardClick = async (id) => {
    try {
      const response = await fetch(
        `https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`
      );
      const data = await response.json();
      navigate(`cardDetail/${id}`, { state: { data } });
    } catch (error) {
      console.error("Error fetching card data:", error);
    }
  };

  return (
    <div
      className="relative w-full h-full lg:h-screen bg-cover bg-center bg-no-repeat  "
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div class="custom-shape-divider-bottom-1732092401">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      {/* Navbar  */}

      <Navbar />

      <div className="flex flex-col items-center justify-center font-poppins gap-9 mt-3">
        <h1 className="font-semibold text-3xl text-white">
          Science Fiction Stories
        </h1>
        <div className="flex flex-col lg:flex lg:flex-row  items-center gap-16 mt-4">
          <button className="bg-blue-700 px-7 py-2 rounded-3xl flex gap-2 items-center">
            <span className="bg-white px-2 py-2 rounded-full flex items-center justify-center text-blue-700 font-bold w-8 h-8">
              N
            </span>
            <span className="text-white font-medium">New</span>
          </button>
          <button className="bg-yellow-400 px-7 py-2 rounded-3xl flex gap-2 items-center">
            <span className="bg-white px-2 py-2 rounded-full flex items-center justify-center text-yellow-400 font-bold w-8 h-8">
              P
            </span>
            <span className="text-white font-medium">In Progress</span>
          </button>
          <button className="bg-green-400 px-7 py-2 rounded-3xl flex gap-2 items-center">
            <span className="bg-white px-2 py-2 rounded-full flex items-center justify-center text-green-400 font-bold w-8 h-8">
              C
            </span>
            <span className="text-white font-medium">Completed</span>
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-2 rounded-3xl flex gap-2 items-center">
            <span className="text-white font-medium">Clear All</span>
          </button>
        </div>
      </div>

      <div className="relative z-10  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pt-28 mx-20 cursor-pointer">
        {isLoading
          ? Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-full h-[300px] rounded-3xl bg-gray-300 animate-pulse"
                ></div>
              ))
          : // Render cards when data is available
            currentItems?.map((item, index) => (
              <Card
                key={index}
                title={item?.Title}
                image={item?.Image}
                status={item?.Status}
                onClick={() => handleCardClick(item?._id)}
              />
            ))}
      </div>

      <div className="flex justify-between px-20 py-4">
        <button
          onClick={prevPage}
          className=" flex items-center  gap-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text font-semibold"
          disabled={currentPage === 1}
        >
          <FaArrowLeftLong color="#22d3ee" />
          <span>Prev</span>
        </button>
        <button
          onClick={nextPage}
          className="flex items-center  gap-1  bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text font-semibold"
          disabled={currentItems.length < itemsPerPage}
        >
          <span>Next</span>
          <FaArrowRight color="#22d3ee" />
        </button>
      </div>
      {/* </div> */}
      <ToastContainer />
    </div>
  );
};

export default Home;
