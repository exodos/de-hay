import * as Yup from "yup";

export const productCreationSchema = Yup.object().shape({
  productName: Yup.string().required("product Name Is Required"),
  productDescription: Yup.string().required("Product Description Is Required"),
  imageUrl: Yup.string().required("Image Url Is Required"),

  //   imageUrl: Yup.mixed()
  //     .test({
  //       message: `Image Is Required, can't be emptry `,
  //       test: (file) => {
  //         const isValid = file !== null;
  //         return isValid;
  //       },
  //     })
  //     .required("Image Url Is Required"),
  productCategoryName: Yup.string().required(
    "Product Category Name Is Required"
  ),
  businessTypeName: Yup.string().required("Business Type Name Is Required"),
});
