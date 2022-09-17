import React from 'react';
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import Testimonial from '../Components/Testimonial';
import Header from './../Components/Header';
import Shop from './../Components/Shop';
import Subscribe from './../Components/Subscribe';
import Footer from './../Components/Footer';
import Arrival from './../Components/Arrival';

const HomeScreen = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Shop></Shop>
            <Arrival></Arrival>
            <Product></Product>
            <Testimonial></Testimonial>
            <Subscribe></Subscribe>  
            <Footer></Footer>
        </div>
    );
};

export default HomeScreen;