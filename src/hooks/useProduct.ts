import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Product } from '../types';

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get('/api/products');
  return data;
};

export const useProducts = () => useQuery(['products'], fetchProducts);

export const useProduct = (id: string) => {
  return useQuery(['product', id], async () => {
    const { data } = await axios.get(`/api/products/${id}`);
    return data;
  });
};
