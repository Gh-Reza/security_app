function NavItemCreator(arrItems, isSub = false) {
  const ajaxNavItems = arrItems.map((nav, i) => {
    const checker = nav.sub_nav && nav.sub_nav.length >= 1;
    const liClass = checker ? 'has-dropdown relative' : '';
    const aText = isSub ? nav.label : nav.label.toUpperCase();
    const aClass = isSub ? 'text-white capitalize' : 'py-9 block text-s_gray';

    return (
      <li key={`item${i + 1}`} className={`${liClass}`}>
        <a className={`${aClass} font-semibold font-mont`} href={nav.src}>
          {aText}
        </a>
        {checker && (
          <div
            className="sub-menu absolute left-0 top-[100%]
                                      invisible opacity-0 mt-7
                                     "
          >
            <div className="bg-black border-b-[3px] border-b-brand_color">
              <ul className="w-[200px] p-4 space-y-2">
                {NavItemCreator(nav.sub_nav, true)}
              </ul>
            </div>
          </div>
        )}
      </li>
    );
  });
  return ajaxNavItems;
}

export default function NavbarMenu() {
  const navItems = [
    {
      label: 'HOME',
      sub_nav: [
        {
          label: 'Home One',
          sub_nav: [],
          src: '#',
        },
        {
          label: 'Boxed layoud Page',
          sub_nav: [],
          src: '#',
        },
      ],
      src: '#',
    },
    {
      label: 'ABOUT',
      src: '#',
    },
    {
      label: 'SERVICES',
      sub_nav: [
        {
          label: 'Service Page',
          sub_nav: [],
          src: '#',
        },
        {
          label: 'Service Details Page',
          sub_nav: [],
          src: '#',
        },
      ],
      src: '#',
    },
    {
      label: 'Gallery',
      src: '#',
    },
    {
      label: 'Team',
      src: '#',
    },
    {
      label: 'Blog',
      sub_nav: [
        {
          label: 'Blog Page',
          sub_nav: [],
          src: '#',
        },
        {
          label: 'Blog Details Page',
          sub_nav: [],
          src: '#',
        },
      ],
      src: '#',
    },
    {
      label: 'Contact',
      src: '#',
    },
  ];

  return (
    <nav className="main-menu">
      <ul className="flex space-x-8">{NavItemCreator(navItems)}</ul>
    </nav>
  );
}
