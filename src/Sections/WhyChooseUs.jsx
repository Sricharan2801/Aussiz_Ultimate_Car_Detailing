import React from 'react';
import { whyChooseUs } from '../utils/util';

const borderColors = [
  'border-blue-500',
  'border-orange-500',
  'border-red-500',
  'border-yellow-500',
  'border-slate-500',
  'border-indigo-500',
];

const WhyChooseUs = () => {
  return (
    <section className="section-top py-10 ">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="page-title text-center mb-10">Why Aussiz Ultimate Car Detailing?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white shadow-lg rounded-lg p-6 card-hover border-l-4 ${borderColors[item.id % borderColors.length]}`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
