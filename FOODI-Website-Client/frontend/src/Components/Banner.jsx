import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
        <div className="relative w-full md:w-1/2 mt-7" style={{ paddingTop: '30%' }}>
          <video
            src="/HeroSection/Banner.mp4"
            alt="Not Found"
            className="absolute top-0 left-0 w-full h-full object-cover"
            loop
            muted
            playsInline
            autoPlay // Auto-play the video
          >
            <source src="/HeroSection/Banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-7" data-aos="fade-up">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable <span className="text-green">Food</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl">
            At Foodi, we transform the meal experience by offering customized dishes tailored to your specific dietary needs.
          </p>
          <Link to="/Menu">
            <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full ml-3">
              Order Now
            </button>
          </Link>
          <Link to="/custom">
            <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full ml-3 mt-5">
              Custom Your Food
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
