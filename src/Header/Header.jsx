import './Header.css';
import Logo from '../assets/images/logo/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { name: 'Home', link: '/', submenu: [] },
    { name: 'About', link: '/about', submenu: [] },
    { name: 'Services', link: '/service', submenu: [] },
    { name: 'Contact', link: '/contact', submenu: [] },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='header flex justify-between items-center bg-blue-900 px-10 custom-bg pt-8'>
      <Link to='/' className='header-logo cursor-pointer'>
        <img src={Logo} alt='logo' />
      </Link>
      <button
        className='hamburger md:hidden'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <span className='hamburger-icon text-3xl text-white'>
            <IoCloseOutline color='white' />
          </span>
        ) : (
          <span className='hamburger-icon text-3xl text-white'>
            <RxHamburgerMenu color='white' />
          </span>
        )}
      </button>
      <nav className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
        <ul className='menu flex justify-between items-center gap-16'>
          {menu.map((menuItem, index) => (
            <li key={index} className='menu-item relative group py-5'>
              <Link
                to={menuItem.link || '#'}
                className='block'
                onClick={handleLinkClick}
              >
                {menuItem.name}
              </Link>
              {menuItem.submenu.length > 0 && (
                <ul className='sub-menu absolute left-0 hidden group-hover:block'>
                  {menuItem.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.link}
                        className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
                        onClick={handleLinkClick}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <div className='header-btn'>
            <Link to='/contact' className='rn-btn' onClick={handleLinkClick}>
              <span>buy now</span>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
