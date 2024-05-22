"use client";

import { useEffect, useState } from "react";

const RenderCoffee = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://yvlcoffee.vercel.app/api/coffee");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col text-center border-2 border-black lg:p-18 p-12 rounded-sm shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] bg-gradient-to-br from-fuchsia-950 to-violet-600 text-[#fffebb]">
      {data.map((item: any) => (
        <div key={item.id}>
          <h1 className="lg:text-4xl text-3xl font-semibold font-tangerine">
            {item.dish}
          </h1>
          <h2 className="lg:text-sm text-xs font-medium font-unbounded lg:mb-5 mb-3">
            ₹ {item.price}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default RenderCoffee;
