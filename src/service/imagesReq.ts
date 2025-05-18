import { useMutation, useQuery } from "react-query";

// ** services
import {
  deleteImageService,
  getImagesService,
  postImageService,
  putImageNameService,
  putImageOrderService,
} from "./imagesService";

// ** types
import { putImageOrderServiceReqI } from "@/types/serviceT";

export const useGetImagesReq = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["useGetImagesReq"],
    queryFn: getImagesService,
  });

  const mutatedData = data?.map((el) => ({
    file: null,
    sortIndex: el.sortIndex,
    source: el.url,
    altText: el.name,
    id: el.id,
  }));
  return { data: mutatedData || [], ...rest };
};

export const useDeleteImageReq = () => {
  return useMutation({
    mutationKey: ["useDeleteImageReq"],
    mutationFn: (id: string) => deleteImageService(id),
  });
};

export const usePutImageOrderReq = () => {
  return useMutation({
    mutationKey: ["usePutImageOrderReq"],
    mutationFn: (data: putImageOrderServiceReqI) => putImageOrderService(data),
  });
};

export const usePostImageReq = () => {
  return useMutation({
    mutationKey: ["usePostImageReq"],
    mutationFn: (data: FormData) => postImageService(data),
  });
};

export const usePutImageNameReq = () => {
  return useMutation({
    mutationKey: ["usePutImageNameReq"],
    mutationFn: (data: { name: string; id: string }) => putImageNameService(data),
  });
};
