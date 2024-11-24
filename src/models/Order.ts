
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
