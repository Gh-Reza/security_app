import { NavLink } from 'react-router-dom';

export default function SideNav() {
  const navItems = [
    {
      id: 1,
      title: 'Private Security',
      link: '',
    },
    {
      id: 2,
      title: 'Transport Security',
      link: 'transport-security',
    },
    {
      id: 3,
      title: 'Home Security',
      link: 'home-security',
    },
    {
      id: 4,
      title: 'Self Security',
      link: 'self-security',
    },
  ];

  return (
    <div className="container w-full md:w-1/3 md:px-6">
      <ul className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <li key={item.id} className="">
            <NavLink to={item.link} className="w-full p-6 text-center bg-gray-100 cursor-pointer">{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
