// import SearchProduct from "@/components/helper/search-product";
import { baseUrl } from "@/lib/constants";
import {
  BuildingOfficeIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon } from "lucide-react";
import Image from "next/image";

async function getData(slug: string) {
  const res = await fetch(baseUrl + `/api/get-items?slug=${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const ProductListPage = async ({ params }: { params: { slug: string } }) => {
  const headerText = decodeURI(params.slug.slice(-1));
  const data = await getData(decodeURI(params.slug));
  // console.log(data);
  return (
    <>
      <header className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-8 mt-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {headerText}
        </h1>
        {/* <SearchProduct headerText={headerText} /> */}
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 bg-gray-50">
        <section aria-labelledby="cart-heading" className="col-span-2">
          <h2 id="cart-heading" className="sr-only">
            Product List
          </h2>
          <ul
            role="list"
            className="divide-y divide-gray-200 border-b border-t border-gray-200"
          >
            {data.map((product, productIdx) => (
              <li key={productIdx} className="flex py-6 sm:py-10 px-20">
                <div className="flex-shrink-0">
                  {product.imageUrl ? (
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

                <div className="ml-20 pl-20 space-x-10 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <h1 className="text-2xl">
                        <a
                          href={product.productName}
                          className="font-medium text-gray-700 hover:text-lightGreen"
                        >
                          {product.productName}
                        </a>
                      </h1>
                    </div>
                    <div className="mt-3 flex text-sm">
                      <p className="text-gray-500">
                        {`${product.productDescription.slice(0, 200)} ...`}
                        {/* {product.productDescription} */}
                      </p>
                    </div>

                    {/* <div className="mt-10 flex text-sm">Test</div> */}

                    <div className="pt-10 flex ml-10 pl-20">
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Details
                        </span>
                      </button>
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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
    </>
  );
};

export default ProductListPage;
