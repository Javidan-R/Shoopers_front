import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { API_BASE_URL } from '../config/apiConfig';
import { User } from '../types';

const fetchUser = async (token: string): Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error('Failed to fetch user');
  return response.json();
};

const loginUser = async (credentials: { username: string; password: string }) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) throw new Error('Failed to login');
  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data;
};

const registerUser = async (userData: { username: string; email: string; password: string }) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error('Failed to register');
  return response.json();
};

export const useUser = () => {
  const queryClient = useQueryClient();
  const token = localStorage.getItem('token') || '';

  const userQuery = useQuery({
    queryKey: ['user'],
    queryFn: () => fetchUser(token),
    enabled: !!token,
  });

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => queryClient.invalidateQueries(['user']),
  });

  const registerMutation = useMutation({
    mutationFn: registerUser,
  });

  return {
    userQuery,
    loginMutation,
    registerMutation,
  };
};
