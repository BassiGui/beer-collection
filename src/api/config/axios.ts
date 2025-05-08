import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BEER_API_BASE_URL as string,
};

const api: AxiosInstance = axios.create(config);

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error('Erro na requisição:', error);
    return Promise.reject(new Error(error.message));
  }
);

export default api;
