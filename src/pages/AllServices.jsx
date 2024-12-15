import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { allServiceDetails } from '../utils/util';
import { useGlobalContext } from '../utils/useContext';

const AllServices = () => {
  const navigate = useNavigate();
  const { serviceId, setServiceId } = useGlobalContext();
  const [service, setService] = useState(null);

  // Fetch the service data based on the serviceId
  useEffect(() => {
    console.log("Current serviceId:", serviceId); // Debugging line
    if (serviceId) {
      const fetchedService = allServiceDetails[serviceId - 1] 
      setService(fetchedService);
    }
  }, [serviceId]);


  if (!service) {
    return <p className="text-center text-lg text-red-600">Service details not found</p>;
  }

  return (
    <section className="w-full min-h-screen bg-gray-100 py-10 px-5 lg:px-20">
      <button
        onClick={() => navigate('/')}
        className="bg-gray-200 text-blue-600 py-2 px-4 rounded-full shadow hover:bg-gray-300 mb-6 inline-block"
      >
        ← Back to Home
      </button>

      {/* Services List */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-gray-800 mb-4 text-center">All Services</h2>
        <ul className="flex flex-wrap gap-4 justify-center">
          {allServiceDetails.map((item) => (
            <li
              key={item.id}
              className='bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 lg:w-64 md:w-48 sm:w-40 w-40 ' // Apply styles when the service is selected
              onClick={() => setServiceId(item.id)}
            >
              <div
                className="truncate font-montserrat"
                title={item.serviceName} // This will show the full name in a tooltip
              >
                {item.serviceName}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Service Details */}
      <div className="max-w-7xl mx-auto mt-10 ">
        <h1 className="text-3xl sm:text-4xl font-inter font-bold text-gray-800 text-center mb-8 ">
          {service.serviceName}
        </h1>

        <p className="text-lg font-lato text-gray-600 mb-6 text-center">{service.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 ">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
            <h2 className="text-xl font-semibold font-poppins text-gray-800 mb-4">What’s Included:</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {service.services?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
            <h2 className="text-xl font-semibold font-poppins text-gray-800 mb-4">Pricing:</h2>
            <table className="table-auto w-full text-left border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border border-gray-300">Vehicle Type</th>
                  <th className="p-2 border border-gray-300">Price</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(service.price)?.map(([key, value], index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-2 border border-gray-300 capitalize">{key}</td>
                    <td className="p-2 border border-gray-300">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h2 className="text-xl font-semibold font-poppins text-gray-800 mb-4">Important Notes:</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {service.note?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
