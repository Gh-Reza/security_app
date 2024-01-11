import { NavLink } from 'react-router-dom';

export default function SideNav() {
  const navItems = [
    {
      id: 1,
      title: 'Private Security',
      link: '/services-details/',
    },
    {
      id: 2,
      title: 'Transport Security',
      link: '/services-details/transport-security',
    },
    {
      id: 3,
      title: 'Home Security',
      link: '/services-details/home-security',
    },
    {
      id: 4,
      title: 'Self Security',
      link: '/services-details/self-security',
    },
  ];

  return (
    <div className="container py-24 md:px-12">
      <ul className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <li key={item.id} className="">
            <NavLink to={item.link} className="w-full p-6 text-center bg-gray-100 cursor-pointer" activeClassName="text-blue-500">{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
