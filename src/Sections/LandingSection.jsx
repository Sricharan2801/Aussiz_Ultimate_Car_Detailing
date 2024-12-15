import { FaChevronDown } from 'react-icons/fa';

const LandingSection = () => {
  return (
    <section id='home' className="relative w-full lg:h-[80vh] h-[90vh] lg:top-[20vh] top-[10vh] bg-gray-50 flex flex-col items-center justify-around">
      <h1 className="lg:text-4xl md:text-5xl text-2xl font-poppins font-bold text-orange-600 lg:px-10 px-6 text-center">
        Mobile Car Detailing Service in Canberra
      </h1>
      <p className="lg:text-lg md:text-xl text-lg font-inter text-gray-800 text-center lg:px-10 px-6 ">
        Don’t let your busy schedule stop you from giving your vehicle the care it deserves.
        At <strong><a href="/" className="text-orange-500 hover:underline">Aussiz Ultimate Car Detailing</a></strong>, we offer the <strong>best car detailing services</strong> in <strong>Canberra</strong>, 
        designed to restore your car’s shine, inside and out. Whether you need a quick refresh or a complete makeover, 
        we deliver exceptional quality, affordable pricing, and exclusive weekly offers that make car care hassle-free!
      </p>
      <div className="lg:mt-4 lg:px-10 px-6 text-center">
        <a
          href="#book-now"
          className="bg-yellow-600 text-white md:px-10 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 shadow-lg transition">
          Book Now
        </a>
      </div>

      <div className="lg:px-10 px-6 text-center mt-4">
        <div className="bg-white p-6 rounded-lg shadow-xl w-full lg:max-w-3xl text-left border-l-4 border-yellow-500">
          <p className="text-lg text-yellow-700 font-semibold mb-2">
            🎉 Special Offer: Get a Mini Detail Free!
          </p>
          <p className="text-sm text-gray-800 mb-4">
            Book two Full Detailings and get a mini detail on us, or save $50 on two Full Car Detailings!
          </p>
          <p className="text-lg text-yellow-700 font-semibold mb-2">
            🎉 Weekly Offer: Get $20 Off Interior Detailing!
          </p>
          <p className="text-sm text-gray-800">
            Book now and save on our premium interior car detailing services!
          </p>
        </div>
      </div>

      <div className="text-lg text-center mt-4">
        <a href="#about" className="text-yellow-600 font-semibold hover:underline flex items-center justify-center">
          Know More <FaChevronDown className="h-5 w-5 ml-2" />
        </a>
      </div>
    </section>
  );
};

export default LandingSection;
