import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';

export const API_BASE_URL = import.meta.env.DEV ? 'http://localhost:5174' : 'https://ttodam-ttodam-fr.vercel.app/';

const cookies = new Cookies();

export const axiosPublic = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosAccessFn = () => {
  const axiosAccess = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosAccess.interceptors.request.use(
    async config => {
      try {
        const accessToken = await cookies.get('AccessToken');
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    error => {
      return Promise.reject(error);
    },
  );

  axiosAccess.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      const axiosError = error as AxiosError;
      return Promise.reject(axiosError);
    },
  );
  return axiosAccess;
};
