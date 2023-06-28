import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  try {
    const products = await prisma.productSubLine.findUnique({
      where: {
        id: Number(productId),
      },
    });

    return NextResponse.json({ products: products });
  } catch (err) {
    return NextResponse.json({ message: err?.message });
  }
}
