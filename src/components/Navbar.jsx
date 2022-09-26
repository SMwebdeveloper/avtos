import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import img from "../assets/Avatar.png";

const Navbar = () => {
  const pathName = useLocation().pathname;
  return (
    <div className="container mx-auto px-5">
      <div className="flex justify-end items-end w-full py-5">
        {pathName === "/admin" ? (
          <div className="flex justify-between items-center w-[75%]">
            <Link
              to="/"
              className="flex items-center px-8 py-3 text-[15px] font-bold text-white bg-[#2A85FF] rounded-xl border-[2px] border-solid border-[#2085ff] duration-300 hover:bg-white hover:text-[#2a85ff] hover:shadow-md"
            >
              <AiOutlineUser className="mr-[10px] w-[19px] h-[20px]" />
              Asosiyga o'tish
            </Link>

            <div className="flex items-center justify-between">
              <FaBell className="mr-5" />
              <img src={img} alt="" className="rounded-full" />
            </div>
          </div>
        ) : (
          <Link
            to="/admin"
            className="flex items-center px-8 py-3 text-[15px] font-bold text-white bg-[#2A85FF] rounded-xl border-[2px] border-solid border-[#2085ff] duration-300 hover:bg-white hover:text-[#2a85ff] hover:shadow-md"
          >
            <AiOutlineUser className="mr-[10px] w-[19px] h-[20px]" />
            Adminga otish
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
