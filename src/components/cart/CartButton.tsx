import React from 'react';
import { useCart } from '../../hooks/useCart';
import { Button } from '@shadcn/react-button';

const CartButton: React.FC<{ product: any }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Button onClick={() => addToCart(product)}>Add to Cart</Button>
  );
};

export default CartButton;
