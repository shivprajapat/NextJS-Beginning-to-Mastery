import Image from "next/image";
import Link from "next/link";
import React from "react";
const Header = () => {
  const navItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Posts",
      path: "/posts"
    },
    {
      title: "Products",
      path: "/products"
    },
    {
      title: "News",
      path: "/news"
    },
    {
      title: "Dashboard",
      path: "/dashboard"
    },
    {
      title: "SWR",
      path: "/dashboard-swr"
    },
    {
      title: "Events",
      path: "/events"
    }
  ]
  return (
    <header>
      <nav>
        <Link href='/' className="logo">
          <Image width={50} height={50} src="/logo.png" alt="" />
        </Link>
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
