import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';

export default function HeaderTop() {
  // 1: phone Number
  // 2: social media links
  const phone = '+215 2145 2154';
  const socialMedia = [
    {
      icon: <FaFacebookF className="inline-block hover:scale-125" />,
      link: 'https://www.facebook.com',
    },
    {
      icon: <FaLinkedinIn className="inline-block hover:scale-125" />,
      link: '#',
    },
    { icon: <SiTwitter className="inline-block hover:scale-125" />, link: '#' },
  ];

  // Create ajax for the icons
  const socialNavItems = socialMedia.map((media, i) => (
    <li key={`icon${i + 1}`} className="">
      <a
        href={media.link}
        target="_blank"
        rel="noreferrer"
        className="text-[16px]"
      >
        {media.icon}
      </a>
    </li>
  ));

  return (
    <div className="hidden header-top bg-s_gray lg:block">
      <div className="container md:px-12">
        <div className="py-[12px] px-3">
          <div className="grid grid-cols-2 text-white">
            <div className="left">
              <p>
                Have any question ?
                {phone}
              </p>
            </div>
            <div className="left">
              <ul className="socail-top flex items-center justify-end space-x-[25px]">
                {socialNavItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
