import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const getAxiosClient = (axiosConfig?: AxiosRequestConfig | undefined): AxiosInstance => {
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/images`;

  if (!apiUrl) {
    throw new Error(`
      Provide baseUrl as argument in axiosConfig or set VITE_API_BASE_URL in the environment
    `);
  }

  const axiosClient = axios.create({
    baseURL: new URL(apiUrl).toString(),
    ...axiosConfig,
  });

  return axiosClient;
};
