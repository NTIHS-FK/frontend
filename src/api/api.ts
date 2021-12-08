import axios from 'axios';
import {Method} from 'axios';
import {APIData} from './data/apiData';
import {ErrorData} from './data/apiErrorData';


export * from './data/apiData';
export * from './data/apiErrorData';

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

export type API<T = null> = T extends null ? ErrorData : APIData<T>;
