import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Cross from "../components/Cross";
import SignInButton from "../components/SignInButton";
import RenderOrder from "../components/RenderOrder";

const OnlineOrder = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="w-full lg:h-[350vh] h-auto lg:p-0 p-16 flex justify-center items-center">
      <Cross link="/" />
      {!user ? (
        <div className="flex flex-col justify-center items-center gap-y-3 lg:absolute lg:top-[300px] mb-[530px]">
          <h1 className="font-tangerine lg:text-3xl text-2xl font-bold">
            Login is required! Please sign-in to order.
          </h1>
          <SignInButton />
        </div>
      ) : (
        <RenderOrder />
      )}
    </div>
  );
};

export default OnlineOrder;
