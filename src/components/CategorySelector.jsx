import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/actions';
import { fetchCategories } from '../api/productsAPI';

const CategorySelector = () => {
  const dispatch = useDispatch();
  const { categories, category } = useSelector((state) => state);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      dispatch({ type: 'SET_CATEGORIES', categories: data });
    };
    getCategories();
  }, [dispatch]);

  return (
    <select className='h-16 border text-4xl border-gray-400  rounded-md shadow-lg'
      value={category}
      onChange={(e) => dispatch(setCategory(e.target.value))}
    >
      <option value="">All</option>
      {categories.map((cat) => (
        <option key={cat.slug} value={cat.slug}>{cat.name}</option>
      ))}
    </select>
  );
};

export default CategorySelector;
