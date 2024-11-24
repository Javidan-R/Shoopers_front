import React from 'react';
import { Form, Input, Button } from 'antd';
import { useUser } from '../../hooks/useUser';

const Profile: React.FC = () => {
  const { data: user, mutate: updateUser } = useUser();

  const onFinish = async (values: any) => {
    try {
      await updateUser(values);
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <Form
        initialValues={{ username: user?.username, email: user?.email }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ type: 'email', required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;
