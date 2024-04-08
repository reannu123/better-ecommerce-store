import { Category } from "@/types";
import { env } from "next-runtime-env";

const URL = `${env("NEXT_PUBLIC_API_URL")}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();
  return data;
};
export default getCategory;
