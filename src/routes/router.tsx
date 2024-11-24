import  { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/Layout';

// Lazy-loaded pages
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));
const ProductList = lazy(() => import('../pages/product/ProductList'));
const ProductDetails = lazy(() => import('../pages/product/ProductDetails'));
const Checkout = lazy(() => import('../pages/checkout/Checkout'));
const Profile = lazy(() => import('../pages/profile/Profile'));
const OrderHistory = lazy(() => import('../pages/order/OrderHistory'));
const Wishlist = lazy(() => import('../pages/wishlist/Wishlist'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><Home /></MainLayout>,
  },
  {
    path: '/login',
    element: <MainLayout><Login /></MainLayout>,
  },
  {
    path: '/register',
    element: <MainLayout><Register /></MainLayout>,
  },
  {
    path: '/products',
    element: <MainLayout><ProductList /></MainLayout>,
  },
  {
    path: '/product/:id',
    element: <MainLayout><ProductDetails /></MainLayout>,
  },
  {
    path: '/checkout',
    element: <MainLayout><Checkout /></MainLayout>,
  },
  {
    path: '/profile',
    element: <MainLayout><Profile /></MainLayout>,
  },
  {
    path: '/orders',
    element: <MainLayout><OrderHistory /></MainLayout>,
  },
  {
    path: '/wishlist',
    element: <MainLayout><Wishlist /></MainLayout>,
  },
]);
