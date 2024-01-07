import logo from '../../assets/images/icon/logo.png';

export default function Logo() {
  return (
    <div className="py-5 logo lg:py-0">
      <a href="#">
        <img src={logo} alt="company_logo" title="compnay logo" />
      </a>
    </div>
  );
}
