import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const App = () => {

    const darkMod = () => {
      if (localStorage.getItem("dark")) {
        document.documentElement.classList.add("dark");
      }
      document.documentElement.classList.toggle("dark");
      if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("dark", true);
      } else {
        localStorage.removeItem("dark");
      }
      console.log("dark mod deyisdi");
    };

  return (
    <div className="h-full bg-white flex flex-col  dark:bg-gray-900 dark:text-white">
      <div className="h-14 border-b border-gray-100 dark:border-gray-700 w-full flex justify-between items-center px-6">
        <a
          href=""
          className="text-2xl font-bold inline-flex items-center gap-1 text-teal-600 dark:text-white"
        >
          ./Deveops
          <span className="text-sm text-gray-400">v2.5.0</span>
        </a>
        <form className="w-1/3">
          <input
            type="text"
            placeholder="Axtar..."
            className="w-full bg-gray-100 h-10 px-3 placeholder-gray-500 outline-none dark:bg-gray-700 dark:placeholder-gray-300"
          />
        </form>
        <a
          href=""
          className="bg-teal-600 text-white py-2 px-5 text-center rounded"
        >
          Daxil ol
        </a>
      </div>

      <main className="container flex">
        <aside className="w-64 border-r p-2 border-gray-300 dark:border-gray-700 h-[745px] overflow-auto">
          <nav className="mb-3 border-b dark:border-b-gray-700 pb-3">
            <a href="#" className="nav-link active">
              Home
            </a>
            <a href="#" className="nav-link">
              Blog
            </a>
            <a href="#" className="nav-link">
              Explore
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>
            <a href="#" className="nav-link">
              Question
            </a>
          </nav>

          <nav className="">
            <a href="#" className="nav-link">
              HTML
            </a>
            <a href="#" className="nav-link">
              CSS
            </a>
            <a href="#" className="nav-link">
              Javascript
            </a>
            <a href="#" className="nav-link">
              React.js
            </a>
            <a href="#" className="nav-link">
              Next.js
            </a>
            <a href="#" className="nav-link">
              MySQL
            </a>
          </nav>

          <div className="mt-52">
            <button
              onClick={darkMod}
              className="bg-gray-700 dark:bg-white hover:bg-gray-600 w-full transition-colors text-white dark:text-gray-700 h-8 font-medium flex items-center px-4 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className="text-white dark:text-gray-700 fill-current mr-2"
              >
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
              </svg>
              <span className="hidden dark:inline">Light mod</span>
              <span className=" inline dark:hidden">Dark mod</span>
            </button>
          </div>
        </aside>

        <section className="flex-auto py-6 px-10 overflow-auto">
          <div className="mx-auto max-w-screen-xl ml-10">
            <h1 className="text-3xl font-semibold mb-4 leading-relaxed text-teal-600">
              Lorem ipsum dolor sit amet.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              praesentium! Modi quis dicta magni eos.
            </p>

            <div className="grid grid-cols-10 mt-5 gap-8 mb-5">
              <div className="col-span-2">
                <a
                  href="#"
                  className="border dark:border-gray-700 flex flex-col px-4 py-7 items-center rounded"
                >
                  <span className="w-24 h-24 mb-4 border border-red-500 rounded-full grid place-items-center relative">
                    <span className=" absolute -top-3 -right-3 w-24 h-24 scale-90 bg-red-500 bg-opacity-10 rounded-full"></span>
                    <FaHtml5 className="w-12 h-12 text-red-500" />
                  </span>
                  <span className=" inline-flex h-10 tracking-wider items-center rounded text-white bg-red-500 px-5">
                    Html
                  </span>
                </a>
              </div>
              <div className="col-span-2">
                <a
                  href="#"
                  className="border dark:border-gray-700 flex flex-col px-4 py-7 items-center rounded"
                >
                  <span className="w-24 h-24 mb-4 border border-blue-500 rounded-full grid place-items-center relative">
                    <span className=" absolute -top-3 -right-3 w-24 h-24 scale-90 bg-blue-500 bg-opacity-10 rounded-full"></span>
                    <FaCss3Alt className="w-12 h-12 text-blue-500" />
                  </span>
                  <span className=" inline-flex h-10 tracking-wider items-center rounded text-white bg-blue-500 px-5">
                    Html
                  </span>
                </a>
              </div>
              <div className="col-span-2">
                <a
                  href="#"
                  className="border dark:border-gray-700 flex flex-col px-4 py-7 items-center rounded"
                >
                  <span className="w-24 h-24 mb-4 border border-yellow-500 rounded-full grid place-items-center relative">
                    <span className=" absolute -top-3 -right-3 w-24 h-24 scale-90 bg-yellow-500 bg-opacity-10 rounded-full"></span>
                    <IoLogoNodejs className="w-12 h-12 text-yellow-500" />
                  </span>
                  <span className=" inline-flex h-10 tracking-wider items-center rounded text-white bg-yellow-500 px-5">
                    Html
                  </span>
                </a>
              </div>
              <div className="col-span-2">
                <a
                  href="#"
                  className="border dark:border-gray-700 flex flex-col px-4 py-7 items-center rounded"
                >
                  <span className="w-24 h-24 mb-4 border border-blue-700 rounded-full grid place-items-center relative">
                    <span className=" absolute -top-3 -right-3 w-24 h-24 scale-90 bg-blue-700 bg-opacity-10 rounded-full"></span>
                    <FaReact className="w-12 h-12 text-blue-700" />
                  </span>
                  <span className=" inline-flex h-10 tracking-wider items-center rounded text-white bg-blue-700 px-5">
                    Html
                  </span>
                </a>
              </div>
              <div className="col-span-2">
                <a
                  href="#"
                  className="border dark:border-gray-700 flex flex-col px-4 py-7 items-center rounded"
                >
                  <span className="w-24 h-24 mb-4 border border-black rounded-full grid place-items-center relative">
                    <span className=" absolute -top-3 -right-3 w-24 h-24 scale-90 bg-black bg-opacity-10 rounded-full"></span>
                    <RiNextjsFill className="w-12 h-12 text-black" />
                  </span>
                  <span className=" inline-flex h-10 tracking-wider items-center rounded text-white bg-black px-5">
                    Html
                  </span>
                </a>
              </div>
            </div>

            <div className=" rounded bg-blue-600 text-white flex items-center gap-5 px-8 py-4">
              <FaTwitter className="w-10 h-10" />
              <div>
                <h1 className=" text-xl font-light tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  eveniet?
                </h1>
                <p className="text-lg font-thin tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis rerum non consequatur quo nisi eos.
                </p>
                <button className="bg-white text-black py-2 px-6 rounded text-lg font-medium mt-3 hover:scale-105 transition-all duration-300 tracking-wide">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
