import React, { useEffect, useRef, useState } from 'react';
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

  const menuRef = useRef(null);
  const [menuTop, setMenuTop] = useState('-100%'); // default offscreen

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      setMenuTop('73px'); // visible
    } else if (menuRef.current) {
      const height = menuRef.current.offsetHeight;
      setMenuTop(`-${height}px`);
    }
  }, [menuOpen]);

  return (
    <>

      <div className="bg-primeryColor border-b border-lightColor px-6 relative z-50">
        <header>
          <nav className="max-w-[1500px] mx-auto flex items-center justify-between h-[72px]">
            <div>
              <NavLink to="/">
                <img src={'https://res.cloudinary.com/dwf7aydzq/image/upload/v1745757584/logo_jpcuty.svg'} alt="Logo" />
              </NavLink>
            </div>

            <div className="flex items-center gap-[30px]">
              <div className={`hidden lg:static lg:w-fit bg-bgLightColor lg:bg-transparent max-w-[400px] w-full right-0 lg:max-w-fit transition-all duration-500 ease-linear z-40 lg:block`}>
                <ul className="flex items-center lg:gap-[30px] text-lg font-satoshiLight lg:flex-row flex-col">
                  {navLinks.map(({ name, path }) => (
                    <li key={name} className=''>
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          `transition-all duration-200 ease-linear hover:text-btnColor font-satoshi font-medium py-2 lg:py-0 ${isActive ? 'text-btnColor' : 'text-darkTextColor'
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

              <div className={`h-9 w-9 bg-bgLightColor flex flex-col items-center justify-center gap-[5px] px-[5px] transition-all duration-200 ease-linear rounded-md cursor-pointer lg:hidden ${menuOpen ? 'bg-btnColor' : ''}`} onClick={toggleMenu}>
                <span className={`w-[80%] h-[2px] bg-darkTextColor transition-all duration-200 ease-linear block ${menuOpen ? 'w-full bg-primeryColor' : ''}`}></span>
                <span className={`w-[100%] h-[2px] bg-darkTextColor transition-all duration-200 ease-linear block ${menuOpen ? 'w-[80%] bg-primeryColor' : ''}`}></span>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div
      ref={menuRef}
      className={`fixed lg:hidden lg:w-fit bg-bgLightColor lg:bg-transparent max-w-[400px] w-full right-0 lg:max-w-fit transition-all duration-300 ease-linear z-40`}
      style={{ top: menuTop }}
    >
      <ul className="flex items-center lg:gap-[30px] text-lg font-satoshiLight lg:flex-row flex-col">
        {navLinks.map(({ name, path }) => (
          <li key={name} className='w-full lg:w-fit'>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `transition-all duration-200 ease-linear hover:text-btnColor border-b border-lightColor w-full text-center lg:border-none block font-satoshi font-medium py-2 lg:py-0 ${isActive ? 'text-btnColor' : 'text-darkTextColor'}`
              }
              onClick={closeMenu}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Nav;
