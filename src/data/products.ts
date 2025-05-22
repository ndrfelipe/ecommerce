import type { Product } from "../types/product";
export const products: Product[] = [
  {
    id: "1",
    name: "Premium Laptop",
    description: "High performance laptop with the latest processor and ample storage for all your computing needs.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "electronics",
    featured: true
  },
  {
    id: "2",
    name: "Wireless Headphones",
    description: "Noise cancelling wireless headphones with premium sound quality and long-lasting battery life.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "electronics"
  },
  {
    id: "3",
    name: "Ergonomic Office Chair",
    description: "Comfortable ergonomic chair designed for long hours of sitting, with adjustable height and lumbar support.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    category: "furniture",
    featured: true
  },
  {
    id: "4",
    name: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe to keep your coffee hot for hours.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "appliances"
  },
  {
    id: "5",
    name: "Smart Watch",
    description: "Track your fitness goals and stay connected with this feature-packed smart watch.",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "electronics",
    featured: true
  },
  {
    id: "6",
    name: "Wireless Keyboard",
    description: "Compact wireless keyboard with customizable keys and long battery life.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    category: "electronics"
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};
