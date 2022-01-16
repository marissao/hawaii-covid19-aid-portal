import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>Hawaii COVID-19 Portal</h1>
      </div>
      <Link href='/register'>
        <a>Register</a>
      </Link>
      <Link href='/contact-us'>
        <a>Contact Us</a>
      </Link>
    </nav>
  );
};

export default NavBar;
