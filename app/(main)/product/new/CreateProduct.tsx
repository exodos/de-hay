"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { ProductFormInput } from "types";
import { useAddProductMutation, useGetProductType } from "../../query";
import { productCreationSchema } from "./ProductSchema";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useRouter } from "next/navigation";

export default function CreateProduct() {
  const { data: productData } = useGetProductType();
  const category = useMemo(() => productData?.category ?? [], [productData]);
  const business = useMemo(() => productData?.business ?? [], [productData]);
  const [urlImage, setUrlImage] = useState();
  const router = useRouter();

  const onChangePicture = (e) => {
    setUrlImage(e.target.files[0]);
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<ProductFormInput>({
    resolver: yupResolver(productCreationSchema),
    defaultValues: {
      productName: "",
      productDescription: "",
      imageUrl: "",
      productImages: [{ img: "" }],
      productCategoryName: "",
      businessTypeName: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "productImages",
  });

  const { mutateAsync } = useAddProductMutation();

  const onSubmit: SubmitHandler<ProductFormInput> = async (data) => {
    const formData = new FormData();
    formData.append("productName", data.productName);
    formData.append("productDescription", data.productDescription);
    formData.append("imageUrl", urlImage as any);
    data.productImages?.map((item, i) =>
      formData.append(`productImages`, item?.img[0])
    );
    formData.append("productCategoryName", data.productCategoryName);
    formData.append("businessTypeName", data.businessTypeName);

    try {
      await mutateAsync(formData);
      router.push("/");
      NotificationManager.success("Success message", "Title here");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-5xl mt-16">
        <form className="pt-20" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-12">
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-white">
                Product
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                Add basic information of the product
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="productName"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Product Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                      <input
                        type="text"
                        className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter Product Name"
                        {...register("productName", { required: true })}
                      />
                    </div>
                    <div className="mt-2 text-sm italic text-eRed">
                      {errors.productName && (
                        <span>{errors.productName?.message}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="productDescription"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Product Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="productDescription"
                      // name="productDescription"
                      rows={10}
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      {...register("productDescription", { required: true })}
                    />
                    <div className="mt-2 text-sm italic text-eRed">
                      {errors.productDescription && (
                        <span>{errors.productDescription?.message}</span>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Write a few sentences about the product.
                  </p>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="imageUrl"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Product Image
                  </label>
                  <div className="mt-2">
                    <input
                      type="file"
                      id="imageUrl"
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      {...register("imageUrl", { required: true })}
                      onChange={onChangePicture}
                    />
                    <div className="mt-2 text-sm italic text-eRed">
                      {errors.imageUrl && (
                        <span>{errors.imageUrl?.message}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 md:col-span-3 md:mt-0">
              {fields.map((_, index) => (
                <div className="grid grid-cols-2 gap-4" key={index}>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="mt-4 flex text-sm leading-6 text-gray-400">
                      <label
                        htmlFor={`productImages.${index}.img`}
                        className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500"
                      >
                        <input
                          type="file"
                          {...register(`productImages.${index}.img`)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="pb-10 pt-5">
                      <div className="flex flex-1 justify-center">
                        {fields.length !== 1 && (
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="bordertext-sm px-4 py-2 font-medium"
                          >
                            <AiFillMinusCircle
                              className="h-8 w-8 flex-shrink-0 text-sm font-medium text-lightGreen hover:text-deepBlue"
                              aria-hidden="true"
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pt-5">
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() =>
                      append({
                        img: "",
                      })
                    }
                  >
                    <AiFillPlusCircle
                      className="h-8 w-8 flex-shrink-0 text-sm font-medium text-lightGreen hover:text-deepBlue"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="border-b border-white/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-white">
                Product Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                Select product category and bussiness type
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="productCategory"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Product Category
                  </label>
                  <div className="mt-2">
                    <select
                      id="productCategory"
                      // name="productCategory"
                      {...register("productCategoryName", { required: true })}
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                    >
                      <option value="">Select Product Category</option>
                      {category?.map((item, itemIdx) => (
                        <option key={itemIdx} value={item?.productCategoryName}>
                          {item?.productCategoryName}
                        </option>
                      ))}
                    </select>
                    <div className="mt-2 text-sm italic text-eRed">
                      {errors.productCategoryName && (
                        <span>{errors.productCategoryName?.message}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="businessType"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Business Type
                  </label>
                  <div className="mt-2">
                    <select
                      // name="businessType"
                      {...register("businessTypeName", { required: true })}
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                    >
                      <option value="">Select Business Category</option>
                      {business?.map((item, itemIdx) => (
                        <option key={itemIdx} value={item?.businessTypeName}>
                          {item?.businessTypeName}
                        </option>
                      ))}
                    </select>
                    <div className="mt-2 text-sm italic text-eRed">
                      {errors.businessTypeName && (
                        <span>{errors.businessTypeName?.message}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6 pt-10  pb-10">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
      <NotificationContainer />
    </>
  );
}
