/* eslint-disable @typescript-eslint/no-unused-vars */
import { BsPerson } from "react-icons/bs";
const NavBar = () => {
  return (
    <>
      {/* <div className="max-w-[1440px] mx-auto px-4 bg-white">
        <div className="flex flex-wrap justify-between items-center p-4 gap-4">
          <div className="w-full sm:w-auto flex justify-center sm:justify-start items-center gap-1.5 min-w-[150px]">
            <img src="/Logomark.png" alt="Logo" className="logo-image" />
            <h1 className="text-xl font-bold">SocialLawy</h1>
          </div>

          <div className="relative flex-1 min-w-[200px] max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.7-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          <div className="w-full sm:w-auto sm:flex sm:justify-end items-center flex gap-4">
            <button className="bg-indigo-400 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer w-full sm:w-auto flex items-center justify-center">
              Log out
            </button>
            <BsPerson className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div> */}
      <div className="w-full sm:w-auto flex justify-center  items-center gap-1.5 p-4">
        <img src="/Logomark.png" alt="Logo" className="logo-image" />
        <h1 className="text-xl font-bold">SocialLawy</h1>
      </div>
    </>
  );
};

export default NavBar;
