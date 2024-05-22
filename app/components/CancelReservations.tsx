"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { deleteReservation } from "../action";

interface CancelProps {
  userId: string;
}

const CancelReservations = ({ userId }: CancelProps) => {
  const [pending, setPending] = useState(false);

  const handleDelete = async () => {
    setPending(true);
    try {
      await deleteReservation(userId);
      // Optionally handle post-deletion logic here (e.g., redirect, notify user, etc.)
    } catch (error) {
      console.error("Failed to delete reservation:", error);
    } finally {
      setPending(false);
    }
  };

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
          onClick={handleDelete}
          className="text-[#fffebb] shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black"
        >
          Cancel
        </Button>
      )}
    </div>
  );
};

export default CancelReservations;
