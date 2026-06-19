import { Product } from "@/types";
import qs from "query-string";
import { getStoreApiUrl } from "@/lib/api";

const URL = `${getStoreApiUrl()}/products`;

interface Query {
  categoryId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
export default getProducts;
