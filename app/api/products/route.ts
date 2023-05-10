import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const productCategory =
    (await prisma.productCategory.findMany(),
    {
      headers: {
        "Content-Type": "application/json",
        "API-Key": process.env.NEXT_PUBLIC_API_KEY,
      },
    });

  return NextResponse.json({ productCategory });
}
