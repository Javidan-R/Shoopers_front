import React from 'react';
import { useWishlist } from '../../hooks/useWishlist';
import { List, Button } from 'antd';
import { Link } from 'react-router-dom';

const Wishlist: React.FC = () => {
  const { data: wishlistItems, isLoading } = useWishlist();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      <List
        itemLayout="horizontal"
        dataSource={wishlistItems}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.name}
              description={item.description}
            />
            <Link to={`/product/${item.id}`}>
              <Button type="link">View Product</Button>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Wishlist;
