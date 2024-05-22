import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import SignInButton from "../components/SignInButton";
import RenderMenu from "../components/RenderMenu";
import Cross from "../components/Cross";

const Menu = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="w-full lg:h-[90vh] h-[80vh] flex justify-center items-center">
      <Cross link="/" />
      {!user ? (
        <div className="flex flex-col justify-center items-center gap-y-3">
          <h1 className="font-tangerine lg:text-3xl text-2xl font-bold">
            Login is required! Please sign-in first to check menu.
          </h1>
          <SignInButton />
        </div>
      ) : (
        <RenderMenu />
      )}
    </div>
  );
};

export default Menu;
