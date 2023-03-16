import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <ul>
            <li>
                <Link href='/'>Home</Link>
                <Link href='/pets'>Pets</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header