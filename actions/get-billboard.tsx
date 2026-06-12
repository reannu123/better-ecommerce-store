import { Billboard } from "@/types";
import { getStoreApiUrl } from "@/lib/api";

const URL = `${getStoreApiUrl()}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();
  return data;
};
export default getBillboard;
