"use client";

import { useEffect, useState } from "react";
import SubmitButtons from "./SubmitButtons";
import { useToast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";
import { ToastAction } from "@/components/ui/toast";

const RenderOrder = () => {
  const { toast } = useToast();
  const [coffeeData, setCoffeeData] = useState([]);
  const [vegData, setVegData] = useState([]);
  const [nonVegData, setNonVegData] = useState([]);
  const [dessertData, setDessertData] = useState([]);

  useEffect(() => {
    const fetchCoffeeData = async () => {
      const response = await fetch("https://yvlcoffee.vercel.app/api/coffee");
      const data = await response.json();
      setCoffeeData(data);
    };

    const fetchVegData = async () => {
      const response = await fetch("https://yvlcoffee.vercel.app/api/veg");
      const data = await response.json();
      setVegData(data);
    };

    const fetchNonVegData = async () => {
      const response = await fetch("https://yvlcoffee.vercel.app/api/nonveg");
      const data = await response.json();
      setNonVegData(data);
    };

    const fetchDessertData = async () => {
      const response = await fetch("https://yvlcoffee.vercel.app/api/dessert");
      const data = await response.json();
      setDessertData(data);
    };

    fetchCoffeeData();
    fetchVegData();
    fetchNonVegData();
    fetchDessertData();
  }, []);

  const handleClick = () => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description:
        "There was a problem with your request. Please check after a while.",
      action: <ToastAction altText=":(">{":("}</ToastAction>,
    });

    redirect("/");
  };

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-4">
      {coffeeData.map((item: any) => (
        <div
          key={item.id}
          className="flex flex-col gap-y-4 items-center justify-center text-center p-2 border-2 border-black bg-[#fffebb]"
        >
          <img
            src={item.image}
            className="w-[300px] h-[300px] border-2 border-black rounded"
          />
          <div>
            <h1 className="text-lg font-unbounded">{item.dish}</h1>
            <p className="font-unbounded text-sm">₹ {item.price}</p>
            <SubmitButtons text="Order" onClick={handleClick} />
          </div>
        </div>
      ))}

      {vegData.map((item: any) => (
        <div
          key={item.id}
          className="flex flex-col gap-y-4 items-center justify-center text-center p-2 border-2 border-black bg-[#fffebb]"
        >
          <img
            src={item.image}
            className="w-[300px] h-[300px] border-2 border-black rounded-lg"
          />
          <div>
            <h1 className="text-lg font-unbounded">{item.dish}</h1>
            <p className="font-unbounded text-sm">₹ {item.price}</p>
            <SubmitButtons text="Order" onClick={handleClick} />
          </div>
        </div>
      ))}

      {nonVegData.map((item: any) => (
        <div
          key={item.id}
          className="flex flex-col gap-y-4 items-center justify-center text-center p-2 border-2 border-black bg-[#fffebb]"
        >
          <img
            src={item.image}
            className="w-[300px] h-[300px] border-2 border-black rounded-lg"
          />
          <div>
            <h1 className="text-lg font-unbounded">{item.dish}</h1>
            <p className="font-unbounded text-sm">₹ {item.price}</p>
            <SubmitButtons text="Order" onClick={handleClick} />
          </div>
        </div>
      ))}

      {dessertData.map((item: any) => (
        <div
          key={item.id}
          className="flex flex-col gap-y-4 items-center justify-center text-center p-2 border-2 border-black bg-[#fffebb]"
        >
          <img
            src={item.image}
            className="w-[300px] h-[300px] border-2 border-black rounded-lg"
          />
          <div>
            <h1 className="text-lg font-unbounded">{item.dish}</h1>
            <p className="font-unbounded text-sm">₹ {item.price}</p>
            <SubmitButtons text="Order" onClick={handleClick} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderOrder;
