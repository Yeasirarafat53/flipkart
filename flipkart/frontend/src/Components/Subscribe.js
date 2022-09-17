import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';







const Subscribe = () => {

   const [email, setEmail] = useState('');
   const submitForm = (e) => {
      e.preventDefault();
      
      if (email === "") {
        //  toast.error("enter your email",{
        //     autoClose: 5000,
        //  })
         swal('Opss!', 'Please Enter your email...!', 'error');
      } else {
        //  toast.success('Subscribed Successfully', {
        //    position: 'top-center',
        //    autoClose: 5000,
        //  });
         swal('Good job!', 'Subscribed Successfully!', 'success');
      }
      setEmail('');
      
   };
    return (
      <section id="subscribe" className="subscribe_section">
        <div className="container-fuild">
          <div className="box">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="subscribe_form ">
                  <div
                    className="heading_container heading_center"
                    data-aos="fade-up"
                  >
                    <h3>Subscribe To Get Discount Offers</h3>
                  </div>
                  <p data-aos="fade-up" data-aos-delay="200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <form action="" onSubmit={submitForm}>
                    <input
                      data-aos="fade-up"
                      data-aos-delay="300"
                      type="email"
                      value={email}
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span data-aos="fade-up" data-aos-delay="400">
                      <button type="submit" value="submit">
                        subscribe
                      </button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </section>
    );
};

export default Subscribe;