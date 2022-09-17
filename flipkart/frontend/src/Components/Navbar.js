import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Store } from './../Store';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const changeSticky = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener('scroll', changeSticky);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
  };

  return (
    // className={sticky ? 'header scrolled' : 'header'}
    <div className={sticky ? 'header scrolled' : 'header'}>
      <div className="container">
        <div className="pc-header">
          <div className="row">
            <div className="col-md-3 col-4 d-flex align-items-center">
              <Link className="navbar-brand" to="/">
                <img alt="logo" src="/images/logo.png" />
                <span>Flipkart</span>
              </Link>
            </div>
            <div className="col-md-6 col-8 d-flex align-items-center">
              <form className="input-group">
                <input
                  type="search"
                  className="form-control rounded search"
                  placeholder="Search"
                />
                <button type="submit" className="search-button">
                  search
                </button>
              </form>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
              {userInfo ? (
                <div className="dropdown">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi, {userInfo.name}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/orderhistory">
                        Order History
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={signoutHandler}
                      >
                        SignOut
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link className="nav-link" to="/signin">
                  <button
                    type="button"
                    className="name-button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sign In
                  </button>
                </Link>
              )}

              <Link to="/cart">
                <i className="fas fa-shopping-bag"></i>
                {cart.cartItems.length > 0 && (
                  <span className="badge">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
