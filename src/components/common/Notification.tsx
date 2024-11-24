import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

const Notification: React.FC<{ message: string }> = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="notification">
      <p>{message}</p>
      <Button onClick={() => setVisible(false)}>Close</Button>
    </div>
  );
};

export default Notification;
