import Image from "next/image";
import logo from "../../public/logo.jpg";
import UserDropDown from "./UserDropDown";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import SignInButton from "./SignInButton";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="w-full h-min bg-[#fffebb] border-black border-b-2">
      <div className="flex items-center justify-between p-2">
        <UserDropDown />
        <Link href="/">
          <Image src={logo} alt="Logo" width={150} height={200} />
        </Link>
        {user ? (
          <h1 className="mr-2 lg:mr-4 font-semibold lg:text-md text-sm md:text-md">
            {user.given_name} {user.family_name}
          </h1>
        ) : (
          <div>
            <SignInButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
