import { useQuery } from '@tanstack/react-query';
import { API_BASE_URL } from '../config/apiConfig';
import { Order } from '../types';

const fetchOrders = async (): Promise<Order[]> => {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  if (!response.ok) throw new Error('Failed to fetch orders');
  return response.json();
};

export const useOrders = () => {
  const ordersQuery = useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
  });

  return {
    ordersQuery,
  };
};
