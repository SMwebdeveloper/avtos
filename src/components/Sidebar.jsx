import React from "react";
import { Link } from "react-router-dom";
import {
  FaHouseUser,
  FaStore,
  FaQuestion,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[280px] h-[115vh] bg-white absolute top-0 left-0 flex flex-col justify-between items-start pl-5 pt-40 pb-5 pr-2">
      <ul className="flex flex-col">
        <li>
          <a
            className="flex items-center justify-between group text-[#6F767E] font-medium text-[15px] mb-9 cursor-pointer"
            href="#"
          >
            <FaHouseUser className="mr-[14px] w-[20px] h-[19px] group-hover:text-black duration-300" />
            Asosiy
          </a>
          <a
            className="flex items-center justify-between text-[#6F767E] font-medium text-[15px] mb-9 cursor-pointer group"
            href="#"
          >
            <FaStore className="mr-[14px] w-[20px] h-[19px] group-hover:text-black duration-300" />
            Elonlar
          </a>
          <a
            className="flex items-center justify-between text-[#6F767E] font-medium text-[15px] mb-9 cursor-pointer group"
            href="#"
          >
            <FaQuestion className="mr-[14px] w-[20px] h-[19px] group-hover:text-black duration-300" />
            Savollar
          </a>
        </li>
      </ul>

      <div className="bg-[#f4f4f4] w-[100%] rounded-3xl p-[4px] text-[#6F767E] ">
        <button className="w-1/2 bg-white rounded-2xl text-black py-2 text-center">
          <FaSun  className="mx-auto w-[21px] h-[21px]"/>
        </button>
        <button className="w-1/2">
          <FaMoon className="mx-auto w-[21px] h-[21px]"/>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
