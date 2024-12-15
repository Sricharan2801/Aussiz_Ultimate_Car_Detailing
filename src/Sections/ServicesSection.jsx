import React from 'react';
import { services } from '../utils/util';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../utils/useContext';

const ServicesSection = () => {
  const navigate = useNavigate();
  const { setServiceId } = useGlobalContext();
  const handleServices = (input) => {
    navigate('/all-services');
    setServiceId(input)
  }
  return (
    <section id='services' className="section-top py-10">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="page-title font-bold text-center text-gray-800 mb-8">
          Discover the Best Mobile Car Detailing Services in Canberra
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden card-hover"
            >
              <picture>
                <source srcSet={service.imageUrlMobile} media="(max-width: 768px)" />
                <img
                  src={service.imageUrl}
                  alt={service.alt}
                  className="w-full h-48 object-cover"
                />
              </picture>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  {service.serviceName}
                </h3>
                <p className="text-gray-600 mt-2">
                  Starting at <span className="text-blue-600 font-semibold">{service.priceStartsFrom}</span>
                </p>
                <button
                  className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  onClick={()=>handleServices(service.id)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
