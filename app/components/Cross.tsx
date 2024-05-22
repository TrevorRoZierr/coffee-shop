import { X as CI } from "lucide-react";
import Link from "next/link";

const Cross = ({ link }: { link: string }) => {
  return (
    <Link href={link}>
      <CI className="lg:w-8 w-6 h-6 lg:h-8 absolute lg:right-6 right-4 top-[130px] shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] bg-violet-600 text-[#fffebb] lg:p-1 rounded-lg border-black border-2" />
    </Link>
  );
};

export default Cross;
