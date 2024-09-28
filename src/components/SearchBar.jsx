import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/actions';

const SearchBar = () => {
  const searchQuery = useSelector(state => state.searchQuery);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input className='h-10 mr-3 text-xl mb-3 mt-10 border border-gray-400 p-2 rounded-md shadow-lg '
      type="text" 
      value={searchQuery} 
      onChange={handleSearch} 
      placeholder="Search for products..." 
    />
  );
};

export default SearchBar;
