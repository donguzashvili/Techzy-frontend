import { getAxiosClient } from "./axios";

// ** types
import { putImageOrderServiceReqI } from "@/types/serviceT";
import { ImagesI } from "@/types/commonT";

export const getImagesService = async (): Promise<ImagesI[]> => {
  const httpRequest = await getAxiosClient().get("/");
  return httpRequest.data;
};

export const deleteImageService = async (id: string) => {
  const httpRequest = await getAxiosClient().delete(`/${id}`);
  return httpRequest.data;
};

export const putImageOrderService = async ({
  data,
}: putImageOrderServiceReqI): Promise<ImagesI[]> => {
  const httpRequest = await getAxiosClient().put("/order", data);
  return httpRequest.data;
};

export const postImageService = async (data: FormData) => {
  const httpRequest = await getAxiosClient().post("/", data);
  return httpRequest.data;
};

export const putImageNameService = async (data: { name: string; id: string }) => {
  const { name, id } = data;
  const httpRequest = await getAxiosClient().put(id, { name });
  return httpRequest.data;
};
