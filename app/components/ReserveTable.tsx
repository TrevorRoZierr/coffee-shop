import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SubmitButtons from "./SubmitButtons";
import { reserveTable } from "../action";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ReserveTable = () => {
  return (
    <div className="flex items-center justify-center w-full lg:mt-16 mt-12">
      <Card className="border-2 border-violet-600">
        <CardHeader>
          <CardTitle className="font-semibold font-tangerine lg:text-4xl text-3xl">
            Please enter date:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={reserveTable}>
            <Input type="date" name="tableDate" required />
            <SubmitButtons text="Reserve Table" />
            <Button
              className="text-[#fffebb] shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black"
              asChild
            >
              <Link href="/reservations/check">Check Reservation</Link>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReserveTable;
