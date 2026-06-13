import { env } from "next-runtime-env";

export const getStoreApiUrl = () => {
  return process.env.STORE_API_URL || env("NEXT_PUBLIC_API_URL") || "";
};
