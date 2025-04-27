import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About me', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="bg-primeryColor border-b border-lightColor px-6 relative z-50">
      <header>
        <nav className="max-w-[1500px] mx-auto flex items-center justify-between h-[72px]">
          <div>
            <NavLink to="/">
              <img src={'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757584/logo_jpcuty.svg'} alt="Logo" />
            </NavLink>
          </div>

          <div className="flex items-center gap-[30px]">
            <div className={`fixed lg:static lg:w-fit bg-bgLightColor lg:bg-transparent max-w-[400px] w-full right-0 lg:max-w-fit transition-all duration-500 ease-linear z-40 ${menuOpen ? 'top-[73px]' : 'top-[-100%]'}`}>
              <ul className="flex items-center lg:gap-[30px] text-lg font-satoshiLight lg:flex-row flex-col">
                {navLinks.map(({ name, path }) => (
                  <li key={name}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `transition-all duration-200 ease-linear hover:text-btnColor font-satoshi font-medium ${isActive ? 'text-btnColor' : 'text-darkTextColor'
                        }`
                      }
                      onClick={closeMenu}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-lg font-satoshiLight hidden sm:block">
              <NavLink
                to="/buy"
                className="font-satoshi font-medium py-[9px] px-[22px] rounded-md bg-LightBtnColor text-btnColor transition-all duration-200 ease-linear hover:bg-btnColor hover:text-primeryColor"
              >
                Buy template
              </NavLink>
            </div>

            <div className="h-9 w-9 bg-bgLightColor flex flex-col items-center justify-center gap-[5px] px-[5px] transition-all duration-200 ease-linear rounded-md cursor-pointer lg:hidden" onClick={toggleMenu}>
              <span className="w-[80%] h-[2px] bg-darkTextColor transition-all duration-200 ease-linear block"></span>
              <span className="w-[100%] h-[2px] bg-darkTextColor transition-all duration-200 ease-linear block"></span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
