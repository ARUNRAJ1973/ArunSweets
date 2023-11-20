import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';

const Signin = () => {


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
                <h2 className='login-title '>Sign In</h2>

                <form id='log-form' onSubmit={handleSubmit}>
                    <div id="Cover">

                        <div className="separates">
                            <input
                                className="input"
                                type='text' name="Username"
                                value={formData.Username}
                                onChange={handleChange}
                                placeholder="Username"
                            />
                            <br />
                            {errors.Username && (
                                <div className="error">{errors.Username}</div>
                            )}
                        </div>

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
                            <button id='submit' type="submit">Sign In</button>
                        </div>
                    </div>
                </form>

                <div className=' my-3'>
                    <Link to="/Login"> <button className='SignIn'>Login</button></Link>
                </div>

            </div>

        </>
    )
}


export default Signin
