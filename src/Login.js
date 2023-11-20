import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';

const Login = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Username: "",
    email: "",
    Password: "",
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
        Username: "",
        email: "",
        Password: "",
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (formData) {
      if (formData.Username.trim() === "") {
        newErrors.Username = "Username is required";
      } else if (formData.Username.length < 3) {
        newErrors.Username = "Username must be at least 3 characters ";
      }
    }

    if (formData.Password.trim() === "") {
      newErrors.Password = "Password is required";
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
      <div id="Mainlog">
        <h2 className='login-title '>Login</h2>

        <form id='log-form' onSubmit={handleSubmit}>
          <div id="Cover">

            <div className="separates">
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

            <div className="separates">
              <div>
                <input
                  className="input"
                  type='password'
                  name="Password"
                  value={formData.Password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <br />
                {errors.Password && <div className="error">{errors.Password}</div>}
              </div>
            </div>

            <div className='forget-pass'>Forget Password ?</div>


            <div id="btns">
              <button id='submit' type="submit">Login</button>
            </div>
          </div>
        </form>

        <div className=' my-3'>
          <Link to="/Signin"> <button className='SignIn'>Sign In</button></Link>

        </div>

      </div>

    </>
  )
}


export default Login
