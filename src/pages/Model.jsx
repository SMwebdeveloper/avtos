import React from "react";
import img1 from "../assets/malibu-1.png";
import img2 from "../assets/malibu-2.png";
import img3 from "../assets/malibu-3.png";
import large from '../assets/large.png'
import home from '../assets/home.png'
import img from '../assets/360.png'

const Model = () => {
  return (
    <div className="bg-white pb-4">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-semibold mb-16">Modellri</h2>

        <div className="flex items-center justify-between w-full">
          <div className="bg-[#f6f6f6] px-6 py-4 rounded-lg">
            <div className="text-left">
              <h5 className="font-medium text-2xl pb-2">Malibu</h5>
              <p className="mb-4">500 000 000</p>
              <img src={img1} alt="" className="w-[348px] h-[160px]" />
            </div>
            <ul className="p-0 text-left border-b-[1px] border-solid border-gray-500 mb-1">
              <li className="text-gray-500 mb-1">
                <span className="font-semibold text-black">Marka:</span>
                Chevrolet
              </li>
              <li className="text-gray-500 mb-1">
                <span className="font-semibold text-black">Tonirovka:</span>
                Yo'q
              </li>
              <li className="text-gray-500 mb-1">
                <span className="font-semibold text-black">Motor:</span> 1.6
              </li>
              <li className="text-gray-500 mb-1">
                <span className="font-semibold text-black">Year:</span> 2016
              </li>
              <li className="text-gray-500 mb-1">
                <span className="font-semibold text-black">Color:</span> Oq
              </li>
              <li className="text-gray-500 mb-1">
                <span className="font-semibold text-black">Distance:</span> 3000
                km
              </li>
              <li className="text-gray-500 mb-1">
                <span className="font-semibold text-black">Gearbook:</span>
                Avtomat karobka
              </li>
              <li className="text-gray-500 mb-1 w-[331px]">
                <span className="font-semibold text-black">Description:</span>
                Mishina ideal holatda krasska top toza 100tali. Ayol kishiniki
                judayam akuratno haydalgan.
              </li>
            </ul>
            <p className="text-right text-gray-500">
              <span className="font-semibold text-black">Umumiy xarajat:</span>
              329 900 000 so'm dan
            </p>
          </div>

          <div className="px-5">
             <div className="w-[824px] flex justify-between items-center">
                <h3 className="text-2xl font-medium">Malibu</h3>
                <div className="flex items-center">
                  <img src={home} alt="" width='18px' />
                </div>
             </div>
             <img src={img2} height='444px' width='824px' alt="" />
             <div className="text-center mb-3">
                <img src={img} alt="" className="mx-auto mb-2"/>
                <p>Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.</p>
             </div>
             <form className="flex justify-around items-center">
                <label htmlFor="tashqi">
                    <input type="radio"  id="tashqi"/>
                    Tashqi tomon
                </label>
                <label htmlFor="tashqi">
                    <input type="radio"  id="tashqi"/>
                    Ichki tomon
                </label>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
