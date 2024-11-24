import React from 'react';
import { Table } from 'antd';
import { useOrders } from '../../hooks/useOrder';

const OrderHistory: React.FC = () => {
  const { data: orders, isLoading } = useOrders();

  if (isLoading) return <p>Loading...</p>;

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <div className="order-history">
      <h2>Order History</h2>
      <Table dataSource={orders} columns={columns} rowKey="id" />
    </div>
  );
};

export default OrderHistory;
