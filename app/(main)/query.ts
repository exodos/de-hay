import { client } from "@/configs/getQueryClient";
import { baseUrl } from "@/lib/constants";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProductCategory = (slug: string[], search?) =>
  useQuery({
    queryKey: ["Product"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${baseUrl}/api/products/${slug}?search=${search}`
      );
      return data;
    },
    // enabled: !!slug,
  });

export const useGetProductDetails = (productId: string) =>
  useQuery({
    queryKey: ["Product"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/api/details/${productId}`);
      return data;
    },
    enabled: !!productId,
  });

export const useGetProductType = () =>
  useQuery({
    queryKey: ["Product"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/api/fetch`);
      return data;
    },
  });

export const useAddProductMutation = () =>
  useMutation({
    mutationFn: (newProduct: any) => {
      return axios.post(`${baseUrl}/api/create`, newProduct, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["Product"] });
    },
  });
