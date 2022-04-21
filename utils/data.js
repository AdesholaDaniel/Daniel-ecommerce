import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@sample.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      numReviews: 10,
      category: 'Shirt',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      numReviews: 10,
      category: 'Shirt',
      image: '/images/shirt2.jpg',
      price: 60,
      brand: 'Adidas',
      rating: 4.3,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      numReviews: 10,
      category: 'Shirt',
      image: '/images/shirt3.jpg',
      price: 75,
      brand: 'Dior',
      rating: 4.7,
      countInStock: 30,
      description: 'A designer shirt',
    },
    {
      name: 'Classic Pants',
      slug: 'classic-pants',
      numReviews: 10,
      category: 'Pants',
      image: '/images/pants1.jpg',
      price: 100,
      brand: 'Casely',
      rating: 4.2,
      countInStock: 20,
      description: 'An office shirt',
    },
    {
      name: 'Golf Pants',
      slug: 'gold-pants',
      numReviews: 10,
      category: 'Pants',
      image: '/images/pants2.jpg',
      price: 70,
      brand: 'Raymond',
      rating: 4.5,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Free Pants',
      slug: 'free-pants',
      numReviews: 10,
      category: 'Pants',
      image: '/images/pants3.jpg',
      price: 95,
      brand: 'Nike',
      rating: 4.5,
      countInStock: 20,
      description: 'A popular pant',
    },
  ],
};

export default data;
