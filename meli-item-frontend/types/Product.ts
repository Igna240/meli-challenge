interface Product {
  id: string;
  title: string;
  price: number;
  installments: {
    quantity: number;
    amount: number;
    hasInterest: boolean;
  };
  shipping: {
    free: boolean;
    deliveryTime: string;
  };
  stock: number;
  condition: string;
  soldQuantity: number;
  seller: string;
  images: string[];
  isBestSeller: boolean;
  hasFreeReturn: boolean;
}