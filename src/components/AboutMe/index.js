import React from 'react';
import ProfilePicture from '../../img/picture.png'; // Update the image file path

const AboutMe = () => {
  return (
    <div id="about-me" className="relative bg-gray-900">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 opacity-10"></div>
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white">
        <div className="max-w-xl mb-10 md:mx-auto lg:max-w-5xl md:mb-12">
          <h2 className="text-center max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">About</span>
            </span>{' '}
            Me
          </h2>
          <div className="w-full flex flex-wrap">
            <div className="w-full lg:w-1/2 p-2 flex items-center">
              <img
                src={ProfilePicture}
                alt="Akash Vasava"
                className="mx-auto rounded-lg border border-gray-600 shadow-md"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-2 py-8">
              <p className="text-base text-gray-300 md:text-lg">
                Hi there! I'm Akash Vasava, a passionate Web Developer with a knack for creating captivating user interfaces and interactive web applications using MERN. I'm driven by my curiosity and love for coding, and I thrive on turning innovative ideas into elegant and functional digital experiences.
              </p>
              <p className="mt-4 text-base text-gray-300 md:text-lg">
                My journey in the world of development began with my fascination for computers and coding during my childhood. Although I explored other paths, my passion for coding eventually brought me back, and now I'm excited to pursue a career that aligns with my true passion. With each line of code, I strive to contribute positively to the digital landscape while continually learning and growing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
