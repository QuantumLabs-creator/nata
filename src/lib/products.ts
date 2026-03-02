export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  size: string;
  flavor: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "yogurt-natural-1l",
    name: "Yogurt Natural",
    price: 12,
    size: "1L",
    flavor: "Natural",
    image: "/products/temp.jpeg",
  },
  {
    id: "2",
    slug: "yogurt-fresa-500ml",
    name: "Yogurt de Fresa",
    price: 7,
    size: "500ml",
    flavor: "Fresa",
    image: "/products/temp2.jpeg",
  },
];
