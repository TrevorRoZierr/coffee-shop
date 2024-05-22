"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import SubmitButtons from "./SubmitButtons";
import { createReview } from "../action";
import { useToast } from "@/components/ui/use-toast";
import { useRef } from "react";

const ReviewForm = () => {
  const { toast } = useToast();
  const ref = useRef<HTMLFormElement>(null);
  const handleClick = () => {
    toast({
      title: "Feedback sent successfully.",
      description: "Thanks for rating us :)",
    });
    ref.current?.reset();
  };

  return (
    <div className="flex justify-center items-center flex-col p-6 bg-gradient-to-br from-fuchsia-900 to-violet-500 w-full border-t-2 border-yellow-100">
      <form action={createReview} ref={ref}>
        <h1 className="font-tangerine text-[#fffebb] font-medium lg:text-4xl text-3xl text-center">
          Please dont leave without rating us!
        </h1>
        <div className="my-6 lg:my-9 flex items-center flex-col float-start gap-y-5 p-6 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black rounded-xl">
          <div className="flex flex-row items-center">
            <h1 className="text-[#fffebb] text-center">Young Vamp Life</h1>
          </div>
          <Select name="rating">
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
            name="review"
            className="bg-[#fffebb] border-2 border-black placeholder:text-black"
          ></Textarea>
          <SubmitButtons text="Send Feedback" onClick={handleClick} />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
