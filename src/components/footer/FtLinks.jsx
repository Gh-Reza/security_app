import FtTitle from './FtCardTitle';

export default function FtLinks() {
  const links = [
    { name: 'our services', href: '#' },
    { name: 'our company', href: '#' },
    { name: 'vision & mission', href: '#' },
    { name: 'our product', href: '#' },
    { name: 'our fajlami', href: '#' },
  ];

  const linkAjax = links.map((l) => (
    <li key={l.name}>
      <a
        href={l.href}
        className="transition-all duration-300 hover:text-brand_color"
      >
        {l.name}
      </a>
    </li>
  ));
  return (
    <div className="text-left ft_wrapper">
      <FtTitle normal="quick" highlight="links" />
      <div className="content mt-[30px] text-[13px] leading-4">
        <ul className="ft_menu space-y-[15px] capitalize">{linkAjax}</ul>
      </div>
    </div>
  );
}
