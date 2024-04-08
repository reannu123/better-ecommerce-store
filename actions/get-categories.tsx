import { Category } from "@/types";
import { env } from "next-runtime-env";

const URL = `${env("NEXT_PUBLIC_API_URL")}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};
export default getCategories;
