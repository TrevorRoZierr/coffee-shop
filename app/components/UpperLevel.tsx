import Image from "next/image";
import coverImg from "../../public/cover.jpg";
import LinkButtons from "./LinkButtons";
import MidLevel from "./MidLevel";
import About from "./About";
import ReviewPage from "./ReviewPage";
import Locations from "./Locations";

const UpperLevel = () => {
  return (
    <div className="flex flex-col items-center justify-center to-[#fffebb] from-violet-300 bg-gradient-to-tr">
      <Image
        src={coverImg}
        alt="Cover Image"
        className="w-full object-cover lg:border-b-4 border-b-2 border-black"
      />
      <div className="lg:flex md:flex hidden items-center gap-x-10 px-14 py-4 rounded-2xl -mt-3 bg-violet-800 border-t-4 border-black font-pt">
        <LinkButtons name="Reservations" url="/reservations" />
        <LinkButtons name="View Menu" url="/menu" />
        <LinkButtons name="Order Online" url="/order" />
      </div>
      <div className="lg:hidden md:hidden flex items-center gap-x-5 px-10 py-3 bg-violet-800 w-full border-b-2 border-black font-pt">
        <LinkButtons name="Reservations" url="/reservations" />
        <LinkButtons name="View Menu" url="/menu" />
        <LinkButtons name="Order Online" url="/order" />
      </div>
      <MidLevel />
      <About />
      <ReviewPage />
      <Locations />
    </div>
  );
};

export default UpperLevel;
