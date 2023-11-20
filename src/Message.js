import "./Message.css";
import React, { useState } from "react";

const Message = () => {
    const [enquiry, setEnquiry] = useState(false);
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
        <div className="Mainpage">
          <div style={{ textAlign: "center", width: "100%", margin: "20px" }}>
            {!enquiry && <button onClick={() => {setEnquiry(true)}}>Message</button>}
          </div>
          {enquiry && (
            <form onSubmit={handleSubmit}>
              <div id="outter">
              <div className="header">
                <div></div>
                <p id="title">RESPONSIVE CONTACT FORM</p>
              <div className="close"><div onClick={() => setEnquiry(false)}>+</div></div>
              </div>
  
                <div className="separate">
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
  
                <div className="separate">
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
                    placeholder="message"
                  />
                  <br />
                  {errors.message && (
                    <div className="error">{errors.message}</div>
                  )}
                </div>
  
                <div className="btn">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          )}
        </div>
      </>
    );
  }
  
export default Message