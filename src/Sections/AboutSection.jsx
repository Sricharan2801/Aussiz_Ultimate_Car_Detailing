import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className="section-top h-[100vh] py-10 px-5 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="page-title">About Aussiz Ultimate Car Detailing</h2>
        <p className="mt-4 text-gray-600 text-lg font-inter leading-relaxed text-left">
          Welcome to Aussiz Ultimate Car Detailing, your trusted <strong>mobile car detailing service</strong> in <strong>Canberra</strong>, Australia.
          We take pride in providing <strong>top-notch detailing services</strong> designed to bring out the best in your vehicle. From &nbsp;
          <strong>Mini Car Detailing</strong> to <strong>Ultimate Car Detailing</strong>, we ensure every corner of your car is
          cleaned, polished, and rejuvenated with the highest quality products. 
        </p>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed text-left">
          Our comprehensive range of services includes <strong>Mini Car Detailing</strong>, <strong>Interior Car Detailing</strong>, <strong>Exterior Car Detailing</strong>, 
          <strong>Full Car Detailing</strong>,  <strong>Ultimate Car Detailing</strong>,  <strong>Ceramic Coating</strong>, <strong>Cut & Polish</strong>, and   <strong>Headlight Restoration & Rejuvenation</strong>. We deliver these services directly to your doorstep at affordable prices.
        
        </p>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed text-left ">
          At Aussiz Ultimate Car Detailing, we are committed to exceptional customer satisfaction and maintaining the highest standards
          in car care. Let us help you keep your vehicle in pristine condition, no matter where you are in Canberra.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <a href='#services' className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
