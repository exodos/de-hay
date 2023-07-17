export type LoginFormInput = {
  email: string;
  password: string;
};

export type ProductFormInput = {
  productName: string;
  productDescription: string;
  imageUrl: string;
  productImages?: {
    img: string;
  }[];
  productCategoryName: string;
  businessTypeName: string;
};
