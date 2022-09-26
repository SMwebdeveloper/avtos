import React from "react";
import { FaTimes, FaCamera } from "react-icons/fa";

const CarAdd = ({ car, setCar }) => {
  const clickCarRemove = () => {
    setCar(!car);
  };
  return (
    <div className="absolute top-0 left-0 w-full h-[150vh] bg-[rgba(255,255,255,0.6)] flex items-center justify-center">
      <div className="bg-white w-[80%] rounded-2xl px-6 py-8 shadow-2xl">
        <div className="flex items-center justify-between mb-9">
          <h2 className="flex items-center text-xl font-semibold">
            <span className="w-[16px] h-[32px] bg-[#CABDFF] rounded mr-2"></span>
            Mashinalar
          </h2>
          <button
            className="bg-[#efefef] p-2 rounded-full"
            onClick={clickCarRemove}
          >
            <FaTimes width="11px" height="11px" />
          </button>
        </div>
        <form className="flex items-start justify-between gap-3 border-b-2 border-solid border-[#efefef] pb-2">
          <div className="w-1/2 flex flex-col items-start">
            <label className="flex flex-col text-sm font-semibold mb-6 w-full">
              Markasi
              <input
                type="text"
                className="bg-[#efefef] mt-[6px] rounded-2xl outline-none border-none p-3"
                placeholder="Kiriting"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold mb-6 w-full">
              Motor
              <input
                type="text"
                className="bg-[#efefef] mt-[6px] rounded-2xl outline-none border-none p-3"
                placeholder="Kiriting"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold mb-6 w-full">
              Color
              <input
                type="text"
                className="bg-[#efefef] mt-[6px] rounded-2xl outline-none border-none p-3"
                placeholder="Kiriting"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold mb-6 w-full">
              Gearbook
              <input
                type="text"
                className="bg-[#efefef] mt-[6px] rounded-2xl outline-none border-none p-3"
                placeholder="Kiriting"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold mb-6 w-full">
              Rasm 360 ichki makon
              <div className="flex items-center bg-[#efefef] mt-[6px] rounded-2xl p-3">
                <FaCamera className="mr-2" />
                <input
                  type="text"
                  placeholder="Yuklash"
                  className="outline-none border-none bg-inherit"
                />
              </div>
            </label>
            <label className="flex flex-col text-sm font-semibold mb-6 w-full">
              Description
              <textarea
                rows="7"
                placeholder="Mazmunni kiriting"
                className="bg-[#efefef] mt-[6px] rounded-2xl outline-none border-none p-3"
              ></textarea>
            </label>
          </div>
          <div className="w-1/2 flex flex-col items-start">
            <label className="flex flex-col text-sm font-semibold mb-6 w-full">
              Tonirovkasi
              <input
                type="text"
                className="bg-[#efefef] mt-[6px] rounded-2xl outline-none border-none p-3"
                placeholder="Yoq"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold mb-6 w-full">
              Year
              <input
                type="text"
                className="bg-[#efefef] mt-[6px] rounded-2xl outline-none border-none p-3"
                placeholder="Kiriting"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold mb-6 w-full">
              Distance
              <input
                type="text"
                className="bg-[#efefef] mt-[6px] rounded-2xl outline-none border-none p-3"
                placeholder="Kiriting"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold mb-6 w-full">
              Narxi
              <input
                type="text"
                className="bg-[#efefef] mt-[6px] rounded-2xl outline-none border-none p-3"
                placeholder="Kiriting"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold mb-6 w-full">
              Rasm 360 ichki makon
              <div className="flex items-center bg-[#efefef] mt-[6px] rounded-2xl p-3">
                <FaCamera className="mr-2" />
                <input
                  type="text"
                  placeholder="Yuklash"
                  className="outline-none border-none bg-inherit"
                />
              </div>
            </label>
            <label className="flex flex-col text-sm font-semibold mb-6 w-full">
              Model turi uchun rasmi
              <div className="flex items-center bg-[#efefef] mt-[6px] rounded-2xl p-3">
                <FaCamera className="mr-2" />
                <input
                  type="text"
                  placeholder="Yuklash"
                  className="outline-none border-none bg-inherit"
                />
              </div>
            </label>
          </div>
        </form>
        <button className=" text-[15px] font-bold text-white py-4 px-5 flex place-items-end rounded-xl mx-auto bg-[#2A85FF] text-right border-solid border-2 border-[#2a85ff] duration-300 hover:bg-white hover:text-[#2a85ff] mt-5 ">
          Saqlash
        </button>
      </div>
    </div>
  );
};

export default CarAdd;
