import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { signout, isAuthenticate } from '../auth/auth';



var style = {
    position: "relative",
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "2px",
    height: "40px",
    width: "100%",
    bottom: "0%",
    left: "0px",
    right: "0px"
};


const Footer = ({history}) => {



    const token = isAuthenticate() && isAuthenticate().token
    console.log(token);



    return (
        <div style={style} className="mt-5 d-flex justify-content-center footer">
            <h5>About</h5>
            <h5 className="text-success">
                &nbsp;
                Us
                &nbsp;
            </h5>

            {/* <form action="/Login">
                <button className="btn btn-primary btn-block">Login</button>
            </form> */}

                <button onClick={()=> {
                    signout(()=>{
                        history.push("/");
                    })
                }}  style={{ position: "absolute", height: "35px", margin: "1px", marginRight: "-90%"}} className="btn btn-primary btn-block">Logout</button>



        </div>
    )
}


export default withRouter(Footer);