import CircleBtn from '../common/CircleBtn';
import HeaderTop from './HeaderTop';
import Logo from './Logo';
import Humberger from './Humberger';
import NavbarMenu from './Navbar';

function HeaderBottom() {
  // 1: logo
  // 2: navbar_menu

  return (
    <div className="header_bottom_area">
      <div className="container md:px-12">
        <div className="px-4 lg:px-3">
          <div className="flex items-center">
            <div className="w-1/2 lg:w-1/4">
              <Logo />
            </div>
            <div className="hidden lg:block lg:w-3/4">
              <div className="flex items-center justify-end navigation_bar">
                <NavbarMenu />
                <div className="ml-4 buy_btn">
                  <CircleBtn text="buy now" link="#" />
                </div>
              </div>
            </div>

            {/* Humberger menu */}
            {/* <Humberger /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    //  Header
    //  1: header-top
    //  2: header-bottom
    <header className="main-header">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}
