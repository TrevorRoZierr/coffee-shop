import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LoginLink,
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Menu } from "lucide-react";
import Link from "next/link";

const UserDropDown = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div>
          <Menu className="ml-6" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-[200px] p-6 mt-2 ml-2 bg-violet-700 text-[#fffebb] border-2 border-black"
      >
        <DropdownMenuItem>
          <Link href="/" className="w-full">
            Socials
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/" className="w-full">
            ERD
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/" className="w-full">
            Portfolio
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-black" />
        <DropdownMenuItem>
          <div className="">
            {user ? (
              <div className="flex items-center gap-x-16">
                <LogoutLink className="w-full font-semibold">Logout</LogoutLink>
                <img
                  src={user.picture ?? undefined}
                  alt="User Image"
                  className="h-6 w-6 rounded-full"
                />
              </div>
            ) : (
              <div>
                <LoginLink className="w-full font-semibold">Login</LoginLink>
              </div>
            )}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
