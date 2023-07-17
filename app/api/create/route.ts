// import { NextRequest, NextResponse } from "next/server";
// import { writeFile } from "fs/promises";

// export async function POST(request: NextRequest) {
//   const data = await request.formData();
//   const file: File | null = data.get("productImages") as unknown as File;

//   if (!file) {
//     return NextResponse.json({ success: false });
//   }

//   const bytes = await file.arrayBuffer();
//   const buffer = Buffer.from(bytes);

//   const path = `./public/uploads/${file.name}`;
//   await writeFile(path, buffer);
//   console.log(`open ${path} to see the uploaded file`);
//   return NextResponse.json({ success: true });
// }

import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import fs from "fs";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const productName = data.get("productName");
  const productDescription = data.get("productDescription");
  const file: File | null = data.get("imageUrl") as unknown as File;
  const productImages: any = data.getAll("productImages");
  const productCategoryName = data.get("productCategoryName");
  const businessTypeName = data.get("businessTypeName");

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = `./public/uploads/${file.name}`;
  await writeFile(path, buffer);

  const formDataEntryValues = Array.from(productImages.values());

  for (const formDataEntryValue of formDataEntryValues) {
    const fileImages = formDataEntryValue as unknown as Blob;
    const bufferImages = Buffer.from(await fileImages.arrayBuffer());
    fs.writeFileSync(`public/uploads/${fileImages.name}`, bufferImages);
  }
  let pImage: any = [];

  Object.values(formDataEntryValues).forEach((val: any) => {
    pImage.push({ img: `/uploads/${val?.name}` });
  });

  const products = await prisma.productSubLine.create({
    data: {
      productName: productName,
      productDescription: productDescription,
      imageUrl: `/uploads/${file.name}`,
      productImages: [pImage],
      productCategory: {
        connect: {
          productCategoryName: productCategoryName,
        },
      },
      businessType: {
        connect: {
          businessTypeName: businessTypeName,
        },
      },
    },
  });

  if (!products) {
    let error_response = {
      status: "fail",
      message: "No Feedback with the Provided ID Found",
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  let json_response = {
    status: "success",
    data: {
      products,
    },
  };
  // return new NextResponse(JSON.stringify(json_response), {
  //   status: 201,
  //   headers: { "Content-Type": "application/json" },
  // });
  return NextResponse.json(json_response);

  // return NextResponse.json({ message: "Success" });

  // return NextResponse.json({ success: true });
}
