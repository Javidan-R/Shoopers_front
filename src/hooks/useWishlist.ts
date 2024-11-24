import { useQuery } from '@tanstack/react-query';
import { API_BASE_URL } from '../config/apiConfig';
import { Product } from '../types';

const fetchWishlist = async (): Promise<Product[]> => {
  const response = await fetch(`${API_BASE_URL}/wishlist`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  if (!response.ok) throw new Error('Failed to fetch wishlist');
  return response.json();
};

export const useWishlist = () => {
  const wishlistQuery = useQuery({
    queryKey: ['wishlist'],
    queryFn: fetchWishlist,
  });

  return {
    wishlistQuery,
  };
};
