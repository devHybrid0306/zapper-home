import axios, { AxiosRequestConfig } from 'axios';
import { Balances } from '~/types';
import { config, COVALENTHQ_API_KEY } from './config';

const http = axios.create({
  baseURL: config.API_URL,
});

const fetchApi = async <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await http(url, config);

  return res.data;
};

export const fetchBalances = (address: string): Promise<Balances> => {
  return fetchApi(
    `/1/address/${address}/balances_v2/?key=${COVALENTHQ_API_KEY}&nft=true`
  );
};
