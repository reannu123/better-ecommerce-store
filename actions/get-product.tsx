import { Product } from "@/types";
import { getStoreApiUrl } from "@/lib/api";

const URL = `${getStoreApiUrl()}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();
  return data;
};
export default getProduct;
