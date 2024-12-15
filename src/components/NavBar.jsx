import React, { useEffect, useState } from 'react';
import Logo from '/BrandLogo.png';
import { navItems } from '../utils/util';
import { FaBars, FaTimes } from 'react-icons/fa';


const NavBar = () => {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNavItems = () => setShowNavItems((prev) => !prev);


  // Preload the logo for smoother rendering
  useEffect(() => {
    const img = new Image();
    img.src = Logo;
  }, []);

  return (
    <header className="absolute top-0 z-40 w-full lg:h-[20vh] h-[10vh] bg-gray-50 flex justify-between items-center px-4 lg:px-10  ">
      <img src={Logo} alt="Brand Logo" className="lg:w-[6.25rem] md:w-[6.25rem] w-[5.5rem] lg:h-[6.25rem] md:h-[6.25rem] h-[5.5rem] rounded-xl" />

      {/* Desktop Navigation */}
      <nav className="hidden w-auto lg:flex gap-10 justify-center items-center text-lg font-lato ">
        {
          navItems.map(item => (
            <a key={item.id} href={item.path} className='nav-link'>{item.name}</a>
          ))
        }
      </nav>

      {/* Mobile Menu Icon */}
      <button
        aria-label="Toggle navigation"
        onClick={toggleNavItems}
        className="lg:hidden text-xl cursor-pointer"
      >
        {!showNavItems && <FaBars className='text-2xl cursor-pointer' />}
      </button>

      {/* Mobile Navigation */}
      {showNavItems && (
        <div className='absolute lg:hidden top-0 right-0 w-full h-[100vh] flex flex-col gap-5 z-50 bg-white slide-animation-right'>
          <button onClick={toggleNavItems} className='px-5 py-5'>
            <FaTimes className='text-2xl cursor-pointer text-red-500' />
          </button>
          <nav className=" flex flex-col gap-12 px-10 text-lg ">
            {
              navItems.map(item => (
                <a key={item.id} href={item.path} className='nav-link'>{item.name}</a>
              ))
            }
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
