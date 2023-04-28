let catalog = [
  {
    title: 'Milk',
    price: 123.03,
    category: 'Farm',
    image: 'milk.png',
    _id: '1',
  },
  {
    title: 'Chesse',
    price: 150.03,
    category: 'Farm',
    image: 'chesse.png',
    _id: '2',
  },
  {
    title: 'Beef',
    price: 250,
    category: 'Farm',
    image: 'Beef.png',
    _id: '3',
  },
  {
    title: 'Avocado',
    price: 235.52,
    category: 'Patch',
    image: 'Avocado.png',
    _id: '4',
  },
  {
    title: 'Watermelon',
    price: 50,
    category: 'Garden',
    image: 'Watermelon.png',
    _id: '5',
  },
  {
    title: 'Bread',
    price: 75.2,
    category: 'Store',
    image: 'Bread.png',
    _id: '6',
  },
  {
    title: 'Lemonade',
    price: 23,
    category: 'Store',
    image: 'Lemonade.png',
    _id: '7',
  },
  {
    title: 'Coffee',
    price: 23,
    category: 'Store',
    image: 'Coffee.png',
    _id: '8',
  },
];

class DataService {
  getProducts() {
    return catalog;
  }
}
export default DataService;
