import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaPinterest,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function SocialMedia() {
  const socialMedia = [
    {
      id: 1,
      title: 'Facebook',
      link: '#',
      icon: <FaFacebookF className="inline-block" />,
    },
    {
      id: 2,
      title: 'Twitter',
      link: '#',
      icon: <FaTwitter className="inline-block" />,
    },
    {
      id: 3,
      title: 'G+',
      link: '#',
      icon: <FaGooglePlusG className="inline-block" />,
    },
    {
      id: 4,
      title: 'Pinterest',
      link: '#',
      icon: <FaPinterest className="inline-block" />,
    },
    {
      id: 5,
      title: 'LinkedIn',
      link: '#',
      icon: <FaLinkedinIn className="inline-block" />,
    },
  ];

  const socialMediaAjax = socialMedia.map((m) => (
    <a
      key={m.id}
      className="inline-block cursor-pointer w-[25px] h-[25px] text-center hover:bg-brand_color hover:text-white transition-all duration-300"
      title={m.title}
      href={m.link}
    >
      {m.icon}
    </a>
  ));

  return (
    <div className="socialMedia_container">
      <div className="socialMedia_colletion text-left space-x-1 text-[13px] font-light">
        {socialMediaAjax}
      </div>
    </div>
  );
}
