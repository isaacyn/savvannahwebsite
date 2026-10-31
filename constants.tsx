
import { Dish } from './types';

export const KENYAN_DISHES: Dish[] = [
  {
    id: '1',
    name: 'Nyama Choma',
    category: 'Main',
    description: 'The pride of Kenya. Succulent, slow-roasted goat meat, seasoned to perfection and served with a pinch of salt.',
    price: 'KSh 1,200',
    imageUrl: 'https://picsum.photos/seed/nyamachoma/800/600',
    ingredients: ['Goat Meat', 'Salt', 'Smokey Charcoal Flavor']
  },
  {
    id: '2',
    name: 'Ugali & Sukuma Wiki',
    category: 'Main',
    description: 'The national staple. Maize meal porridge served with sautéed collard greens, onions, and tomatoes.',
    price: 'KSh 450',
    imageUrl: 'https://picsum.photos/seed/ugali/800/600',
    ingredients: ['Maize Flour', 'Water', 'Collard Greens', 'Onions']
  },
  {
    id: '3',
    name: 'Swahili Pilau',
    category: 'Main',
    description: 'Fragrant rice cooked in a rich broth of cloves, cardamom, and cinnamon, served with beef and Kachumbari.',
    price: 'KSh 850',
    imageUrl: 'https://picsum.photos/seed/pilau/800/600',
    ingredients: ['Basmati Rice', 'Beef', 'Pilau Masala', 'Cardamom']
  },
  {
    id: '4',
    name: 'Tilapia Fry',
    category: 'Main',
    description: 'Fresh whole tilapia from Lake Victoria, deep-fried until crispy and served with a spicy tomato gravy.',
    price: 'KSh 1,100',
    imageUrl: 'https://picsum.photos/seed/tilapia/800/600',
    ingredients: ['Whole Tilapia', 'Tomatoes', 'Green Pepper', 'Lemon']
  },
  {
    id: '5',
    name: 'Beef Samosas',
    category: 'Snack',
    description: 'Crispy triangular pastries filled with spiced minced beef and aromatic herbs.',
    price: 'KSh 150',
    imageUrl: 'https://picsum.photos/seed/samosa/800/600',
    ingredients: ['Wheat Flour', 'Minced Beef', 'Coriander', 'Cumin']
  },
  {
    id: '6',
    name: 'Mandazi',
    category: 'Snack',
    description: 'Soft, fluffy African donuts with a hint of cardamom. Perfect for breakfast or high tea.',
    price: 'KSh 100',
    imageUrl: 'https://picsum.photos/seed/mandazi/800/600',
    ingredients: ['Flour', 'Coconut Milk', 'Cardamom', 'Sugar']
  }
];

export const WHATSAPP_NUMBER = '0707205041';
export const WHATSAPP_LINK = `https://wa.me/254707205041?text=Hello! I'm interested in ordering some delicious Kenyan food.`;
