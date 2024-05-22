"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

interface SBProps {
  text: string;
  onClick?: any;
}

const SubmitButtons = ({ text, onClick }: SBProps) => {
  const { pending } = useFormStatus();
  return (
    <div className="flex items-center justify-center text-center my-5">
      {pending ? (
        <Button
          disabled
          className="text-[#fffebb] shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black"
        >
          <Loader2 className="h-4 m-4 animate-spin" />
        </Button>
      ) : (
        <Button
          type="submit"
          className="text-[#fffebb] hover:text-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black bg-violet-700 hover:bg-[#fffebb]"
          onClick={onClick}
        >
          {text}
        </Button>
      )}
    </div>
  );
};

export default SubmitButtons;
