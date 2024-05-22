import Link from "next/link";

interface LBProps {
  url: string;
  name: string;
}

const LinkButtons = ({ name, url }: LBProps) => {
  return (
    <Link
      className="text-sm lg:text-lg lg:mx-4 mx-2 text-[#fffebb] hover:text-black lg:hover:text-xl duration-300 font-medium lg:tracking-wider tracking-wide"
      href={url}
    >
      {name}
    </Link>
  );
};

export default LinkButtons;
