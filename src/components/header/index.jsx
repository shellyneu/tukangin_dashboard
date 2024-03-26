"use client";
import React from "react";
import Image from "next/image";
import { ImgDropdown, ImgLogo } from "../../../public/images";

const Header = () => {
  return (
    <header className="bg-WHITE p-4 text-BLACK w-full flex justify-between items-center">
      <div className="flex items-center">
        <div className="flex items-center">
          <Image src={ImgLogo} alt="" className="w-10 h-10" />
          <p className="ml-2 font-semibold text-2xl text-PRIMARY">TukangIn</p>
        </div>
      </div>
      <div className="flex items-center">
        <h2 className="font-semibold text-lg mr-4">Admin TukangIn</h2>
        <Image src={ImgDropdown} alt="" className="h-5 w-5" />
      </div>
    </header>
  );
};

export default Header;
