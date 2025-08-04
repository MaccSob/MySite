import React from "react";
import Link from "next/link";
const Navbar = () => {


  return (
     <div className='hidden md:flex'>
      <Link href='/'>
      </Link>
      <nav className='flex items-center gap-3 lg:gap-4 ml-8 '>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
     </div>
  )
};

export default Navbar;