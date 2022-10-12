export type meal = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type CartItem = {
  id?: string;
  name: string;
  price: number;
  amount: number;
};
