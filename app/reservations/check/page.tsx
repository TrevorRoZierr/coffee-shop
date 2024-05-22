import CancelReservations from "@/app/components/CancelReservations";
import Cross from "@/app/components/Cross";
import SubmitButtons from "@/app/components/SubmitButtons";
import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

async function getData(userId: string) {
  noStore();
  const data = await prisma.reservations.findUnique({
    where: {
      id: userId,
    },
    select: {
      reserveTable: true,
    },
  });
  return data;
}

const ReservationCheck = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id as string);

  const reservedDate = data?.reserveTable
    ? new Date(data.reserveTable).toLocaleDateString()
    : "Table not reserved";

  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center text-center">
      <Cross link="/reservations" />
      <Card className="border-2 border-violet-600 lg:p-8 p-4">
        <CardHeader>
          <CardTitle className="capitalize font-tangerine lg:text-4xl text-3xl font-semibold">
            Your Reservation details:
          </CardTitle>
        </CardHeader>
        <DropdownMenuSeparator className="bg-violet-700" />
        <CardContent>
          <div className="flex float-start flex-col lg:gap-y-5 gap-y-3 lg:mt-5 mt-3 font-unbounded font-light">
            <h1>
              Name: {user?.given_name} {user?.family_name}
            </h1>
            <h1>Email: {user?.email}</h1>
            <h1>Reserved Date: {reservedDate}</h1>
            <DropdownMenuSeparator className="my-2 bg-violet-700" />
            <div className="flex flex-row items-center">
              {data?.reserveTable ? (
                <div>
                  <h1>Click here to cancel your reservation: </h1>
                  <CancelReservations userId={user?.id as string} />
                </div>
              ) : (
                <div>
                  <h1>Make sure you reserve table before</h1>
                  <Button
                    className="mt-4 text-[#fffebb] shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black"
                    asChild
                  >
                    <Link href="/reservations">Reserve Table</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReservationCheck;
