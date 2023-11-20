import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import "./Contact.css";


const Contact = () => {

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value, "value......");

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(formData, "formData");
    e.preventDefault();
    if (validateForm()) {
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        product: "",
        message: "",
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (formData) {
      if (formData.firstname.trim() === "") {
        newErrors.firstname = "firstname is required";
      } else if (formData.firstname.length < 3) {
        newErrors.firstname = "firstname must be at least 3 characters ";
      }
    }

    if (formData.lastname.trim() === "") {
      newErrors.lastname = "lastname is required";
    }
    if (formData.product.trim() === "") {
      newErrors.product = "product is required";
    }

    if (formData) {
      if (formData.message.trim() === "") {
        newErrors.message = "message is required";
      } else if (formData.message.length < 20) {
        newErrors.message = "message must be at more than 20 characters ";
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailRegex)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  return (
    <> 
      <div id="Mainpage">
        <h2 className='contact-title '>Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div id="outter">
            <div className="header pt-3">
              <p id="title">RESPONSIVE CONTACT FORM</p>
            </div>
            <div id="separate">
              <div>
                <input
                  className="input"
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <br />
                {errors.firstname && (
                  <div className="error">{errors.firstname}</div>
                )}
              </div>
              <div>
                <input
                  className="input"
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                <br />
                {errors.lastname && (
                  <div className="error">{errors.lastname}</div>
                )}
              </div>
            </div>

            <div id="separate">
              <div>
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <br />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>

              <div>
                <input
                  className="input"
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="Product"
                />{" "}
                <br />
                {errors.product && (
                  <div className="error">{errors.product}</div>
                )}
              </div>
            </div>

            <div className="message">
              <input
                id="input"
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
              />
              <br />
              {errors.message && (
                <div className="error">{errors.message}</div>
              )}
            </div>
            <div className="btns">
              <button className='submit' type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>

      <div className='location'>
        <div className="container contdetails py-4">
          <div className="container row ">

            <div className=" col-lg-4 col-md-6 col-sm-12 mb-2  ">
              <div className="infos ">
                <h2>Head Office</h2>
                <p>Arun Sweets & Candies,<br /> 34/2, 2nd Floor,<br /> Rolex Rd, cCuddalore<br /> TamilNadu 607402</p>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 col-sm-12 mb-2  ">
              <div className="infos ">
                <h2>Information</h2>
                <p>+919360523173 </p>
                <h4>arunsweets@gmail.com</h4>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 col-sm-12 mb-2  ">
              <div className="infos ">
                <h2>Social Media</h2>
                <div>
                  <a href='https://www.facebook.com'><FontAwesomeIcon className='px-3 fs-4 pt-3' icon={faFacebookF} /></a>
                  <a href='https://www.instagram.com'><FontAwesomeIcon className='px-3 fs-4 pt-3' icon={faInstagram} /></a>
                  <a href='https://www.linkedin.com'><FontAwesomeIcon className='px-3 fs-4 pt-3' icon={faLinkedin} /></a>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>

    </>
  )
}

export default Contact;