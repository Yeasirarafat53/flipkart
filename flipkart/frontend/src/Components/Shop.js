import React from 'react';

const Shop = () => {
  return (
    <section id='shop'>
      <div className="container shop-section">
        <header data-aos="fade-up" className="section-header">
          <h2>Why Shop With Us</h2>
        </header>

        <div className="row gy-4 ">
          <div className="col-lg-4 col-md-6">
            <div className="box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon">
                <img src="/images/delivery.png" className="icons" alt="" />
              </div>
              <div className="details-box">
                <h5>Fast Delivery</h5>
                <p>variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon">
                <img src="/images/free-delivery.png" alt="" />
              </div>
              <div className="details-box">
                <h5>Free Shipping</h5>
                <p>variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
                <img src="/images/badge.png" alt="" />
              </div>
              <div className="details-box">
                <h5>Best Quality</h5>
                <p>variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
