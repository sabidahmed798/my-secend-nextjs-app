import React from "react";
import FoodCard from "../components/FoodCard";

const MenuPage = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods",
  );
  const data = await res.json();
  const foods = data.data;
  console.log("food data", foods);

  return (
    <div>
      <h2>Menu page</h2>
      <div className=" grid grid-cols-1 gap-4 mx-5 w-full sm:grid-cols-2 text-2xl w-[640px] text-red-500 md:grid-cols-2 text-blue-500 w-[778px] lg:grid-cols-3 text-yellow-500 w-[1024px]">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
