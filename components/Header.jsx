import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const navItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    }
  ]
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link href='/' className="logo">
          <Image width={50} height={50} src="/logo.png" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {
              navItems.map((item, index) => {
                const { path, title } = item;
                return (
                  <li className="nav-item" key={index}>
                    <Link className='nav-link' href={path}>{title}</Link>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header