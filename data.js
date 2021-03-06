const bcrypt = require("bcryptjs");
const data = {
  users: [
    {
      name: "harsh",
      email: "harsh@gmail.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: true,
    },
    {
      name: "shubham",
      email: "shubham@gmail.com",
      password: bcrypt.hashSync("654321", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Hiskywin Slim T-shirt",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 50.99,
      brand: "Hiskywin",
      rating: 4.5,
      numReviews: 10,
      countInStock: 6,
      descripition: "hight quality product",
    },
    {
      name: "Nike Fit Slim T-shirt",
      category: "Shirts",
      image: "/images/product-2.jpg",
      price: 66.99,
      brand: "Nike",
      rating: 5,
      numReviews: 51,
      countInStock: 6,
      descripition: "hight quality product",
    },
    {
      name: "Adidas Denim Jacket",
      category: "Shirts",
      image: "/images/product-3.jpg",
      price: 60.99,
      brand: "Adidas",
      rating: 4,
      numReviews: 45,
      countInStock: 16,
      descripition: "hight quality product",
    },
    {
      name: "UnderArmour slim Pant",
      category: "Pants",
      image: "/images/product-4.jpg",
      price: 59.99,
      brand: "Under Armour",
      rating: 2.5,
      numReviews: 198,
      countInStock: 6,
      descripition: "hight quality product",
    },
    {
      name: "champion Fit Pant",
      category: "Pants",
      image: "/images/product-5.jpg",
      price: 11.99,
      brand: "champion",
      rating: 3.5,
      numReviews: 88,
      // countInStock: 6,
      descripition: "hight quality product",
    },
    {
      name: "AelfricEden pant",
      category: "Pants",
      image: "/images/product-6.jpg",
      price: 85.99,
      brand: "Aelfric Eden",
      rating: 4.5,
      numReviews: 45,
      countInStock: 6,
      descripition: "hight quality product",
    },
  ],
};

module.exports = data;
