const initialState = { 
    category: '', 
    products: [], 
    searchQuery: '', 
    skip: 0, 
    categories: [] 
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, category: action.category, products: [], skip: 0 };
    case 'SET_PRODUCTS':
      return { ...state, products: [...state.products, ...action.products] };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.query, products: [], skip: 0 };
    case 'INCREMENT_SKIP':
      return { ...state, skip: state.skip + 10 };
    case 'SET_CATEGORIES':
      return { ...state, categories: action.categories };
    default:
      return state;
  }
};

export default productReducer;
