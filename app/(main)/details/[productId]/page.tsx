"use client";
import { useMemo } from "react";
import { Tab } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import FooterPage from "../../footer";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const getProductDetails = (productId: string) =>
  fetch(`http://localhost:3000/api/details/${productId}`).then((res) =>
    res.json()
  );

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;

  const {
    data: productdetails,
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["fetchProductDetail", productId],
    queryFn: () => getProductDetails(productId),
  });
  const products = useMemo(() => productdetails?.products, [productdetails]);

  return (
    <>
      <div className="bg-white pt-8">
        <div className="mx-auto mt-10 max-w-4xl px-8 py-16 sm:px-10 sm:py-24 lg:max-w-7xl lg:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Tab.Group as="div" className="flex flex-col-reverse">
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {products?.productImages?.map((product: any, index: any) => (
                    <Tab
                      key={index}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">
                            {products?.productName}
                          </span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <Image
                              src={product}
                              alt=""
                              width={200}
                              height={200}
                              className="h-full w-full object-cover object-center"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? "ring-indigo-500" : "ring-transparent",
                              "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              {/* productImages */}

              <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
                {products?.productImages?.map((product, index) => (
                  <Tab.Panel key={index}>
                    <Image
                      src={product}
                      alt={""}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            <div className="mt-10 px-8 pt-16 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {products?.productName}
              </h1>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="space-y-6 text-base text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: products?.productDescription,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}
