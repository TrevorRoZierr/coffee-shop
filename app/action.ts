"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "./lib/db";
import { revalidatePath } from "next/cache";
import { parseISO, isValid } from "date-fns";

export async function reserveTable(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const dateString = formData.get("tableDate") as string;
  const date = parseISO(dateString);

  if (!isValid(date)) {
    console.error("Invalid date format");
    return;
  }

  try {
    const data = await prisma.reservations.create({
      data: {
        id: user.id,
        reserveTable: date.toISOString(),
      },
    });
  } catch (e) {
    console.error(e);
  }

  return redirect("/reservations/check");
}

export async function deleteReservation(userId: string) {
  try {
    await prisma.reservations.delete({
      where: {
        id: userId,
      },
    });
    revalidatePath("/reservations");
  } catch (error) {
    console.error("Failed to delete reservation:", error);
    throw new Error("Failed to delete reservation");
  }
}

export async function createReview(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const rating = formData.get("rating") as string;
  const review = formData.get("review") as string;

  try {
    await prisma.ratings.create({
      data: {
        id: user.id,
        rating: rating,
        review: review,
      },
    });
  } catch (e) {
    console.log(e);
  }
}
