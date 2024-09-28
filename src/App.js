import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CategorySelector from './components/CategorySelector';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
        <CategorySelector />
        <ProductList />
      </div>
    </Provider>
  );
};

export default App;
