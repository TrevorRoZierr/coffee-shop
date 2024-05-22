import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Cross from "../components/Cross";
import SignInButton from "../components/SignInButton";
import ReserveTable from "../components/ReserveTable";

const Reservations = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="w-full lg:h-[70vh] h-[80vh]">
      <Cross link="/" />
      <h1 className="text-center lg:text-4xl text-3xl uppercase mt-16 font-unbounded font-semibold text-violet-700">
        Reservations
      </h1>
      {user ? (
        <div>
          <ReserveTable />
        </div>
      ) : (
        <div className="lg:mt-20 mt-16 flex flex-col justify-center items-center gap-y-3">
          <h1 className="font-tangerine lg:text-3xl text-2xl font-bold">
            Login is required! Please sign-in first to reserve a table.
          </h1>
          <SignInButton />
        </div>
      )}
    </div>
  );
};

export default Reservations;
