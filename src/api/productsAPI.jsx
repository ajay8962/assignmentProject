import axios from 'axios';

export const fetchCategories = async () => {
  const response = await axios.get('https://dummyjson.com/products/categories');
  return response.data;
};

export const fetchProducts = async (category, searchQuery, skip) => {
  let url = `https://dummyjson.com/products?limit=10&skip=${skip}`;
  if (category) url = `https://dummyjson.com/products/category/${category}?limit=10&skip=${skip}`;
  if (searchQuery) url += `&q=${searchQuery}`;

  const response = await axios.get(url);
  return response.data.products;
};
