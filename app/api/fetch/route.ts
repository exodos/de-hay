import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const category = await prisma.productCategory.findMany({
    select: {
      productCategoryName: true,
    },
  });

  const business = await prisma.businessType.findMany({
    select: {
      businessTypeName: true,
    },
  });

  return NextResponse.json({ category: category, business: business });
}
