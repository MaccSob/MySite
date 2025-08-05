'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import '../ui/navbar.css'
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>
 
      <Link
        className={`link ${pathname === '/about' ? 'active' : ''}`}
        href="/about"
      >
        About
      </Link>

      <Link
        className={`link ${pathname === '/contact' ? 'active' : ''}`}
        href="/contact"
      >
        Contact
      </Link>
    </nav>
  )
}