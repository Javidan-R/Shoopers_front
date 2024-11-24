// Types for products
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    stock: number;
  }
  
  // Types for orders
  export interface Order {
    id: string;
    userId: string;
    items: OrderItem[];
    total: number;
    status: string;
  }
  
  export interface OrderItem {
    productId: string;
    quantity: number;
  }
  
  // Types for user
  export interface User {
    id: string;
    username: string;
    email: string;
    address: string;
  }
  
  // Types for cart
  export interface CartItem {
    product: Product;
    quantity: number;
  }
  
  // Types for wishlist
  export interface WishlistItem {
    product: Product;
  }
  
  // Types for comparison
  export interface CompareItem {
    product: Product;
  }
  