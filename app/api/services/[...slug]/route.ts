import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  const { slug } = params;
  const productx = slug[0].split(",");

  const services = await prisma.productSubLine.findFirst({
    where: {
      productName: productx[1],
      businessTypeName: productx[0],
    },
  });

  return NextResponse.json({ services: services });
}
