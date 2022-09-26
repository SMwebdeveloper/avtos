import React from "react";
import { FaTimes, FaCamera } from "react-icons/fa";

const CategoryAdd = ({category, setCategory}) => {
  const clickCategoryRemove = () => {
    setCategory(!category)
  }
  return (
    <div className="absolute top-0 left-0 w-full h-[115vh] bg-[rgba(255,255,255,0.6)] flex items-center justify-center">
      <div className="bg-white w-[80%] rounded-2xl px-6 py-8 shadow-lg">
        <div className="flex items-center justify-between mb-9">
          <h2 className="flex items-center text-xl font-semibold">
            <span className="w-[16px] h-[32px] bg-[#CABDFF] rounded mr-2"></span>
            Kategoriyalar
          </h2>
          <button className="bg-[#efefef] p-2 rounded-full" onClick={clickCategoryRemove}>
            <FaTimes width='11px' height='11px'/>
          </button>
        </div>
        <form className="flex items-center justify-between pb-4 border-b-2 border-solid border-[#efefef] gap-3">
          <label className=" w-1/2 flex flex-col text-sm font-semibold">
            Markasi
            <input type="text"  className="bg-[#efefef] mt-[6px] rounded-2xl outline-none border-none p-3" placeholder="Markani kiriting"/>
          </label>
          <label className=" w-1/2 flex flex-col text-sm font-semibold">
            Rasm 360 ichki makon
            <div className="flex items-center bg-[#efefef] mt-[6px] rounded-2xl p-3">
              <FaCamera className="mr-2"/>
              <input type="text" placeholder="Yuklash" className="outline-none border-none bg-inherit" />
            </div>
          </label>
        </form>
        <button className=" text-[15px] font-bold text-white py-4 px-5 flex place-items-end rounded-xl bg-[#2A85FF] text-right border-solid border-2 border-[#2a85ff] duration-300 hover:bg-white hover:text-[#2a85ff] mt-5 ">
          Saqlash
        </button>
      </div>
    </div>
  );
};

export default CategoryAdd;
