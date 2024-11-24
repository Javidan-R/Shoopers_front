import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Layout as AntdLayout } from 'antd';
import './Layout.css'; // Custom CSS for layout

const { Content } = AntdLayout;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AntdLayout>
      <Header />
      <Content className="layout-content">
        {children}
      </Content>
      <Footer />
    </AntdLayout>
  );
};

export default Layout;
