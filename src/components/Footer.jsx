import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import BrandLogo from '/BrandLogo.png';
import { navItems } from '../utils/util';

const Footer = () => {
  const handleContactMethod = (input) => {
    switch (input) {
      case 'phone':
        window.open("tel:0452 300 144");
        break;
      case 'email':
        window.open("mailto:info@aussizultimatecardetailing.com");
        break;
      case 'whatsapp':
        window.open("https://wa.me/61452300144");
        break;
      case 'facebook':
        window.open("https://www.facebook.com/profile.php?id=61568546711152");
        break;
      case 'insta':
        window.open("https://www.instagram.com/aussiz_ultimate_car_detailing/");
        break;
      case 'youtube':
        window.open("https://www.youtube.com/@AussizUltimateDetailing");
        break;
      default:
        break;
    }
  }
  return (
    <footer className="relative lg:top-[20vh] top-[10vh] bg-gray-900 text-gray-200 py-8">
      <div className='w-full flex flex-wrap justify-between px-8 gap-5'>

        <div className='flex lg:flex-col md:flex-col flex-row gap-2'>
          <img src={BrandLogo} alt="Aussiz Ultimate Car Detailing Logo"
            className='lg:w-24 md:w-24 w-12' />
          <p className='text-sm'>Copyright 2024. Aussiz Ultimate Car Detailing. <br /> All Rights Reserved.</p>
        </div>

        <div className='flex flex-col gap-4 '>
          <h3 className='font-semibold'>Quick Links</h3>
          <ul className='flex flex-col gap-4'>
            {
              navItems.map(item => (
                <li className='text-sm' key={item.id}>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='font-semibold'>Follow Us</h3>
          <ul className='flex flex-col gap-6 cursor-pointer'>
            <li className='flex items-center gap-2 text-sm' onClick={() => handleContactMethod('facebook')}>
              <FaFacebook size={22} />
            </li>
            <li className='flex items-center gap-2 text-sm' onClick={() => handleContactMethod('insta')}>
              <FaInstagram size={22} />
            </li>
            <li className='flex items-center gap-2 text-sm' onClick={() => handleContactMethod('youtube')}>
              <FaYoutube size={22} />
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='font-semibold'>Contact Us</h3>
          <ul className='flex flex-col gap-6 cursor-pointer'>
            <li className='flex items-center gap-2 text-sm' onClick={() => handleContactMethod('phone')}>
              <FaPhone size={22} />
              <span>0452 300 144</span>
            </li>
            <li className='flex items-center gap-2 text-sm' onClick={() => handleContactMethod('email')}>
              <FaEnvelope size={22} />
              <span>info@aussizultimatecardetailing.com</span>
            </li>
            <li className='flex items-center gap-2 text-sm' onClick={() => handleContactMethod('whatsapp')}>
              <FaWhatsapp size={22} />
              <span>Chat with us</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-xs md:text-sm">
          Designed and Developed by <a href="https://sri-portfolio.vercel.app/">Sri Charan Das</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
