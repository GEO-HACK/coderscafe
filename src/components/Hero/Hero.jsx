import React from "react";
import BgImage from "../../assets/bgImage.png";
import coffeeMain from "../../assets/black.png";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <main
      className="bg-cover bg-center bg-no-repeat min-h-[750px]"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar section */}
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className=" text-2xl">Black lifestyle lovers,</h1>
                  <h1 className="text-sm opacity-50 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem, optio. Beatae in suscipit assumenda magnam nihil
                    cupiditate laborum voluptatum maiores minus, a voluptas
                    laudantium
                  </h1>
                </div>

                {/* Absolute div */}
                <div className="absolute -top-6 -left-10 w-[250px] h-[198px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* hero image section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={coffeeMain}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
              >
                {" "}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute top-10 right-0 w-1/2 z-[1]"
              >
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>
            {/* third div section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className=" text-2xl">Blvck Tumbler ,</h1>
                  <h1 className="text-sm opacity-50 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem, optio. Beatae in suscipit assumenda magnam nihil
                    cupiditate laborum voluptatum maiores minus, a voluptas
                    laudantium
                  </h1>
                </div>

                {/* Absolute div */}
                <div className="absolute -top-6 -right-10 w-[250px] h-[198px] bg-darkGray/50 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* popup section */}
        <div className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center  gap-6 text-white">
            <div className="w-[1px] h-[70px] bg-white"></div>
            <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
              <FaFacebookF className="text-2xl"/>
            </div>
            <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
              <FaTwitter className="text-2xl" />
            </div>
            <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
              <FaInstagram  className="text-2xl"/>
            </div>
            <div className="w-[1px] h-[70px] bg-white"></div>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Hero;
