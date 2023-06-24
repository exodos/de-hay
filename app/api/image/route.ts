export async function GET(request: Request) {
  const imageData = [
    "/slides/slide-img-1.png",
    "/slides/slide-img-2.png",
    "/slides/slide-img-3.png",
    "/slides/slide-img-4.png",
    "/slides/slide-img-5.png",
    "/slides/slide-img-6.png",
  ];

  return new Response(JSON.stringify(imageData));
}
