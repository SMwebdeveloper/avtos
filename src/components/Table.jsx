import React from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import CategoryAdd from "./CategoryAdd";
import CarAdd from "./CarAdd";
const Table = () => {
  const [tableBody, setTableBody] = useState([
    {
      id: 1,
      markasi: "Chevrolet",
      year: 2016,
      gearbook: "Avtomat",
      tanirovka: "Yoq",
      motor: 1.6,
      color: "oq",
      distance: "300km",
      icon: <FaArrowAltCircleRight />,
    },
    {
      id: 2,
      markasi: "Chevrolet",
      year: 2016,
      gearbook: "Avtomat",
      tanirovka: "Yoq",
      motor: 1.6,
      color: "oq",
      distance: "300km",
      icon: <FaArrowAltCircleRight />,
    },
    {
      id: 3,
      markasi: "Chevrolet",
      year: 2016,
      gearbook: "Avtomat",
      tanirovka: "Yoq",
      motor: 1.6,
      color: "oq",
      distance: "300km",
      icon: <FaArrowAltCircleRight />,
    },
    {
      id: 4,
      markasi: "Chevrolet",
      year: 2016,
      gearbook: "Avtomat",
      tanirovka: "Yoq",
      motor: 1.6,
      color: "oq",
      distance: "300km",
      icon: <FaArrowAltCircleRight />,
    },
    {
      id: 5,
      markasi: "Chevrolet",
      year: 2016,
      gearbook: "Avtomat",
      tanirovka: "Yoq",
      motor: 1.6,
      color: "oq",
      distance: "300km",
      icon: <FaArrowAltCircleRight />,
    },
    {
      id: 6,
      markasi: "Chevrolet",
      year: 2016,
      gearbook: "Avtomat",
      tanirovka: "Yoq",
      motor: 1.6,
      color: "oq",
      distance: "300km",
      icon: <FaArrowAltCircleRight />,
    },
  ]);
  const [category, setCategory] = useState(false);
  const [car, setCar] = useState(false);

  const clickCategoryAdd = () => {
    setCategory(!category);
  };

  const clickCarAdd = () => {
    setCar(!car);
  };
  return (
    <>
      <div className=" bg-white w-[100%] rounded-2xl px-6 py-8">
        <div className="flex justify-between items-center mb-14">
          <h2 className="flex items-center text-xl font-semibold">
            <span className="w-[16px] h-[32px] bg-[#FFD88D] rounded mr-2"></span>
            Mashinalar
          </h2>

          <div className="flex items-center">
            <button
              className="px-[13px] text-[15px] font-bold text-white py-4 flex items-center rounded-xl bg-[#2A85FF] mr-3 border-solid border-2 border-[#2a85ff] duration-300 hover:bg-white hover:text-[#2a85ff]"
              onClick={clickCategoryAdd}
            >
              <FaTimes className="w-[16px] h-[16px] mr-2 rotate-45" />
              Kategoriya qoshish
            </button>
            <button
              className="px-[13px] text-[15px] font-bold text-white py-4 flex items-center rounded-xl bg-[#2A85FF] border-solid border-2 border-[#2a85ff] duration-300 hover:bg-white hover:text-[#2a85ff]"
              onClick={clickCarAdd}
            >
              <FaTimes className="w-[16px] h-[16px] mr-2 rotate-45" />
              Mashina qoshish
            </button>
          </div>
        </div>
        <table className="w-full border-b-[1px] text-[#efefefef] border-solid">
          <thead>
            <tr className="flex justify-between w-[90%] items-center pb-6">
              <thead className="text-[13px] font-semibold text-[#6F767E]">
                #
              </thead>
              <thead className="text-[13px] font-semibold text-[#6F767E]">
                Markasi
              </thead>
              <thead className="text-[13px] font-semibold text-[#6F767E]">
                Gearbook
              </thead>
              <thead className="text-[13px] font-semibold text-[#6F767E]">
                Tanirovkasi
              </thead>
              <thead className="text-[13px] font-semibold text-[#6F767E]">
                Year
              </thead>
              <thead className="text-[13px] font-semibold text-[#6F767E]">
                Motor
              </thead>
              <thead className="text-[13px] font-semibold text-[#6F767E]">
                Color
              </thead>
              <thead className="text-[13px] font-semibold text-[#6F767E]">
                Distance
              </thead>
            </tr>
          </thead>
          <tbody className="w-full">
            {tableBody.map((item) => {
              return (
                <tr
                  className="flex justify-between items-center pb-6 border-b-[1px] text-[#efefefef] border-solid mb-3"
                  key={item.id}
                >
                  <th className="text-[15px] font-semibold text-[#6F767E]">
                    {item.id}
                  </th>
                  <th className="text-[15px] font-bold text-black uppercase">
                    {item.markasi}
                  </th>
                  <th className="text-[15px] font-semibold text-black uppercase">
                    {item.gearbook}
                  </th>
                  <th className="text-[15px] font-semibold text-black uppercase">
                    {item.tanirovka}
                  </th>
                  <th className="text-[15px] font-semibold text-black uppercase">
                    {item.year}
                  </th>
                  <th className="text-[15px] font-semibold text-black uppercase">
                    {item.motor}
                  </th>
                  <th className="text-[15px] font-semibold text-black uppercase">
                    {item.color}
                  </th>
                  <th className="text-[15px] font-semibold text-black uppercase">
                    {item.distance}
                  </th>
                  <div className="text-[15px] font-semibold text-black uppercase">
                    {item.icon}
                  </div>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {category && (
        <CategoryAdd category={category} setCategory={setCategory} />
      )}
      {car && <CarAdd car={car} setCar={setCar} />}
    </>
  );
};

export default Table;
