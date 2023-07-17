import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { isNull } from "util";

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  const { slug } = params;
  const { searchParams } = new URL(request.url);
  let search = searchParams.get("search");
  const productx = slug[0].split(",");

  const where =
    search != "null" && search != ""
      ? {
          productName: search,
          productCategoryName: productx[1],
          businessTypeName: productx[0],
        }
      : {
          productCategoryName: productx[1],
          businessTypeName: productx[0],
        };

  const products = await prisma.productSubLine.findMany({
    where,
  });

  return NextResponse.json({ products: products });
}
