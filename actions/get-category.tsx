import { Category } from "@/types";
import { getStoreApiUrl } from "@/lib/api";

const URL = `${getStoreApiUrl()}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();
  return data;
};
export default getCategory;
