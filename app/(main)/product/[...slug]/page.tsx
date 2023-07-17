"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useGetProductCategory } from "../../query";
import { useCurrentUser } from "hooks";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function ProductListPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const { slug } = params;

  const slugLength = slug.length;

  const headerText = decodeURI(slug[slugLength - 1]);

  const { data: productCategory } = useGetProductCategory(slug, search);

  const { products } = useMemo(() => productCategory ?? [], [productCategory]);
  const currentUser = useCurrentUser();
  return (
    <>
      <div className="mx-auto max-w-6xl">
        <header className="mt-8 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {headerText}
            </h1>
          </div>
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              {(currentUser?.roles === "SUPERADMIN" ||
                currentUser?.roles === "ADMIN") && (
                <Link href={"/product/new"} passHref>
                  <button className="group relative mb-2 mr-1 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
                    <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                      Add Product
                    </span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </header>
        <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
          <div className="w-full max-w-lg lg:max-w-xs">
            <form className="relative flex flex-1" method="GET">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-md border-0 bg-gray-400 py-1.5 pl-10 pr-3 text-white placeholder:text-gray-50 focus:bg-gray-600 focus:text-gray-200 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Search Products"
                  type="search"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-2 lg:px-4">
            <div className="mt-12 grid grid-cols-1 gap-2 bg-gray-50 sm:gap-2">
              <section
                aria-labelledby="cart-heading"
                className="col-span-2 sm:col-span-1"
              >
                <h2 id="cart-heading" className="sr-only">
                  Product List
                </h2>
                <ul
                  role="list"
                  className="divide-y divide-gray-200 border-b border-t border-gray-200"
                >
                  {products?.map((product, productIdx) => (
                    <li
                      key={productIdx}
                      className="flex sm:px-4 lg:px-6 py-6 sm:py-10"
                    >
                      <div className="flex-shrink-0">
                        {product?.imageUrl ? (
                          <Image
                            src={product?.imageUrl}
                            alt={product?.productName}
                            width={200}
                            height={200}
                            className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                          />
                        ) : (
                          <Image
                            src={"/product/image-place-holder.png"}
                            alt={product?.productName}
                            width={200}
                            height={200}
                            className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                          />
                        )}
                      </div>
                      <div className="ml-20 flex flex-col justify-between space-x-10 sm:pl-10 lg:pl-20">
                        <div>
                          <div className="flex justify-between">
                            <h1 className="text-2xl">
                              <a
                                href={product?.productName}
                                className="font-medium text-gray-700 hover:text-lightGreen"
                              >
                                {product?.productName}
                              </a>
                            </h1>
                          </div>
                          <div className="mt-3 flex text-sm">
                            <p className="text-gray-500 break-words">
                              {`${product?.productDescription.slice(
                                0,
                                200
                              )} ...`}
                            </p>
                          </div>
                          <div className="ml-10 flex pl-10 pt-10">
                            <Link href={`/details/${product?.id}`}>
                              <button className="group relative mb-2 mr-1 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
                                <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                                  Details
                                </span>
                              </button>
                            </Link>
                            <button className="group relative mb-2 ml-1 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800">
                              <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                                Compare
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
