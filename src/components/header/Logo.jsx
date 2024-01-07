import logo from '../../assets/images/icon/logo.png';

export default function Logo() {
  return (
    <div className="py-5 logo lg:py-0">
      {/* FIXME: Put a valid href value */}
      <a href="localhost//">
        <img src={logo} alt="company_logo" title="compnay logo" />
      </a>
    </div>
  );
}
