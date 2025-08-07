'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import '../ui/navbar.css'
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav>
            <div className='hover-underline-animation'>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link> 
</div>

 <div className='hover-underline-animation'>
      <Link
        className={`link ${pathname === '/about' ? 'active' : ''}`}
        href="/about"
      >
        About
      </Link>
      </div>

<div className='hover-underline-animation'>
      <Link
        className={`link ${pathname === '/contact' ? 'active' : ''}`}
        href="/contact"
      >
        Contact
      </Link>
      </div>
      
    </nav>
  )
}