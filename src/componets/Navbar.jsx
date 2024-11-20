import React from "react";

const Navbar = () => {
  return (
    <nav className="flex item-center justify-between px-4 py-10 font-poppins ">
      <span className="flex justify-between text-white text-xl">
        BrainyLingo
      </span>
      <ul className="hidden lg:flex md:flex   justify-between gap-5 text-white">
        <li className="hover:text-indigo-700">Home</li>
        <li className="hover:text-indigo-700">Leaderboard</li>
        <li className="hover:text-indigo-700">Daily Quiz</li>
        <li className="hover:text-indigo-700">Genre</li>
      </ul>
      <button className="w-[100px] h-8 flex justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm text-center rounded-2xl">
        Sign Out
      </button>
    </nav>
  );
};

export default Navbar;
