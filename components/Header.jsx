import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 max-w-7xl mx-auto ">
      <div className="flex items-center space-x-5">
        <Link className="" href={"/"}>
          <span className="text-3xl font-bold cursor-pointer">Medium</span>
        </Link>
        <ul className="hidden md:inline-flex gap-5 items-center">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="text-white bg-green-600 px-4 py-1 rounded-full cursor-pointer">
            Follow
          </li>
        </ul>
      </div>

      <ul className="flex gap-5 items-center text-green-600">
        <li className="cursor-pointer">Sign in</li>
        <li className="border border-green-600 px-4 py-1 rounded-full cursor-pointer">
          Get Started
        </li>
      </ul>
    </header>
  );
};

export default Header;
