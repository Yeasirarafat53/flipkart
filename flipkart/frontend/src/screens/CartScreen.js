import React, { useContext } from 'react';
import MessageBox from '../Components/MessageBox';
import { Store } from '../Store';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import axios from 'axios';

const CartScreen = () => {
    const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry , Product is out of stock');
      return;
    }

    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({
      type: 'CART_REMOVE_ITEM',
      payload: item,
    });
  }

   const checkoutHandler = () => {
     navigate('/signin?redirect=/shipping');
   };

  return (
    <section>
      <Navbar></Navbar>
      <br />
      <br />
      <br />
      <div className="container mt-5">
        <h1>Shopping Cart</h1>
        <div className="row">
          <div className="col-md-8">
            {cartItems.length === 0 ? (
              <MessageBox>
                Cart is empty. <Link to="/"> Go Shopping</Link>
              </MessageBox>
            ) : (
              <div className=" list-group ">
                {cartItems.map((item) => (
                  <div className=" list-group-item">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        />{' '}
                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                      </div>

                      <div className="col-md-3">
                        <button
                          className="btn btn-light"
                          disabled={item.quantity === 1}
                          onClick={() =>
                            updateCartHandler(item, item.quantity - 1)
                          }
                        >
                          <i className="fas fa-minus-circle"></i>
                        </button>{' '}
                        <span>{item.quantity}</span>{' '}
                        <button
                          className="btn btn-light"
                          // disabled={item.quantity === 1}
                          onClick={() =>
                            updateCartHandler(item, item.quantity + 1)
                          }
                        >
                          <i className="fas fa-plus-circle"></i>
                        </button>
                      </div>

                      <div className="col-md-3">${item.price}</div>
                      <div className="col-md-2">
                        <button
                          className="btn btn-light"
                          onClick={() => removeItemHandler(item)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item">
                    <h3>
                      Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                      items) : <br />${' '}
                      {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                    </h3>
                  </div>
                  <div className="list-group-item">
                    <div className="d-grid">
                      <button
                        onClick={checkoutHandler}
                        disabled={cartItems.length === 0}
                        type="button"
                        className="btn btn-warning"
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartScreen;
