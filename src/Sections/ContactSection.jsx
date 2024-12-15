import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { contactDetails } from '../utils/util';

const borderColors = [
  'border-red-500',
  'border-orange-500',
  'border-yellow-500',
  'border-slate-500',
];
const ContactSection = () => {
  
  return (
    <section id='contact' className='section-top h-[100vh] flex lg:flex-row flex-col pb-20 pt-10 '>
      <div className='lg:w-[30%] w-full h-full pb-10 flex flex-col gap-8 justify-center'>
        <h2 className='page-title px-6 lg:text-left text-center'>
          Get in touch with <a href="/">Aussiz Ultimate Car Detailing</a>
        </h2>
        <p className='lg:w-[90%] w-full px-6 font-inter text-balance lg:text-left text-center'>
          Looking for <strong>affordable</strong> <strong>mobile car detailing</strong> in <strong>Canberra</strong>? Contact us for best services like <strong>Interior Car Detailing</strong>, 
          <strong>Full Car Detailing</strong>,<strong>Ultimate Car Detailing</strong>, <strong>Ceramic Coating</strong>, and more. We are here to give your car the care it deserves!
        </p>
      </div>

      <div className='lg:w-[70%] w-full h-full flex flex-wrap gap-8 lg:flex-row lg:justify-around items-center flex-col'>
        {contactDetails.map((item) => (
          <div key={item.id} className={`w-[85%] lg:w-[40%] h-[8rem] rounded-lg bg-white flex items-center justify-between px-6 py-4 card-hover border-l-4 ${borderColors[item.id % borderColors.length]}`}>
            <div>
              <h2 className='text-xl font-bold'>{item.name}</h2>
              <div className="flex items-center gap-2 pt-2">
                {item.name === "Phone" && (
                  <FaPhoneAlt className="text-2xl text-blue-600" />
                )}
                {item.name === "Email" && (
                  <FaEnvelope className="text-2xl text-blue-600" />
                )}
                {item.name === "Facebook" && (
                  <FaFacebook className="text-2xl text-blue-600" />
                )}
                {item.name === "Instagram" && (
                  <FaInstagram className="text-2xl text-blue-600" />
                )}
                {item.name === "Address" ? (
                  <p className='font-semibold text-blue-600'>{item.value}</p>
                ) : (
                  <a
                    href={item.name === "Phone" ? `tel:${item.value}` : item.name === "Email" ? `mailto:${item.value}` : item.value}
                    className='font-semibold text-blue-600 hover:underline ml-2'
                    target={item.name === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {item.name === "Phone" ? item.value : item.name === "Email" ? item.value : 'Visit'}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;


