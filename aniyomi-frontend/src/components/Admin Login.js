import React, { useState } from "react";
import { signin, isAuthenticate, authenticate, signout } from '../auth/auth';
import { useHistory } from "react-router-dom";
import Popup from 'react-popup';
import { Link } from "react-router-dom";

export const Loginad = () => {
    const history = useHistory();
    const [values, setValues] = useState({
        username: "",
        password: "",
        error: "",
        success: false
    });

    const { username, password, error, success} = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signin({ username, password })
            .then(data => {
                if (data && data.error) {
                    setValues({ ...values, error: data.error, success: false });
                } else {
                   
                    authenticate(data, () => {
                        setValues({
                          ...values,
                          success:true
                        });
                      });

                }
            })
            .catch(console.log("Error in signin"));
    };




    const loginform = () => {
        return (

            <div className="d-flex justify-content-center" >
            <form>
            <br></br>
            <br></br>
            <br></br>
                <h3 className="d-flex justify-content-center">Sign In</h3>
                <br></br>
                <div className="form-group">
                    <label>Username</label>
                    <input onChange={handleChange("username")} type="text" className="form-control" placeholder="Enter email" />
                </div>
                <br></br>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={handleChange("password")} type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br></br>
                <div className="d-flex justify-content-center">
                <button onClick={onSubmit} type="submit" className="btn btn-primary btn-block">Login</button>
                </div>
            </form>
            </div>
        );
    };

    const successMessage = () => {
        Popup.alert('Hey there');
        if(success==true)
        {
            handleSubmit();
        }
        return (
                
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{ display: success ? "" : "none" }}>
                    You have logged in
                    </div>
                </div>
            
        );
    };

    const errorMessage = () => {
        return (
            <div className="container">
                <div className="col-md-6 offset-sm-3 text-center">
                    <br></br>
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
            {loginform()}
        </div>

    );




    async function handleSubmit() {
        
        await isAuthenticate()
        try {
          setTimeout(function()
          {
            history.push("/");
          }, 3000);

        } catch (e) {
          alert(e.message);
        }
      }

}
