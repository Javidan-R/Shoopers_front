import React from 'react';
import { Card, Col, Row } from 'antd';
import { useProducts } from '../../hooks/useProduct';
import { Product } from '../../models/Product';
import { formatCurrency } from '../../utils/formatCurrency';

const ProductList: React.FC = () => {
  const { data: products, isLoading } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="product-list">
      <Row gutter={16}>
        {products?.map((product: Product) => (
          <Col span={8} key={product.id}>
            <Card
              title={product.name}
              cover={<img alt={product.name} src={product.image} />}
              actions={[<a href={`/product/${product.id}`}>View Details</a>]}
            >
              <p>{product.description}</p>
              <p>{formatCurrency(product.price)}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
