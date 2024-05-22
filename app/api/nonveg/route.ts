import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const data = await prisma.nonVeg.findMany();
  return NextResponse.json(data);
}
