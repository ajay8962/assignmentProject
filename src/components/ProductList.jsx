import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../api/productsAPI';
import { setProducts, incrementSkip } from '../redux/actions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProductList = () => {
  const { products, loading, category, searchQuery, skip } = useSelector(state => state);
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
    <div className='container mx-auto  text-xl mb-5 mt-10 '>
      <div className='grid grid-cols-3 gap-4'>
        {products.map(product => (
          <div>
            <Card key={product.id} style={{ width: '18rem' }} className='container mx-auto shadow-lg '>
              <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
              <Card.Body>
                <Card.Title className='font-bold'> {product.title}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {loading && <p>Loading...</p>}
      <button className=' h-10 w-40 text-center text-white mr-5 mt-3 shadow-lg rounded-2xl bg-blue-400' onClick={loadMore} disabled={loading}>Load More</button>
      <button >Total Product: {products.length}</button>
    </div>
  );
};

export default ProductList;
