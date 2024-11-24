import { useState } from 'react';
import { CompareItem, Product } from '../types';

export const useCompare = () => {
  const [comparedItems, setComparedItems] = useState<CompareItem[]>([]);

  const addToCompare = (product: Product) => {
    setComparedItems((prevItems) => {
      if (prevItems.find(item => item.product.id === product.id)) return prevItems;
      return [...prevItems, { product }];
    });
  };

  const removeFromCompare = (productId: string) => {
    setComparedItems((prevItems) => prevItems.filter(item => item.product.id !== productId));
  };

  return { comparedItems, addToCompare, removeFromCompare };
};
