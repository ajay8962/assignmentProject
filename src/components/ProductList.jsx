import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../api/productsAPI';
import { setProducts, incrementSkip } from '../redux/actions';


const ProductList = () => {
  const { products,loading, category, searchQuery, skip } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(category, searchQuery, skip);
      dispatch(setProducts(data));
    };
    loadProducts();
  }, [category, searchQuery, skip, dispatch]);

  const loadMore = () => {
    dispatch(incrementSkip());
  };


  return (
    <div className='text-2xl mb-5 mt-10'>
      {products.map(product => (
        <div key={product.id} className='mb-6 rounded-2xl shadow-lg'>
           <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="object-cover rounded-md " 
            />
          <h4 className='text-4xl font-sans font-bold '>Product name: {product.title}</h4>
          <p className='text-4xl font-sans '>Description: {product.description}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      <button className=' h-10 w-40 text-center text-white mr-5 mt-3 shadow-lg rounded-2xl bg-blue-400' onClick={loadMore} disabled={loading}>Load More</button>
      <button >Total Product: {products.length}</button>
    </div>
  );
};

export default ProductList;
