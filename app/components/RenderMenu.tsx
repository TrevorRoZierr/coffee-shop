"use client";

import { Button } from "@/components/ui/button";
import RenderCoffee from "./RenderCoffee";
import RenderDessert from "./RenderDessert";
import RenderNonVeg from "./RenderNonVeg";
import RenderVeg from "./RenderVeg";
import { useState } from "react";
import MenuButtons from "./MenuButtons";

const RenderMenu = () => {
  const [isVeg, setIsVeg] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);
  const [isDessert, setIsDessert] = useState(false);
  const [isCoffee, setCoffee] = useState(true);

  const handleVeg = () => {
    setIsVeg(true);
    setIsNonVeg(false);
    setIsDessert(false);
    setCoffee(false);
  };

  const handleNonVeg = () => {
    setIsNonVeg(true);
    setIsVeg(false);
    setIsDessert(false);
    setCoffee(false);
  };

  const handleDessert = () => {
    setIsDessert(true);
    setIsVeg(false);
    setIsNonVeg(false);
    setCoffee(false);
  };

  const handleCoffee = () => {
    setCoffee(true);
    setIsVeg(false);
    setIsNonVeg(false);
    setIsDessert(false);
  };

  return (
    <div className="flex flex-col justify-center items-center lg:gap-y-8 gap-y-6">
      <div className="flex flex-row lg:gap-x-5 gap-x-3">
        <MenuButtons
          name="Coffee"
          className={
            !isCoffee
              ? `text-[#fffebb] shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:bg-violet-400 hover:text-black`
              : `bg-violet-400 text-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black`
          }
          onClick={handleCoffee}
        />
        <MenuButtons
          name="Veg"
          className={
            !isVeg
              ? `text-[#fffebb] shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:bg-violet-400 hover:text-black`
              : `bg-violet-400 text-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black`
          }
          onClick={handleVeg}
        />
        <MenuButtons
          name="Non-Veg"
          className={
            !isNonVeg
              ? `text-[#fffebb] shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:bg-violet-400 hover:text-black`
              : `bg-violet-400 text-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black`
          }
          onClick={handleNonVeg}
        />
        <MenuButtons
          name="Dessert"
          className={
            !isDessert
              ? `text-[#fffebb] shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:bg-violet-400 hover:text-black`
              : `bg-violet-400 text-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black`
          }
          onClick={handleDessert}
        />
      </div>
      {isVeg && <RenderVeg />}
      {isNonVeg && <RenderNonVeg />}
      {isDessert && <RenderDessert />}
      {isCoffee && <RenderCoffee />}
    </div>
  );
};

export default RenderMenu;
