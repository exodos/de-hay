import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  const { slug } = params;
  const productx = slug[0].split(",");

  let products;

  if (slug.length === 1) {
    products = await prisma.productSubLine.findMany({
      where: {
        productCategoryName: productx[1],
        businessTypeName: productx[0],
      },
    });
  } else if (slug.length === 2) {
    products = await prisma.productSubLine.findMany({
      productLineName: productx[2],
      productCategory: productx[1],
      businessTypeName: productx[0],
    });
  }

  return NextResponse.json({ products: products });
}
