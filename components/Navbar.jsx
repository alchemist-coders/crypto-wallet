import React from "react";
import Link from "next/link";

import logo from "../assets/logo-white.svg";

const Navbar = () => {
  return (
    <nav className="h-16 w-full px-8 bg-red-500 text-white flex justify-between items-center fixed">
      <Link href="/">
        <a className="flex justify-around items-center gap-2">
          <img className="h-8" src={logo.src} alt="" />
          <h4 className="text-2xl font-semibold">Cryplet</h4>
        </a>
      </Link>
      <ul className="flex justify-around items-center gap-4">
        <li>
          <Link href="/about">
            <a className="border-2 border-transparent hover:border-white px-4 py-1 rounded-3xl transition">
              About Us
            </a>
          </Link>
        </li>
        <li>
          <button className="bg-red-900 hover:bg-red-700 active:bg-red-900 px-4 py-1 rounded-3xl transition">
            Connect Wallet
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
