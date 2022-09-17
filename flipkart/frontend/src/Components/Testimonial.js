import React from 'react';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper';

const Testimonial = () => {
  return (
    <>
      <section id="testimonial" className="client-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>
              Customar <span>Testimonial</span>
            </h2>
          </div>
          <Swiper
            navigation={true}
            slidesPerView={'auto'}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <div data-aos="fade-up">
              <SwiperSlide>
                <div
                  className="box col-lg-8 mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="images">
                    <img src="/images/client.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h3>Anna Trevor</h3>
                    <h5>customer</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Perferendis, ipsam maiores doloremque voluptates porro,
                      rerum, vitae ipsum veritatis repudiandae voluptatibus
                      fugiat sit odit vel beatae odio unde excepturi omnis quod.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box col-lg-8 mx-auto">
                  <div className="images">
                    <img src="/images/client.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h3>Anna Trevor</h3>
                    <h5>customer</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Perferendis, ipsam maiores doloremque voluptates porro,
                      rerum, vitae ipsum veritatis repudiandae voluptatibus
                      fugiat sit odit vel beatae odio unde excepturi omnis quod.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box col-lg-8 mx-auto">
                  <div className="images">
                    <img src="/images/client.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h3>Anna Trevor</h3>
                    <h5>customer</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Perferendis, ipsam maiores doloremque voluptates porro,
                      rerum, vitae ipsum veritatis repudiandae voluptatibus
                      fugiat sit odit vel beatae odio unde excepturi omnis quod.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="box col-lg-8 mx-auto">
                  <div className="images">
                    <img src="/images/client.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h3>Anna Trevor</h3>
                    <h5>customer</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Perferendis, ipsam maiores doloremque voluptates porro,
                      rerum, vitae ipsum veritatis repudiandae voluptatibus
                      fugiat sit odit vel beatae odio unde excepturi omnis quod.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
