import FtTitle from './FtCardTitle';

export default function FtContact() {
  const addr = ['P : 99 55 66 88 526', 'F : 55 44 77 62'];
  // FIXME: Proper value for key
  const addrAjax = addr.map((addr, i) => <p key={addr[i]}>{addr}</p>);

  return (
    <div className="text-left ft_wrapper">
      <FtTitle normal="contact" highlight="us" />
      <div className="content mt-[30px] text-[14px] leading-[25px]">
        <p>
          ur address goes here,
          <br />
          stree Crossroad123.
        </p>
        <div className="contact_details mt-[15px] space-y-1">
          {addrAjax}
          <p>
            {' '}
            E :
            {' '}
            <a
              // FIXME: href is not a valid link
              href="https://..."
              className="inline transition-all duration-300 hover:text-brand_color"
            >
              @gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
