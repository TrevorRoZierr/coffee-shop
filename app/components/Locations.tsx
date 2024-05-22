import { Mail, User } from "lucide-react";

const Locations = () => {
  return (
    <div className="w-full p-6 lg:p-8 border-t-2 border-black bg-gradient-to-r from-red-300 to-indigo-300 text-black flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-row lg:gap-x-[100px] gap-x-4">
        <h1 className="font-tangerine font-semibold text-6xl">Locations:</h1>
        <ul className="uppercase flex flex-col gap-y-3 lg:text-base text-sm text-center">
          <li>Liurnia of the lakes</li>
          <li>Lothric cathedral</li>
          <li>Vinewood Hills</li>
          <li>Saint Denis</li>
        </ul>
      </div>
      <div className="flex justify-center items-center flex-row gap-x-6 mt-12 mb-4 w-2 h-2 text-xs font-medium tracking-wide">
        <div>
          <Mail />
          <User />
        </div>
        <div>
          <h3>sameoldtreva@gmail.com</h3>
          <h3>+91-7887630243</h3>
        </div>
      </div>
    </div>
  );
};

export default Locations;
