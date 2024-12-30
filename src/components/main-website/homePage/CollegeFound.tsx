// import React from 'react';
// import { HashLink } from 'react-router-hash-link';

// const CollegeFound: React.FC = () => {
//   return (
//     <section className="py-16 bg-[#EDEDE9]">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">
//           Find Your Perfect College
//         </h2>
//         <p className="text-gray-600 text-lg mb-8">
//           Explore a wide range of colleges and choose the one that fits your career goals and aspirations.
//         </p>
//         <HashLink
//           to="/CollegeFinder"
//           smooth
//           className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
//         >
//           College Finder
//         </HashLink>
//       </div>
//     </section>
//   );
// };

// export default CollegeFound;

import React from "react";
import { Link } from "react-router-dom";

const CollegeFinder: React.FC = () => {
  return (
    <div className="bg-gradient-to-r mt-5 font-poppins from-[#983fd4] to-[#e46ab3] text-white py-16 px-8 lg:px-24 rounded-lg shadow-lg">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">
        Find Your Dream College
      </h2>
      <p className="text-lg lg:text-xl font-light text-center mb-12 max-w-3xl mx-auto">
        Take the first step towards your future by exploring a wide range of
        top-tier colleges. Compare programs, campuses, and opportunities to
        choose the one that perfectly aligns with your career goals and dreams.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Left Card */}
        <div className="bg-white text-gray-900 rounded-lg shadow-md p-6 w-full lg:w-1/3 transform transition-transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4 text-center">Explore Colleges</h3>
          <p className="text-base text-gray-700 mb-6 text-center">
            Discover detailed information about colleges, including their
            programs, campus life, rankings, and much more.
          </p>
          <button className="bg-[#983fd4] hover:bg-[#e46ab3] text-white py-2 px-6 rounded-lg w-full">
            Explore Now
          </button>
        </div>

        {/* Center Button */}
        <div className="flex-shrink-0">
          <Link to={'/CollegeFinder'}>
           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-110">
            Start College Finder
           </button>
          </Link>
        </div>

        {/* Right Card */}
        <div className="bg-white text-gray-900 rounded-lg shadow-md p-6 w-full lg:w-1/3 transform transition-transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4 text-center">Career Guidance</h3>
          <p className="text-base text-gray-700 mb-6 text-center">
            Get personalized career advice to help you choose the best program
            and college to achieve your goals.
          </p>
          <a
            href="https://wa.me/<+91-8750092628>?text=Hi%20I%20need%20guidance%20regarding%20college%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#983fd4] hover:bg-[#e46ab3] text-white py-2 px-6 rounded-lg w-full text-center block"
          >
            Get Guidance
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollegeFinder;
