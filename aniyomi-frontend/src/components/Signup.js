import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from '../auth/auth';
import Footer from './Footer';
import Popup from 'react-popup';
import Header from "./Header";

export const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    const { name, username, email, password, error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, username, email, password })
            .then(data => {
                if (data && data.error) {
                    setValues({ ...values, error: data.error, success: false });
                } else {
                    setValues({
                        ...values,
                        name: "",
                        username: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    });
                }
            })
            .catch(console.log("Error in signup"));
    };

    const signUpForm = () => {
        return (
            <div>
                <div style={{ width: "101vw", marginLeft: "-17.5vh" }}><Header /></div>
                <div className="d-flex justify-content-center">
                    <div className="signup">
                        <div className="d-flex justify-content-center">
                            <form>
                                <br></br>
                                <br></br>
                                <h3>Sign In</h3>
                                <br></br>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input onChange={handleChange("name")} type="text" className="form-control" placeholder="Enter name" />
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input onChange={handleChange("username")} type="text" className="form-control" placeholder="Enter username" />
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input onChange={handleChange("email")} type="email" className="form-control" placeholder="Enter email" />
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input onChange={handleChange("password")} type="password" className="form-control" placeholder="Enter password" />
                                </div>

                                <br></br>

                                <button onClick={onSubmit} type="submit" className="btn btn-primary btn-block">Submit</button>
                                <br></br>
                                <br></br>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-success"
                        style={{ display: success ? "" : "none" }}
                    >
                        New account was created successfully. Please{" "}
                        <Link to="/signin">Login Here</Link>
                    </div>
                </div>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}
                    >
                        {error}
                    </div>
                </div>
            </div>
        );
    };

    return (

        <div className="container">
            {errorMessage()}
            {successMessage()}
            {signUpForm()}
            <Footer />
        </div>

    );
}
