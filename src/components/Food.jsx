import React, { useState } from "react";
import { dataFood } from "../data/DataFood.js";

const Food = () => {
  const [foods, setFoods] = useState(dataFood);

  //filter type(burger,pizza,pasta)
  const filterType = (category) => {
    setFoods(
      dataFood.filter((item) => {
        return item.category === category;
      })
    );
  };

  //filter by price
  const filterPrice = (price) => {
    setFoods(
      dataFood.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-2-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/*Filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/*Filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(dataFood)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("Burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("Pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("Pasta")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pasta
            </button>
            <button
              onClick={() => filterType("Snack")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Snack
            </button>
          </div>
        </div>

        {/*Filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between maax-w-[390px] w-full">
            <button
              onClick={() => filterPrice("RP.30K")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Rp. 30K
            </button>
            <button
              onClick={() => filterPrice("RP.50K")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Rp.50K
            </button>
            <button
              onClick={() => filterPrice("RP.100K")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Rp.100K
            </button>
          </div>
        </div>
      </div>

      {/*Display food */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                {" "}
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}{" "}
                </span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
