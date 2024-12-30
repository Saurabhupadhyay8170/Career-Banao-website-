import React from 'react';

const AdmissionMain: React.FC = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="grid md:grid-cols-2 gap-5">
        {/* Left Card - Video Background */}
        <div className="relative bg-black shadow-lg rounded-lg overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="your-video-link.mp4"
            autoPlay
            loop
            muted
          />
          <div className="relative z-10 bg-black bg-opacity-50 p-5">
            <h2 className="text-xl font-bold text-white mb-3">Admission Information</h2>
            <p className="text-white">
              Add detailed content about admission processes, eligibility, and important dates.
            </p>
          </div>
        </div>

        {/* Right Card - Personal Input */}
        <div className="bg-white p-5 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold mb-3">Your Input</h2>
          <p>
            Add your personal content here, like achievements or additional details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionMain;
