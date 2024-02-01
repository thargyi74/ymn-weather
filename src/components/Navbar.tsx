import React from "react";
import { MdOutlineLocationOn, MdWbSunny } from "react-icons/md";
import { MdOutlineMyLocation } from "react-icons/md";
import SearchBox from "./SearchBox";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-blue-500">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-3xl text-white">DVB Weather Forecast</h2>
          <MdWbSunny className="text-4xl text-yellow-300 mt-1" />
        </div>
        <section className="flex items-center gap-2">
          <MdOutlineMyLocation className="text-2xl text-gray-300 hover:text-yellow-400 cursor-pointer" />
          <MdOutlineLocationOn className="text-3xl" />
          <p className="text-slate-900/80 text-sm ">Yangon</p>
          <div className="relative hidden md:flex">
            <SearchBox />
          </div>
        </section>
      </div>
    </nav>
  );
}
