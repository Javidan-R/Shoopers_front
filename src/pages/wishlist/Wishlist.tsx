import React from 'react';
import { useWishlist } from '../../hooks/useWishlist';
import { Card } from '../../components/ui/Card';
import { Link } from 'react-router-dom';

const Wishlist: React.FC = () => {
  const { wishlistItems } = useWishlist();

  return (
    <div className="wishlist">
      <h1>Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlistItems.map(item => (
          <Link to={`/product/${item.product.id}`} key={item.product.id}>
            <Card product={item.product} />
          </Link>
        ))
      )}
    </div>
  );
};

export default Wishlist;
