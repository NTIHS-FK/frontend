import axios from 'axios';
import {Method} from 'axios';
export const api = axios.create({
  baseURL: 'http://127.0.0.1:8080/api/',
  timeout: 1000,
});

export const authAPI = async <T> (
  token: string,
  method: Method | undefined,
  url: string,
) => {
  return await axios.request<T>({
    method: method,
    baseURL: url,
    headers: {Authorization: `Bearer ${token}`},
  });
};
