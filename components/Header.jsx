import Link from "next/link";
import React from "react";
const Header = () => {
  const navItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Profile",
      path: "/profile"
    },
    {
      title: "Product",
      path: "/product"
    }
  ]
  return (
    <header>
      <nav>
        <Link href='/' className="logo"><img src="./logo.svg" alt="" /></Link>
        <ul>
          {
            navItems.map((item, i) => {
              const { path, title } = item;
              return (
                <li key={i}>
                  <Link href={path}>{title}</Link>
                </li>
              )
            })}
        </ul>

      </nav>
    </header>
  );
};

export default Header;
