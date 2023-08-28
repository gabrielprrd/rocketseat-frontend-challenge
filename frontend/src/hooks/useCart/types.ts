export type Product = {
  id: string;
  name: string;
  image_url: string;
  description: string;
  price_in_cents: number;
  category: string;
};

export type Action = {
  type: string;
  payload?: Product;
};

export type Cart = {
  products: (Product | undefined)[];
  subtotal: number;
};
