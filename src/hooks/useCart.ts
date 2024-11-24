import { useQuery } from '@tanstack/react-query';
import { API_BASE_URL } from '../config/apiConfig';
import { CartItem } from '../types';

const fetchCart = async (): Promise<CartItem[]> => {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  if (!response.ok) throw new Error('Failed to fetch cart');
  return response.json();
};

export const useCart = () => {
  const cartQuery = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
  });

  return {
    cartQuery,
  };
};
