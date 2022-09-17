// import React, { useContext, useEffect, useState } from 'react';
// import Axios from 'axios';
// import Navbar from '../Components/Navbar';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Store } from './../Store';

// const SigninScreen = () => {
//   const navigate = useNavigate();
//   const { search } = useLocation();
//   const redirectInUrl = new URLSearchParams(search).get('redirect');
//   const redirect = redirectInUrl ? redirectInUrl : '/';

//    const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//    const { state, dispatch: ctxDispatch } = useContext(Store);
//    const { userInfo } = state;

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await Axios.post('/api/users/signin', {
//         email,
//         password,
//       });
//       ctxDispatch({ type: 'USER_SIGNIN', payload: data });
//       localStorage.setItem('userInfo', JSON.stringify(data));
//       navigate('/');
//     } catch (err) {
//       alert("invalid email or password")
//     }
//   }

//     useEffect(() => {
//       if (userInfo) {
//         navigate(redirect);
//       }
//     }, [navigate,redirect, userInfo]);
  
//     return (
//       <>
//         <Navbar></Navbar>
//         <div className="container d-flex flex-column justify-content-center align-items-center login-center">
//           <form
//             onSubmit={submitHandler}
//             className="Login col-md-8 col-lg-4 col-11"
//           >
//             <input
//               type="email"
//               placeholder="Email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Login</button>
//             <p>
//               <Link to={'/signup'}>Create Account</Link>
//             </p>
//           </form>
//         </div>
//       </>
//     );
// };

// export default SigninScreen;







import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';

export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="small-container login-center">
      {/* <Helmet>
        <title>Sign In</title>
      </Helmet> */}
      <h1 className="my-3 text-center">Sign In</h1>
      <Form onSubmit={submitHandler} className="form">
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button className="btn btn-warning w-100" type="submit">
            Sign In
          </Button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}