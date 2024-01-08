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
function HumbergerMenu({ onClose }) {
  return (
    <div className="fixed top-0 left-0 clickable-mainmenu">
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
          <li>
            <a href="index.html">HOME</a>
            <ul>
              <li>
                <a href="index.html">Home one</a>
              </li>
              <li>
                <a href="boxed-layout.html">Boxed Layout Page</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="about.html">ABOUT</a>
          </li>
          <li>
            <a href="service.html">SERVICES</a>
            <ul>
              <li>
                <a href="service.html">Service Page</a>
              </li>
              <li>
                <a href="service-details.html">Service Details Page</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="gallery.html">GALLERY</a>
          </li>
          <li>
            <a href="team.html">TEAM</a>
          </li>
          <li>
            {/* FIXME:  */}
            <a href="https//...">BLOG</a>
            <ul>
              <li>
                <a href="blog.html">Blog page</a>
              </li>
              <li>
                <a href="blog-details.html">Blog Details Page</a>
              </li>
            </ul>
          </li>
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
      {isOpen && <HumbergerMenu onClose={handleMenuClose} />}
    </>
  );
}

HumbergerBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

HumbergerMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
