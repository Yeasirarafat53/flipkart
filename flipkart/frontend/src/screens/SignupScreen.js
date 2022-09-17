// import React, { useContext, useEffect, useState } from 'react';
// import Navbar from './../Components/Navbar';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { Store } from './../Store';
// import { getError } from './../utils';
// import { toast } from 'react-toastify';
// import Axios from 'axios';

// const SignupScreen = () => {
//   const navigate = useNavigate();
//   const { search } = useLocation();
//   const redirectInUrl = new URLSearchParams(search).get('redirect');
//   const redirect = redirectInUrl ? redirectInUrl : '/';

//    const [name, setName] = useState('');
//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
  
// const { state, dispatch: ctxDispatch } = useContext(Store);
// const { userInfo } = state;

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }
//     try {
//       const { data } = await Axios.post('/api/users/signup', {
//         name,
//         email,
//         password,
//       });
//       ctxDispatch({ type: 'USER_SIGNIN', payload: data });
//       localStorage.setItem('userInfo', JSON.stringify(data));
//       navigate(redirect || '/');
//     } catch (err) {
//       toast.error(getError(err));
//     }
//   };

//   useEffect(() => {
//     if (userInfo) {
//       navigate(redirect);
//     }
//   }, [navigate, redirect, userInfo]);
//     return (
//       <>
//         <Navbar />
//         <div className="container d-flex flex-column justify-content-center align-items-center login-center">
//           <form
//             onSubmit={submitHandler}
//             className="Login col-md-8 col-lg-4 col-11"
//           >
//             <input
//               type="text"
//               placeholder="Username"
//               onChange={(e) => setName(e.target.value)}
//             />
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
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />

//             <button type="submit">Register</button>
//             <p>
//               <Link to={`/signin?redirect=${redirect}`}>
//                 I Have Account <strong>Login</strong>
//               </Link>
//             </p>
//           </form>
//         </div>
//       </>
//     );
// };

// export default SignupScreen;










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

export default function SignupScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await Axios.post('/api/users/signup', {
        name,
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
        <title>Sign Up</title>
      </Helmet> */}
      <h1 className="my-3 text-center">Sign Up</h1>
      <Form onSubmit={submitHandler} className="form">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Enter your name" onChange={(e) => setName(e.target.value)} required />
        </Form.Group>

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
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your cpassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
        </Form.Group>
        <div className="mb-3">
          <Button className="w-100 btn btn-warning" type="submit">
            Sign Up
          </Button>
        </div>
        <div className="mb-3">
          Already have an account?{' '}
          <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
        </div>
      </Form>
    </Container>
  );
}