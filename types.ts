
export interface Dish {
  id: string;
  name: string;
  category: 'Main' | 'Side' | 'Snack' | 'Dessert';
  description: string;
  price: string;
  imageUrl: string;
  ingredients: string[];
}

export interface MenuItem {
  title: string;
  href: string;
}
