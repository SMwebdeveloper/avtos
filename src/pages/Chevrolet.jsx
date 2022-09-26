import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tahoe from "../assets/Tahoe.png";
import Equinox from "../assets/Eqiunox.png";
import Damas from "../assets/Damas.png";
import Nexia from "../assets/chevrolet-n.png";

const Chevrolet = () => {
  const [cars, setCars] = useState([
    { img: `${Tahoe}`, to: "/model", title: "Tahoe", price: "500 000 000" },
    { img: `${Equinox}`, to: "/model", title: "Equinox", price: "500 000 000" },
    { img: `${Damas}`, to: "/model", title: "Damas", price: "500 000 000" },
    { img: `${Nexia}`, to: "/model", title: "Nexia", price: "500 000 000" },
    { img: `${Equinox}`, to: "/model", title: "Malibu", price: "500 000 000" },
    { img: `${Equinox}`, to: "/model", title: "Gentra", price: "500 000 000" },
    { img: `${Equinox}`, to: "/model", title: "Spark", price: "500 000 000" },
    { img: `${Equinox}`, to: "/model", title: "Cobalt", price: "500 000 000" },
  ]);
  return (
    <div className="bg-white">
      <div className="container mx-auto px-5">
            <h2 className="text-5xl font-semibold mb-12">Modellat turlari</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 text-center gap-2">
          {cars.map((car) => {
            return (
              <Link to={car.to} key={car.title} className='flex flex-col border-solid border-gray-800 border-[1px] shadow-md pb-3 rounded-xl hover:shadow-xl hover:scale-95 duration-300'>
                <img src={car.img} alt={car.title}  className='w-[300px] h-[80%]'/>
                <h3 className="text-2xl font-medium">{car.title}</h3>
                <h5 className="text-2xl"><span className="font-medium">Narxi:</span>{car.price}</h5>
              </Link>
            );
          })}
        </div>{" "}
      </div>
    </div>
  );
};

export default Chevrolet;
