import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/hooks/useUser';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { mutate: registerUser } = useUser();

  const onFinish = async (values: any) => {
    try {
      await registerUser(values);
      navigate('/login');
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="auth-page">
      <h2>Register</h2>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ type: 'email', required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
