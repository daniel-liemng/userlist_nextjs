import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Link href='/'>
          <a>
            <Image src='/logo.png' width={80} height={50} />
          </a>
        </Link>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/users'>
        <a>User Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
