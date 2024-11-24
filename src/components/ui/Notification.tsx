import React from 'react';
import { notification as AntdNotification} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

interface NotificationProps {
  message: string;
  description?: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, description, onClose }) => {
  return (
    <div className="notification">
      <AntdNotification
        message={message}
        description={description}
        placement="bottomLeft"
        onClose={onClose}
        closeIcon={<CloseOutlined />}
      />
    </div>
  );
};

export default Notification;
