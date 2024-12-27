import React from "react";
import "tailwindcss/tailwind.css";

const Register = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat bg-fixed h-screen"
      style={{
        backgroundImage: `url('a-medical-emergency-ambulance-driving-during-traffic-jam-on-city-road-rush-hour-concept-ambulance-generative-ai-photo.jpeg)`,
      }}
    >
      {/* Background overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-70"></div>

      {/* Navbar */}
      <nav className="text-white z-20 relative text-xl text-center">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3">
            <span className="text-2xl font-semibold whitespace-nowrap">
              E Health Care
            </span>
          </a>
          <div className="flex mx-auto w-full md:block md:w-auto">
            <ul className="flex flex-auto flex-row font-medium p-4 mt-4 md:space-x-8 md:flex-row md:mt-0">
              <li>
                <a
                  href="/Homepage.html"
                  className="block py-2 px-3 rounded-lg transition-colors duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 px-3 rounded-lg transition-colors duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block py-2 px-3 rounded-lg transition-colors duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 rounded-lg transition-colors duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Registration Form */}
      <div className="relative max-w-4xl mx-auto p-6 bg-transparent bg-opacity-90 shadow-lg rounded-lg z-20 mt-16">
        <div className="text-center mb-8">
          <h4 className="text-white text-2xl font-bold">Admin Panel Registration</h4>
        </div>

        <form>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-white text-lg mb-2 block">First Name</label>
              <input
                type="text"
                className="bg-gray-100 w-full text-black text-md px-4 py-3.5 rounded-md focus:bg-transparent focus:text-white outline-blue-500 transition-all"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label className="text-white text-lg mb-2 block">Last Name</label>
              <input
                type="text"
                className="bg-gray-100 w-full text-black text-md px-4 py-3.5 rounded-md focus:bg-transparent focus:text-white outline-blue-500 transition-all"
                placeholder="Enter last name"
              />
            </div>
            <div>
              <label className="text-white text-lg mb-2 block">Email Id</label>
              <input
                type="email"
                className="bg-gray-100 w-full text-black text-md px-4 py-3.5 rounded-md focus:bg-transparent focus:text-white outline-blue-500 transition-all"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="text-white text-lg mb-2 block">Mobile No.</label>
              <input
                type="tel"
                className="bg-gray-100 w-full text-black text-md px-4 py-3.5 rounded-md focus:bg-transparent focus:text-white outline-blue-500 transition-all"
                placeholder="Enter mobile number"
              />
            </div>
            <div>
              <label className="text-white text-lg mb-2 block">Password</label>
              <input
                type="password"
                className="bg-gray-100 w-full text-black text-md px-4 py-3.5 rounded-md focus:bg-transparent focus:text-white outline-blue-500 transition-all"
                placeholder="Enter password"
              />
            </div>
            <div>
              <label className="text-white text-lg mb-2 block">Confirm Password</label>
              <input
                type="password"
                className="bg-gray-100 w-full text-black text-md px-4 py-3.5 rounded-md focus:bg-transparent focus:text-white outline-blue-500 transition-all"
                placeholder="Confirm password"
              />
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="relative flex mx-auto p-1 overflow-hidden font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
            >
              <span className="flex justify-center text-lg sm:text-xl relative px-44 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Sign Up
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 relative pt-8">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <span className="self-center text-2xl font-semibold dark:text-white">
                E Health Care
              </span>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      E Health Care
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;
