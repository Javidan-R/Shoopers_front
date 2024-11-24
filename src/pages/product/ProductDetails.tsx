import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'antd';
import { useProduct } from '../../hooks/useProduct';
import { formatCurrency } from '../../utils/formatCurrency';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useProduct(id);

  if (isLoading) return <p>Loading...</p>;

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <Card
        title={product.name}
        cover={<img alt={product.name} src={product.image} />}
      >
        <p>{product.description}</p>
        <p>{formatCurrency(product.price)}</p>
        <Button type="primary">Add to Cart</Button>
      </Card>
    </div>
  );
};

export default ProductDetails;
