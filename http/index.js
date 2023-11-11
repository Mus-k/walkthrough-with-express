const http = require('http');

const menProducts = [
  { id: 1, name: "Men's T-shirt", price: 29.99, brand: "Nike", size: "M", category: "Clothing" },
  { id: 2, name: "Men's Shoes", price: 60.99, brand: "Converse", size: "S", category: "Footwear" },
  { id: 3, name: "Men's Sneaker", price: 99, brand: "Adidas", size: "L", category: "Footwear" },
  { id: 4, name: "Men's Jeans", price: 49.99, brand: "Levi's", size: "M", category: "Clothing" },
  { id: 5, name: "Men's Watch", price: 129.99, brand: "Casio", size: "One Size", category: "Accessories" },
  { id: 6, name: "Men's Hoodie", price: 39.99, brand: "Puma", size: "XL", category: "Clothing" },
  { id: 7, name: "Men's Backpack", price: 79.99, brand: "North Face", size: "One Size", category: "Accessories" },
  { id: 8, name: "Men's Shorts", price: 34.99, brand: "Under Armour", size: "L", category: "Clothing" },
  { id: 9, name: "Men's Sunglasses", price: 45.99, brand: "Ray-Ban", size: "One Size", category: "Accessories" },
  { id: 10, name: "Men's Jacket", price: 89.99, brand: "Columbia", size: "XL", category: "Clothing" },

];

const womenProducts = [
  { id: 1, name: "Women Dress", price: 129.99, brand: "Gucci", size: "S", category: "Clothing" },
  { id: 2, name: "Women Bracelet", price: 160.99, brand: "Louis Vuitton", size: "L", category: "Accessories" },
  { id: 3, name: "Women Skirt", price: 79, brand: "Gucci", size: "XL", category: "Clothing" },
  { id: 4, name: "Women High Heels", price: 89.99, brand: "Jimmy Choo", size: "M", category: "Footwear" },
  { id: 5, name: "Women Handbag", price: 199.99, brand: "Prada", size: "One Size", category: "Accessories" },
  { id: 6, name: "Women Blouse", price: 49.99, brand: "Zara", size: "S", category: "Clothing" },
  { id: 7, name: "Women Sunglasses", price: 69.99, brand: "Ray-Ban", size: "One Size", category: "Accessories" },
  { id: 8, name: "Women Sandals", price: 54.99, brand: "Birkenstock", size: "M", category: "Footwear" },
  { id: 9, name: "Women Jacket", price: 99.99, brand: "The North Face", size: "L", category: "Clothing" },
  { id: 10, name: "Women Earrings", price: 39.99, brand: "Tiffany & Co.", size: "One Size", category: "Accessories" },
];

// Create a server
const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'application/json');

  
  if (req.url === '/') {
    
    res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
  } else if (req.url === '/men') {
    //  '/men' endpoint
    res.end(JSON.stringify({ products: menProducts }));
  } else if (req.url === '/women') {
    // '/women' endpoint
    res.end(JSON.stringify({ products: womenProducts }));
  } else {
   
    res.statusCode = 404; // Not Found
    res.end(JSON.stringify({ message: 'Page not found' }));
  }
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
