import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

// the button
function HumbergerBtn({ onClick }) {
  return (
    <div className="block w-1/2 lg:hidden clickable-menu clickable-mainmenu-active ">
      <button
        aria-label="button"
        type="button"
        className="float-right text-2xl text-[#333]"
        onClick={onClick}
      >
        <BiMenu />
      </button>
    </div>
  );
}

// the menu
function HumbergerMenu({ onClose, isOpen }) {
  const menuItems = [
    {
      id: 1,
      title: 'Home',
      url: '/',
      submenu: [
        {
          title: 'Home one',
          url: '/',
        },
        {
          title: 'Boxed Layout Page',
          url: '/boxed-layout',
        },
      ],
    },
    {
      id: 2,
      title: 'About',
      url: '/about',
    },
    {
      id: 3,
      title: 'Services',
      url: '/services',
      submenu: [
        {
          title: 'Service Page',
          url: '/services',
        },
        {
          title: 'Service Details Page',
          url: '/service-details',
        },
      ],
    },
    {
      id: 4,
      title: 'Gallery',
      url: '/gallery',
    },
    {
      id: 5,
      title: 'Team',
      url: '/team',
    },
    {
      id: 6,
      title: 'Blog',
      url: '/blog',
      submenu: [
        {
          title: 'Blog page',
          url: '/blog',
        },
        {
          title: 'Blog Details Page',
          url: '/blog-details',
        },
      ],
    },
  ];

  const [items, setItems] = useState(menuItems);

  const handleSubMenu = (e, id) => {
    e.preventDefault();
    const newItem = menuItems.find((item) => item.id === id);
    if (newItem.submenu) {
      setItems(newItem.submenu);
    }
    // FIXME: should be handled by react-router-dom
    // else {
    //   window.location.href = newItem.url;
    // }
  };

  return (
    <div className={`fixed top-0 overflow-hidden transition-transform duration-500 bg-white z-10 left-0 clickable-mainmenu transform ${!isOpen ? '-translate-x-full' : 'translate-x-0'}`}>
      <div className="clickable-mainmenu-icon">
        <button
          aria-label="button"
          type="button"
          className="clickable-mainmenu-close"
          onClick={onClose}
        >
          <MdClose />
        </button>
      </div>

      <div id="menu" className="text-start clickable-menu-style">
        <ul className="">
          {items.map((item) => (
            <li key={item.id}>
              <a onClick={(e) => handleSubMenu(e, item.id)} href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mobile-more-info">
        <p>Have any question ? +215 2145 2154</p>
        <ul className="socail-top">
          <li>
            <a aria-label="social" href="https/..">
              {/* FIXME: empty elements must be self contained. AND fix the followings aswell */}
              <i className="zmdi zmdi-facebook" />
            </a>
          </li>
          <li>
            <a aria-label="social" href="https/">
              <i className="zmdi zmdi-twitter" />
            </a>
          </li>
          <li>
            <a aria-label="social" href="https">
              <i className="zmdi zmdi-vimeo" />
            </a>
          </li>
          <li>
            <a aria-label="social" href="https">
              <i className="zmdi zmdi-linkedin" />
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center header-btn">
        <a
          className="btn-circle btn-transparent btn"
          href="https://1.envato.market/62543"
        >
          Buy now
        </a>
      </div>
    </div>
  );
}

export default function Humberger() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HumbergerBtn onClick={handleMenuOpen} />
      <HumbergerMenu isOpen={isOpen} onClose={handleMenuClose} />
    </>
  );
}

HumbergerBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

HumbergerMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
