import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { Menu, Dropdown } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useUser } from '@/hooks/useUser';

const Header: React.FC = () => {
  const { cartQuery } = useCart();
  const { userQuery } = useUser();

  const userMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/orders">Order History</Link>
      </Menu.Item>
      <Menu.Item danger>
        <Link to="/login">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyShop</Link>
      </div>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">
          <ShoppingCartOutlined />
          {cartQuery.data?.length > 0 && (
            <span className="cart-badge">{cartQuery.data.length}</span>
          )}
        </Link>
        {userQuery.data ? (
          <Dropdown overlay={userMenu}>
            <a onClick={(e) => e.preventDefault()}>
              <UserOutlined />
              {userQuery.data.username}
            </a>
          </Dropdown>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
