"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import FooterPage from "../../footer";
import { useMemo } from "react";
import ServiceCarousal from "@/components/carousel/ServiceCarousal";

const getProductServices = (slug: string[]) =>
  fetch(`http://localhost:3000/api/services/${slug}`).then((res) => res.json());

export default function ServicesPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = params;
  const slugLength = slug.length;
  const headerText = decodeURI(slug[slugLength - 1]);

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["fetchServices"],
    queryFn: () => getProductServices(slug),
  });
  const { services } = useMemo(() => data ?? [], [data]);
  const splitedProductDescription = services?.productDescription?.split(".");
  const productImage = useMemo(() => services?.productImages, [services]);

  return (
    <>
      <div className="relative mt-10 bg-indigo-800 pt-5">
        <div className="absolute inset-0">
          <Image
            src={services?.imageUrl}
            alt=""
            className="object-fill:cover h-full w-full"
            width={200}
            height={200}
          />
          <div
            className="absolute inset-0 bg-white mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {headerText}
          </h1>
          <p className="mt-6 max-w-6xl text-xl text-indigo-100">
            {splitedProductDescription}
          </p>
        </div>
      </div>
      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block" />
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-lg font-semibold text-indigo-600">
                {headerText}
              </h2>
              <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                {headerText}
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1">
              <svg
                className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  {/* {Object?.values(productImage).map((images: string, index) => (
                    <div
                      className="aspect-h-7 aspect-w-12 lg:aspect-none"
                      key={index}
                    >
                      <Image
                        src={images}
                        alt=""
                        width={1800}
                        height={1238}
                        className="object-fill:cover rounded-lg object-center shadow-lg"
                      />
                    </div>
                  ))} */}
                  {/* <div className="aspect-h-7 aspect-w-12 lg:aspect-none"> */}
                  <ServiceCarousal images={productImage} />
                  {/* </div> */}
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p className="break-words indent-8">
                  {services?.productDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterPage />
    </>
  );
}
