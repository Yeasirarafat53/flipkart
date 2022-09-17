import React from 'react';

const Arrival = () => {
  return (
    <section id='arrival'>
      <div className="container-fluid arrival-section" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 ml-auto">
            <div className="arrival_bg_box">
              <img src="/images/arrival-bg.png" alt="" />
            </div>
          </div>

          <div
            className="col-md-4 arrival-details"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="heading_container">
              <h1>#New Arrivals</h1>
            </div>
            <p>
              Vitae fugiat laboriosam officia perferendis provident aliquid
              voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
              Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique
              ex unde!
            </p>
            <span>
              <a href="/">Shop Now</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrival;
