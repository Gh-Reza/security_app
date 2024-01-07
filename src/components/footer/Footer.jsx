import FtAboutUs from './FtAboutUs';
import FtContact from './FtContact';
import FtLinks from './FtLinks';
import Newsletter from './NewsLetter';
import CopyRight from './CopyRight';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="p_section bg-[#f4f4f4]">
        <div className="container px-12 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-3 ft_card sm:w-1/2 md:w-1/4">
              <FtAboutUs />
            </div>
            <div className="w-full px-3 ft_card sm:w-1/2 md:w-1/4">
              <FtContact />
            </div>
            <div className="w-full px-3 ft_card sm:w-1/2 md:w-1/4">
              <FtLinks />
            </div>
            <div className="w-full px-3 ft_card sm:w-1/2 md:w-1/4">
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
}
