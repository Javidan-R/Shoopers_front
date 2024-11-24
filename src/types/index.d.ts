export interface User {
    id: string;
    username: string;
    email: string;
    token: string;
  }
  
  export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }
  
  export interface CartItem {
    productId: string;
    quantity: number;
  }
  
  export interface Order {
    id: string;
    date: string;
    total: number;
    status: string;
  }
  