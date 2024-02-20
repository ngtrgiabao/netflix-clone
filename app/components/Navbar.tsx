"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/public";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

interface LinkProps {
  name: string;
  href: string;
}

const links: LinkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/shows" },
  { name: "Movies", href: "/movies" },
  { name: "Recently Added", href: "/recently" },
  { name: "My List", href: "/list" },
]

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 py-5 lg:px-8">
      <div className="flex items-center">
        <Link href="/" className="w-32">
          <Image
            src={Logo}
            alt="Logo"
            priority
          />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {
            links.map((link, idx) => (
              <li key={idx}>
                {
                  pathName === link.href ? (
                    <Link href={link.href} className="text-white font-semibold underline">
                      {link.name}
                    </Link>
                  ) : (
                    <Link href={link.href} className="text-gray-300 font-normal text-sm">
                      {link.name}
                    </Link>
                  )
                }
              </li>
            ))
          }
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  )
}