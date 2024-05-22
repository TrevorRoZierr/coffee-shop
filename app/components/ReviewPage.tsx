import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import SubmitButtons from "./SubmitButtons";
import Link from "next/link";
import ReviewForm from "./ReviewForm";

const ReviewPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <>
      {user ? (
        <ReviewForm />
      ) : (
        <div className="flex justify-center items-center flex-col p-6 bg-gradient-to-br from-fuchsia-900 to-violet-500 w-full border-t-2 border-yellow-100">
          <h1 className="font-tangerine text-[#fffebb] font-medium lg:text-6xl text-4xl text-center">
            Please dont leave without rating us!
          </h1>
          <div className="my-6 lg:my-9 flex items-center flex-col float-start gap-y-5 p-6 border-2 border-black rounded-xl shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]">
            <h1 className="text-[#fffebb]">Name: You are not signed-in</h1>
            <Select>
              <SelectTrigger className="w-[180px] bg-[#fffebb] border-2 border-black">
                <SelectValue placeholder="Rate Us!" />
              </SelectTrigger>
              <SelectContent className="border-2 border-black">
                <SelectGroup className="bg-violet-600 border-2 border-black">
                  <SelectItem value="starOne">⭐</SelectItem>
                  <SelectItem value="starTwo">⭐⭐</SelectItem>
                  <SelectItem value="starThree">⭐⭐⭐</SelectItem>
                  <SelectItem value="starFour">⭐⭐⭐⭐</SelectItem>
                  <SelectItem value="starFive">⭐⭐⭐⭐⭐</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Dont forget to leave a review..."
              className="bg-[#fffebb] border-2 border-black placeholder:text-black"
            ></Textarea>
            <Link href="/api/auth/login">
              <SubmitButtons text="Send Feedback" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewPage;
