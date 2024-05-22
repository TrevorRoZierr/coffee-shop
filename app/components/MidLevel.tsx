import coffee from "../../public/coffee.png";
import shake from "../../public/shake.png";
import MidImage from "./MidImage";

const MidLevel = () => {
  return (
    <div className="lg:mt-16 flex flex-col items-center border-b-4 border-violet-700 w-full">
      <h1 className="mb-2 p-4 font-bold lg:text-6xl text-center font-tangerine text-4xl">
        Welcome to, Young{" "}
        <span className="text-violet-700">Vamp</span> Life...
      </h1>
      <div className="flex lg:flex-row flex-col lg:pt-20 pt-5 items-center lg:gap-x-20 gap-y-10">
        <MidImage alt="Shake" image={shake} />
        <MidImage alt="Coffee" image={coffee} />
      </div>
    </div>
  );
};

export default MidLevel;
