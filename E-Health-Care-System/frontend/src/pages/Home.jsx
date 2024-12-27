import React from "react";
import './Home.css'

const HomePage = () => {
  return (
    <>
      <div className="relative bg-cover bg-center bg-no-repeat bg-fixed bg-[url('a-medical-emergency-ambulance-driving-during-traffic-jam-on-city-road-rush-hour-concept-ambulance-generative-ai-photo.jpeg')]">
        <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-70"></div>

        {/* Navbar */}
        <nav className="text-white z-30 relative">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                E Health Care
              </span>
            </a>
            <div className="hidden w-full md:block md:w-auto">
              <ul className="flex flex-col font-medium p-4 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                <li>
                  <a href="#home" className="block py-2 px-3 rounded-lg transition-colors duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="block py-2 px-3 rounded-lg transition-colors duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="block py-2 px-3 rounded-lg transition-colors duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="block py-2 px-3 rounded-lg transition-colors duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Section */}
        <div className="container mx-auto py-48 relative h-screen flex flex-col justify-center items-center">
          <h1 className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-300 via-teal-200 to-pink-300 text-center">
            Welcome to E Health Care System
          </h1>
          <h2 className="typewriter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-200 text-4xl mt-8 text-center">
            Making Health Care Simpler, Smarter, and More Accessible for All.
          </h2>
        </div>

        <div class="relative container mx-auto py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
   
            <div class="relative flex items-center justify-center">
                <div
                    class="relative w-full rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 shadow-xl">
                    <div
                        class="relative rounded-[calc(1.5rem-1px)] p-6 sm:p-8 md:p-10 bg-white dark:bg-gray-900 transform hover:scale-105 transition-transform duration-300">
                        <div class="flex justify-center items-center">
                            <button
                                class="flex justify-center items-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <span
                                    class="text-lg sm:text-xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Check
                                    Now!</span>
                            </button>
                        </div>
                        <div class="relative mt-6 sm:mt-8 flex gap-4 items-center justify-center">
                            <img class="h-32 w-32 sm:h-40 sm:w-40 rounded-full shadow-lg"
                                src="cute-cartoon-blood-drop-having-blood-transfusion-vector.jpg" alt="Blood drop" />
                            <div>
                                <h3
                                    class="font-sans text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-white">
                                    Free Blood Request</h3>
                                <span
                                    class="translate-y-3 text-lg sm:text-xl tracking-wide text-gray-600 dark:text-gray-400">E
                                    Health Care</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      
            <div class="relative flex items-center justify-center">
                <div
                    class="relative w-full rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 shadow-xl">
                    <div
                        class="relative rounded-[calc(1.5rem-1px)] p-6 sm:p-8 md:p-10 bg-white dark:bg-gray-900 transform hover:scale-105 transition-transform duration-300">
                        <div class="flex justify-center items-center">
                            <button
                                class="flex justify-center items-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <span
                                    class="text-lg sm:text-xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Check
                                    Now!</span>
                            </button>
                        </div>
                        <div class="relative mt-6 sm:mt-8 flex gap-4 items-center justify-center">
                            <img class="h-32 w-32 sm:h-40 sm:w-40 rounded-full shadow-lg"
                                src="cute-cartoon-blood-drop-having-blood-transfusion-vector.jpg" alt="Blood drop" />
                            <div>
                                <h3
                                    class="font-sans text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-white">
                                    Free Blood Request</h3>
                                <span
                                    class="translate-y-3 text-lg sm:text-xl tracking-wide text-gray-600 dark:text-gray-400">E
                                    Health Care</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
            <div class="relative flex items-center justify-center">
                <div
                    class="relative w-full rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 shadow-xl">
                    <div
                        class="relative rounded-[calc(1.5rem-1px)] p-6 sm:p-8 md:p-10 bg-white dark:bg-gray-900 transform hover:scale-105 transition-transform duration-300">
                        <div class="flex justify-center items-center">
                            <button
                                class="flex justify-center items-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <span
                                    class="text-lg sm:text-xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Check
                                    Now!</span>
                            </button>
                        </div>
                        <div class="relative mt-6 sm:mt-8 flex gap-4 items-center justify-center">
                            <img class="h-32 w-32 sm:h-40 sm:w-40 rounded-full shadow-lg"
                                src="cute-cartoon-blood-drop-having-blood-transfusion-vector.jpg" alt="Blood drop" />
                            <div>
                                <h3
                                    class="font-sans text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-white">
                                    Free Blood Request</h3>
                                <span
                                    class="translate-y-3 text-lg sm:text-xl tracking-wide text-gray-600 dark:text-gray-400">E
                                    Health Care</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        {/* Grid Section */}
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 py-16 text-center relative">
          <div className="p-6 rounded-lg shadow-3xl relative bg-gray-800">
            <h3 className="text-xl font-semibold mb-4">Consultation</h3>
            <p>Expert medical consultation from the comfort of your home.</p>
          </div>
          <div className="p-6 bg-transparent rounded-lg shadow-lg  bg-gray-800">
            <h3 className="text-xl font-semibold mb-4">Emergency Services</h3>
            <p>24/7 ambulance and emergency response for critical care.</p>
          </div>
          <div className="p-6 bg-transparent rounded-lg shadow-lg  bg-gray-800">
            <h3 className="text-xl font-semibold mb-4">Pharmacy</h3>
            <p>Get your prescriptions delivered to your doorstep.</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 relative">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    E Health Care
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Resources
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="https://flowbite.com/" className="hover:underline">
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
                      <a href="https://github.com/themesberg/flowbite" className="hover:underline ">
                        Github
                      </a>
                    </li>
                    <li>
                      <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                        Discord
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
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  E Health Care™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;