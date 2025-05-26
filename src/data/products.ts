import type { Product } from "../types/product";
export const products: Product[] = [
  {
    id: "1",
    name: "Premium Laptop",
    description: "Desempenho poderoso com o que há de mais moderno em processamento e espaço de sobra para suas tarefas do dia a dia.",
    price: 1299.99,
    image: "/notebook.png",
    category: "Eletrônicos",
    featured: true
  },
  {
    id: "2",
    name: "Headset",
    description: "Mergulhe no som. Cancelamento de ruído, áudio impecável e bateria que acompanha seu ritmo.",
    price: 199.99,
    image: "/headset.png",
    category: "Eletrônicos"
  },
  {
    id: "3",
    name: "Cadeira Ergonômica",
    description: "Conforto e saúde para o seu dia a dia: cadeira ergonômica com ajuste de altura e suporte para a lombar.",
    price: 249.99,
    image: "/chair.png",
    category: "Mobília",
    featured: true
  },
  {
    id: "4",
    name: "Cafeteira",
    description: "Programe seu café e aproveite o sabor quente por horas com a jarra térmica eficiente.",
    price: 89.99,
    image: "/coffe.png",
    category: "Eletrodomésticos"
  },
  {
    id: "5",
    name: "Smart Watch",
    description: "Monitore seu desempenho e fique sempre conectado com este smartwatch cheio de recursos incríveis.",
    price: 159.99,
    image: "/smartwatch.png",
    category: "Eletrônicos",
    featured: true
  },
  {
    id: "6",
    name: "Teclado Wireless",
    description: "Compact wireless keyboard with customizable keys and long battery life.",
    price: 59.99,
    image: "/keyboard.png",
    category: "Eletrônicos"
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
