import React from 'react';

const Header = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="detail-box">
              <h1 data-aos="fade-up">
                <span>Sale 20% Off</span>
                <br />
                On Everything
              </h1>
              <p data-aos="fade-up" data-aos-delay="400">
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>
              <div data-aos="fade-up" data-aos-delay="600">
                <span className="btn-box">
                  <a href="/" data-aos="fade-up" data-aos-delay="600">
                    Shop Now
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src="/images/slider-bg.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
