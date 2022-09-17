import React, { useContext, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
// import data from './../data';
import Rating from './Rating';
import axios from 'axios';
import logger from 'use-reducer-logger';
import { Store } from '../Store';
import { toast } from 'react-toastify';

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload}

    default:
      return state;
      
  };
}


const Product = () => {
  // const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products:[],
    loading: true,
    error:'',
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: "FETCH_SUCCESS", payload: result.data })
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message })
      }
      
      // setProducts(result.data)
    };
    fetchData();
  }, []);

 const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart:{cartItems}, } = state;
  
const addToCartHandler = async (item) => {
  const existItem =cartItems.find((x) => x._id === item._id);
  const quantity = existItem ? existItem.quantity + 1 : 1;
  const { data } = await axios.get(`/api/products/${item._id}`);
  if (data.countInStock < quantity) {
    // window.alert('Sorry , Product is out of stock');
    toast.warning('Sorry , Product is out of stock', {
      position: 'top-center',
      autoClose: 5000,
    });
    return;
  }

  ctxDispatch({
    type: 'CART_ADD_ITEM',
    payload: { ...item, quantity },
  });
};


  return (
    <section id="product" className="product_section layout_padding">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Our Products</h2>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="400">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            products.map((product) => (
              <div className="col-sm-6 col-md-4 col-lg-4" key={product.slug}>
                <div className="box">
                  <div className="img-box">
                    <Link to={`/product/${product.slug}`}>
                      <img src={product.image} alt={product.name} />
                    </Link>
                  </div>

                  <div className="detail-box">
                    <Link to={`/product/${product.slug}`} className="title">
                      <h5 className="titles">{product.name}</h5>
                    </Link>

                    <h5>${product.price}</h5>
                  </div>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                  <br />
                  <button onClick={() =>addToCartHandler(product)} className="round-black-btn">Add To Cart</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="btn-box" data-aos="fade-up" data-aos-delay="600">
          <a href="/">View All products</a>
        </div>
      </div>
    </section>
  );
};

export default Product;
