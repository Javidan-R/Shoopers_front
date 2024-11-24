import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useCart } from '../../hooks/useCart';

const Checkout: React.FC = () => {
  const { data: cartItems, isLoading } = useCart();

  const onFinish = async (values: any) => {
    // Handle checkout
    message.success('Order placed successfully!');
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Place Order
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Checkout;
